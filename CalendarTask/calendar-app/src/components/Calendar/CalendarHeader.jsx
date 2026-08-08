const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function CalendarHeader({ currentDate, setCurrentDate }) {
  function previousMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        1
      )
    );
  }

  function nextMonth() {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        1
      )
    );
  }

  function goToToday() {
    setCurrentDate(new Date());
  }

  return (
    <div className="calendar-header">
      <button onClick={previousMonth}>◀</button>

      <h2>
        {months[currentDate.getMonth()]} {currentDate.getFullYear()}
      </h2>

      <div>
        <button onClick={nextMonth}>▶</button>

        <button onClick={goToToday}>Today</button>
      </div>
    </div>
  );
}

export default CalendarHeader;