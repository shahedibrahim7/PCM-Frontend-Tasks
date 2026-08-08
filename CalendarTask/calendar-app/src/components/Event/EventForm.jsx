import { useState } from "react";
import { formatDate } from "../../utilities/dateHelper";

function EventForm({
  selectedDate,
  addEvent,
  updateEvent,
  deleteEvent,
  closeForm,
  editingEvent
}) {


  const [title, setTitle] = useState(
    editingEvent ? editingEvent.title : ""
  );


  const [time, setTime] = useState(
    editingEvent ? editingEvent.time : ""
  );


  const [description, setDescription] = useState(
    editingEvent ? editingEvent.description : ""
  );



  function handleSubmit(e){

    e.preventDefault();


    const eventData = {

      id: editingEvent 
        ? editingEvent.id 
        : Date.now(),


      title,

      time,

      description,

        date: formatDate(selectedDate)

    };


    if(editingEvent){

      updateEvent(eventData);

    }
    else{

      addEvent(eventData);

    }


    closeForm();

  }



  return (

    <div className="event-form">


      <h3>

        {editingEvent ? "Edit Event" : "Add Event"}

      </h3>



      <form onSubmit={handleSubmit}>


        <input

          value={title}

          placeholder="Title"

          onChange={(e)=>setTitle(e.target.value)}

          required

        />



        <input

          type="time"

          value={time}

          onChange={(e)=>setTime(e.target.value)}

          required

        />



        <textarea

          value={description}

          placeholder="Description"

          onChange={(e)=>setDescription(e.target.value)}

        />



        <button type="submit">

          Save

        </button>



        {
          editingEvent && (

            <button

              type="button"

              onClick={()=>{

                deleteEvent(editingEvent.id);

                closeForm();

              }}

            >

              Delete

            </button>

          )
        }



        <button

          type="button"

          onClick={closeForm}

        >

          Cancel

        </button>


      </form>


    </div>

  );

}


export default EventForm;