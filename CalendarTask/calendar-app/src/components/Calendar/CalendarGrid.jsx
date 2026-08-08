import DayCell from "./DayCell";

import { generateCalendar } from "../../utilities/calendar";


const weekdays = [
  "Sun",
  "Mon",
  "Tue",
  "Wed",
  "Thu",
  "Fri",
  "Sat"
];


function CalendarGrid({
 currentDate,
 events,
 selectDate,
 selectEvent
}){


  const year = currentDate.getFullYear();

  const month = currentDate.getMonth();


  const calendar = generateCalendar(year, month);



  return (

    <div className="calendar-grid">


      {weekdays.map((day)=>(
        <div 
          key={day}
          className="weekday"
        >
          {day}
        </div>
      ))}



      {calendar.map((dayData,index)=>(
        <DayCell

        key={index}

        dayData={dayData}

        events={events}

        selectDate={selectDate}

        selectEvent={selectEvent}

        />

      ))}


    </div>

  );
}


export default CalendarGrid;