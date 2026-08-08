# Calendar App

This is a simple calendar app made with React and JavaScript. It allows users to view the calendar and create, edit and delete events.

## Project Structure

The project is inside the `src` folder.

* `components/Calendar` contains the main calendar components:

  * `Calendar.jsx` - main calendar component
  * `CalendarGrid.jsx` - displays the calendar days
  * `CalendarHeader.jsx` - handles the calendar header and navigation
  * `DayCell.jsx` - displays each day

* `components/Event`

  * `EventForm.jsx` - form used to add and edit events

* `data`

  * `events.json` - contains the initial event data

* `pages`

  * `Home.jsx` - main page of the application

* `services`

  * `eventService.js` - handles the event data and event operations

* `styles`

  * `calendar.css` - styles for the calendar

* `utilities`

  * `calendar.js` - calendar related functions
  * `dateHelper.js` - functions for working with dates

* `App.jsx` - main React component

* `index.css` - general styles

## Decisions

I separated the calendar into smaller components so the code is easier to understand and manage.

I also created separate files for event handling, date functions and styling instead of keeping everything inside the main calendar component.

For the initial events, I used a JSON file. The event service is used to manage the event data.

## Challenges

One challenge was making the different calendar components work together correctly.

Another challenge was handling dates and making sure events appear on the correct day.

I also had to make sure that adding, editing and deleting events updates the calendar correctly.

## Future Improvements

In the future, I could improve the project by:

* Adding reminders and notifications
* Adding recurring events
* Adding week and day views
* Improving the mobile and tablet design
* Adding more event details and options
* Adding user accounts
