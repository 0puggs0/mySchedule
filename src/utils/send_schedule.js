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
// Функция для отправки данных на сервер
async function sendDataToServer(data) {
  try {
    const response = await fetch("https://oh.sssh.it/add-schedule", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        token:
          "lQwj6YMrUiOsyEspsGliZbMy6ioeErgXzlyICIHqpCBB0QTMIOVo29CxQPAJ6zBJ",
      },
      body: JSON.stringify(data),
    });
    if (!response.ok) {
      throw new Error(`Ошибка: ${response.status}`);
    }
    console.log("Данные успешно отправлены:" + data);
  } catch (error) {
    console.error("Ошибка при отправке данных:", error);
  }
}

// Чтение всех JSON файлов из папки и отправка данных на сервер
fs.readdir(jsonFilesDirectory, (err, files) => {
  if (err) {
    return console.error("Ошибка при чтении папки:", err);
  }

  files.forEach((file) => {
    if (path.extname(file) === ".json") {
      const filePath = path.join(jsonFilesDirectory, file);
      const jsonData = readJsonFile(filePath);

      // Предполагается, что jsonData - это массив
      jsonData
        .map((item) => {
          const [day, month, year] = item.key.split(".");
          const date = `${year}-${month}-${day}`;
          return { ...item, week: getWeeksSince(date) };
        })
        .forEach((item) => {
          sendDataToServer(item);
        });
    }
  });
});
