import ZoomLogoComp from "../images/company/zoomlogo.png"
import ZoomLogoStud from "../images/student/zoomlogo.png"


const DashboardMatch = ({ userType, matchType, name, school, degree, major, meeting }) => {
  return (
    <div className="match-box">
    {
      userType === true && (
        <div className="student-match">
          <p className="match-content" id="match-name"> { name } </p>
          <p className="match-content" id="match-school"> { school } </p>
          <p className="match-content" id="match-major-degree"> { degree + ", " + major } </p>
          {
            matchType === "upcoming" && (
              <div className="zoom-meeting">
                <img className="meeting-content" id="zoom-logo" src={ZoomLogoComp} alt="zoom_logo" />
                <p className="meeting-content" id="meeting-time"> { meeting } </p>
              </div>
            )
          }
          <div className="match-bottom">

          </div>
        </div>
      )
    }


    </div>
  )
}

export default DashboardMatch
