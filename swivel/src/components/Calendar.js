import MainNav from './MainNav'
import SideNav from './SideNav'

const Calendar = ( ) => {
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
    </div>
  )
}

export default Calendar
