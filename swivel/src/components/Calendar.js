import MainNav from './MainNav'
import SideNav from './SideNav'
//import Calendar from 'react-calendar'
//import 'react-calendar/dist/Calendar.css'

const CalendarComponent = ( ) => {
  /*
  This is the component for the "calendar" on the side nav
   it should allow them to
    - connect their Google calendar and show their availabilities on a calendar view
              - (shouldn't be that hard look at the documentation for freebusy method)
    - paint over times they are available
    - display any meetings they're going to have

  The calendar is where you populate the "availabilities" field in the user.
   */
  return (
    <div>
      <MainNav />
      <SideNav />
      <div id = 'calendarOnScreen'>
        {
          /*<Calendar/>*/
        }
      </div>
    </div>
  )
}

export default CalendarComponent
