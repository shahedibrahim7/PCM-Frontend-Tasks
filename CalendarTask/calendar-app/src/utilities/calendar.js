// Number of days in a month
export function getDaysInMonth(year, month) {
  return new Date(year, month + 1, 0).getDate();
}

// First weekday of the month (0 = Sunday)
export function getFirstDayOfMonth(year, month) {
  return new Date(year, month, 1).getDay();
}

// Generate 42 calendar cells
export function generateCalendar(year, month) {
  const days = [];

  const firstDay = getFirstDayOfMonth(year, month);

  // First visible day
  const startDate = new Date(year, month, 1 - firstDay);

  for (let i = 0; i < 42; i++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + i);

    days.push({
      date,
      day: date.getDate(),
      currentMonth: date.getMonth() === month,
    });
  }

  return days;
}