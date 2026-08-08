import { useState } from "react";

import { useEffect } from "react";

import CalendarHeader from "./CalendarHeader";
import CalendarGrid from "./CalendarGrid";
import EventForm from "../Event/EventForm";

import "../../styles/calendar.css";

import { 
  getEvents,
  createEvent,
  updateEvent as updateEventService,
  deleteEvent as deleteEventService
} from "../../services/eventService";


function Calendar() {


  const [currentDate, setCurrentDate] = useState(new Date());


  const [events,setEvents] = useState([]);


  const [selectedDate,setSelectedDate]=useState(null);

  const [editingEvent,setEditingEvent]=useState(null);


useEffect(()=>{

  async function loadEvents(){

    const data = await getEvents();

    setEvents(data);

  }


  loadEvents();

},[]);


async function addEvent(event){

 const created = await createEvent(event);

 setEvents(prev=>[
   ...prev,
   created
 ]);

}


async function updateEventHandler(updatedEvent){

 await updateEventService(updatedEvent);


 setEvents(prev =>
   prev.map(event =>
     event.id === updatedEvent.id
     ? updatedEvent
     : event
   )
 );

}



async function deleteEventHandler(id){

 await deleteEventService(id);


 setEvents(prev =>
  prev.filter(event => event.id !== id)
 );

}

  return (

    <div className="calendar-container">


      <CalendarHeader

        currentDate={currentDate}

        setCurrentDate={setCurrentDate}

      />


    <CalendarGrid

        currentDate={currentDate}

        events={events}

        selectDate={(date)=>{

            setSelectedDate(date);

            setEditingEvent(null);

        }}

        selectEvent={(event)=>{

            setSelectedDate(new Date(event.date));

            setEditingEvent(event);

        }}

    />



      {
        selectedDate && (

            <EventForm

                selectedDate={selectedDate}

                addEvent={addEvent}

                updateEvent={updateEventHandler}

                deleteEvent={deleteEventHandler}

                editingEvent={editingEvent}

                closeForm={()=>{

                    setSelectedDate(null);

                    setEditingEvent(null);

                }}

            />

        )
      }



    </div>

  );

}


export default Calendar;