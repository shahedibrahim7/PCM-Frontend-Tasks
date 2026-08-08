import { formatDate } from "../../utilities/dateHelper";
function DayCell({
 dayData,
 events,
 selectDate,
 selectEvent
}) {


  const today = new Date();


  const isToday =
    dayData.date.getDate() === today.getDate() &&
    dayData.date.getMonth() === today.getMonth() &&
    dayData.date.getFullYear() === today.getFullYear();



const dayEvents = events.filter((event)=>{

  return event.date === formatDate(dayData.date);

});



  return (

    <div

      className={`
        day-cell
        ${!dayData.currentMonth ? "other-month" : ""}
        ${isToday ? "today" : ""}
      `}


      onClick={()=>selectDate(dayData.date)}

    >


      <div className="day-number">

        {dayData.day}

      </div>



      {
        dayEvents.map((event)=>(
        <div

            key={event.id}

            className="event"

            onClick={(e)=>{

                e.stopPropagation();

                selectEvent(event);

            }}

        >
            {event.title}

        </div>

        ))
      }


    </div>

  );

}


export default DayCell;