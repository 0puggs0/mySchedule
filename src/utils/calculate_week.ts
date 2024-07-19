function getWeekNumberAndDayName(date: Date) {
    // Определение начальной даты 
    const startDate = new Date(2023, 8, 1); 
    // первая пятницу сентября
    const firstFriday = new Date(startDate.setDate(startDate.getDate() + (5 - startDate.getDay() + 7) % 7));
    // Начальное значение номера недели
    const startWeekNumber = 191;
    
    const diffDays = Math.floor(+date - +firstFriday) / (24 * 60 * 60 * 1000);
    const weekNumber = startWeekNumber + Math.floor(diffDays / 7);
    
    const daysOfWeek = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'];
    // Получение названия дня недели
    const dayName = daysOfWeek[date.getDay()];
    
    return `Номер недели: ${weekNumber}, День недели: ${dayName}`;
  }
  
  // Пример использования функции:
  const today = new Date();
  