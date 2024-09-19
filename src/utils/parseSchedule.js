const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const path = require("path");

async function getSoup(url) {
  const response = await axios.get(url, {
    headers: {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.0.0 Safari/537.36",
    },
  });
  return cheerio.load(response.data);
}

function parsingGroups(lastTwoTables, exclude) {
  const allText = [];
  lastTwoTables.each((_, table) => {
    cheerio(table)
      .find("tr")
      .each((_, row) => {
        const text = cheerio(row).text().trim();
        const temp = cheerio(row).find("a");
        const href = temp.length ? temp.attr("href") : null;

        if (text && !exclude.some((word) => text.includes(word))) {
          allText.push([
            text.replace("(з/о)", ""),
            href ? href.split("obj=")[1] : null,
          ]);
        }
      });
  });

  return Array.from(new Set(allText.map(JSON.stringify))).map(JSON.parse);
}

function getDataOneClass(
  numberSessions,
  startSession,
  endSession,
  discipline,
  teacher,
  address,
  cabinet,
) {
  return {
    numOfPair: numberSessions,
    timeStart: startSession,
    timeEnd: endSession,
    predmet: discipline,
    professor: teacher,
    adress: address,
    auditory: cabinet,
  };
}

function getUrl(numberGroup) {
  const baseUrl = "https://lk.ks.psuti.ru/?mn=2&obj=";
  const minWeek = 139;
  const maxWeek = 286;
  const strWeek = "&wk=";
  const allUrlGroup = [];

  for (let i = minWeek; i <= maxWeek; i++) {
    allUrlGroup.push(`${baseUrl}${numberGroup}${strWeek}${i}`);
  }
  return allUrlGroup;
}

async function getNameGroups() {
  const urlGroups = "https://lk.ks.psuti.ru/?mn=2";
  const $ = await getSoup(urlGroups);
  const tables = $("body > table");
  const lastTwoTables = tables.slice(-2);
  const exclude = ["отделение", "группу", "курс", "\n"];
  return parsingGroups(lastTwoTables, exclude);
}

function getDateAndWeek(trText, group) {
  const patternDataAndWeek = /(\d{2}\.\d{2}\.\d{4}) \/ (\d+)/;
  const match = trText.match(patternDataAndWeek);
  if (match) {
    return { key: match[1], group: group, week: match[2] };
  }
}

function setTableHeader(child, columnsSessions) {
  cheerio(child)
    .find("td")
    .each((i, td) => {
      const tdText = cheerio(td).text();
      if (tdText in columnsSessions) {
        columnsSessions[tdText] = i;
      }
    });
  return columnsSessions;
}

function getDataPage(tds) {
  if (tds.length === 0 || tds[0].children.length === 0) return null;

  const numberSessions = cheerio(tds[0]).text();
  const timePattern = /\b\d{2}:\d{2}/g;
  const timeSessionsText = cheerio(tds[1]).text();
  const timeSessions = timeSessionsText.match(timePattern) || [];

  const startSession = timeSessions[0] || "";
  const endSession = timeSessions[1] || "";

  const contentList = Array.from(cheerio(tds[3]).contents()).map((el) =>
    cheerio(el).text().trim(),
  );
  let discipline = "",
    teacher = "",
    address = "",
    cabinet = "";

  if (contentList.length > 0) discipline = contentList[0];
  if (contentList.length > 1) teacher = contentList[1];
  if (contentList.length > 2) address = contentList[2];
  if (contentList.length > 3) cabinet = contentList[3].replace("Кабинет: ", "");

  return [
    numberSessions,
    startSession,
    endSession,
    discipline,
    teacher,
    address,
    cabinet,
  ];
}

async function getAllData(url, nameGroup) {
  const $ = await getSoup(url);
  const allTables = $("body > table");
  const tableSchedule = allTables.eq(2);

  const allData = [];
  let dictAllDataPage = {};
  let listClassInDay = [];
  let sessionsFound = false;
  let findWeekDay = false;

  const columnsSessions = {
    "№ пары": -1,
    "Время занятий": -1,
    "Дисциплина, преподаватель": -1,
  };
  const weekday = [
    "Понедельник",
    "Вторник",
    "Среда",
    "Четверг",
    "Пятница",
    "Суббота",
    "Воскресенье",
  ];

  tableSchedule.children().each((_, child) => {
    if (child.nodeType === 3) return; // Skip text nodes
    const trText = $(child).text();

    if (weekday.some((day) => trText.includes(day))) {
      if (listClassInDay.length) {
        dictAllDataPage.schedule = listClassInDay;
        allData.push(dictAllDataPage);
      }
      dictAllDataPage = getDateAndWeek(trText, nameGroup);
      listClassInDay = [];
      findWeekDay = true;
      sessionsFound = false;
      return;
    }

    if (findWeekDay) {
      setTableHeader(child, columnsSessions);
      findWeekDay = false;
      sessionsFound = true;
      return;
    }

    if (sessionsFound) {
      const tds = $(child).find("td");
      if (tds.length === 1) {
        sessionsFound = false;
        return;
      }

      const data = getDataPage(tds);
      if (data) {
        const dataOfClass = getDataOneClass(...data);
        listClassInDay.push(dataOfClass);
      }
    }
  });

  if (listClassInDay.length) {
    dictAllDataPage.schedule = listClassInDay;
    allData.push(dictAllDataPage);
  }
  return allData;
}

(async () => {
  const allGroups = await getNameGroups();
  console.log(`Total groups found: ${allGroups.length}`);
  console.log(allGroups);

  for (const [i, group] of allGroups.entries()) {
    const urls = getUrl(group[1]);
    const nameGroups = group[0];
    const allData = [];

    const promises = urls.map((url) => getAllData(url, nameGroups));
    const results = await Promise.all(promises);

    for (const res of results) {
      allData.push(...res);
    }

    fs.writeFileSync(
      path.join(__dirname, `${nameGroups}.json`),
      JSON.stringify(allData, null, 2),
      "utf-8",
    );
    console.log(
      `Data written for group: ${nameGroups} (${i + 1}/${allGroups.length})`,
    );
  }
})();
