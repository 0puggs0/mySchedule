export function getDayOfWeek(dateString: string) {
    const days = [
      "Воскресенье",
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
    ];
    const [day, month, year] = dateString.split(".");
    const formattedDate = `${year}-${month}-${day}`;
    const date = new Date(formattedDate);
    return days[date.getDay()];
  }