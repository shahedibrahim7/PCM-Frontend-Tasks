import eventsData from "../data/events.json";


const STORAGE_KEY = "calendar_events";


// GET events
export function getEvents() {

  const savedEvents = localStorage.getItem(STORAGE_KEY);


  if (savedEvents) {

    return Promise.resolve(
      JSON.parse(savedEvents)
    );

  }


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(eventsData)
  );


  return Promise.resolve(eventsData);

}



// CREATE event
export function createEvent(newEvent) {


  const savedEvents = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  );


  const updatedEvents = [
    ...savedEvents,
    newEvent
  ];


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)
  );


  return Promise.resolve(newEvent);

}



// UPDATE event
export function updateEvent(updatedEvent) {


  const savedEvents = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  );


  const updatedEvents = savedEvents.map(event =>

    event.id === updatedEvent.id
      ? updatedEvent
      : event

  );


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)

  );


  return Promise.resolve(updatedEvent);

}



// DELETE event
export function deleteEvent(id) {


  const savedEvents = JSON.parse(
    localStorage.getItem(STORAGE_KEY)
  );


  const updatedEvents = savedEvents.filter(event =>

    event.id !== id

  );


  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(updatedEvents)

  );


  return Promise.resolve(id);

}