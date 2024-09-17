const fs = require("fs");
const path = require("path");
const fetch = require("node-fetch");
const dayjs = require("dayjs");

// Путь к папке с JSON файлами
const jsonFilesDirectory = "../data";

// Функция для чтения JSON файла и возврата содержимого в виде объекта
function readJsonFile(filePath) {
  const fileContent = fs.readFileSync(filePath, "utf8");
  return JSON.parse(fileContent);
}

function getWeeksSince(date) {
  // Преобразуем строки дат в объекты Dayjs
  const start = dayjs("2020-01-06");
  const end = dayjs(date);
  const daysDiff = end.diff(start, "day");
  const weeksDiff = Math.floor(daysDiff / 7);

  return weeksDiff + 1;
}

// Функция для отправки одного элемента данных на сервер с задержкой
async function sendDataToServer(item) {
  console.log(item);
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch("https://oh.sssh.it/add-schedule-json", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          token:
            "lQwj6YMrUiOsyEspsGliZbMy6ioeErgXzlyICIHqpCBB0QTMIOVo29CxQPAJ6zBJ",
        },
        body: JSON.stringify({ schedule: item }),
      });
      // if (!response.ok) {
      //   throw new Error(`Ошибка: ${response.status}`);
      // }
      console.log("Элемент данных успешно отправлен:");
      resolve();
    } catch (error) {
      console.error("Ошибка при отправке элемента данных:", error);
      reject(error);
    }
  });
}

// Чтение всех JSON файлов из папки и отправка элементов данных на сервер с задержкой
fs.readdir(jsonFilesDirectory, async (err, files) => {
  if (err) {
    return console.error("Ошибка при чтении папки:", err);
  }

  for (const file of files) {
    if (path.extname(file) === ".json") {
      const filePath = path.join(jsonFilesDirectory, file);
      const jsonData = readJsonFile(filePath);
      const data = [];
      // Предполагается, что jsonData - это массив
      for (const item of jsonData) {
        console.log(item);
        console.log(item.key);
        const [day, month, year] = item.key.split(".");
        const date = `${year}-${month}-${day}`;
        const dataWithWeek = { ...item, week: getWeeksSince(date) };
        data.push(dataWithWeek);
      }
      await sendDataToServer(data);
    }
  }
});
