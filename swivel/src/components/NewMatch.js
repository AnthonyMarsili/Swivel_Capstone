// this is what will get rendered when there's a new upcoming match
import PlaceholderImg from "../images/student/student2.jpeg"

const NewMatches = ({ userType, userAvail, matchInfo, getTimeFromMatch }) => {

  const matchAvail = matchInfo.availability

  const mutualAvail = userAvail.filter(value => matchAvail.includes(value))

  // only keep the first three times
  mutualAvail.splice(3, mutualAvail.length)

  /*if(userType === false){
    var matchColorId = "new-stud-match"
  } else {
    var matchColorId = "new-comp-match"
  }*/

  var availableTimes = mutualAvail.map(function(time){
                return <button className="suggested-time" onClick={() => getTimeFromMatch(time)}> { time } </button>
              })

  return (
    <div className="new-match">
      {
        // user type is student
        userType === false && (
          <div className="new-match-div" id="new-stud-match">
            <img className="match-pic" src={PlaceholderImg} alt="profile_pic" />
            <p className="name"> { matchInfo.name } </p>
            <p className="line1"> { matchInfo.position + ", " + matchInfo.org }  </p>
            <p className="line2"> { matchInfo.loc } </p>
            <h1 className="match-title"> You've Connected! </h1>
            {
              // no mutual times, send something that says the upcoming meeting is right now
              mutualAvail.length === 0 && (
                <div className="no-mutual">
                  <p className="no-mutual-info">
                   You and {matchInfo.name} don't have any mutually available times :( Send them an email at {matchInfo.email} to schedule a meeting.
                  </p>
                  <button className="continue-matching" onClick={() => getTimeFromMatch(new Date().toISOString())}></button>
                </div>
              )
            }
            {
              // only do the first 3 suggested
              mutualAvail.length !== 0 && (
                <div className="suggested">
                  { availableTimes }
                </div>
              )
            }
          </div>
        )
      }
      {
      userType === true && (
        <div className="new-match-div" id="new-comp-match">
          <img className="match-pic" src={PlaceholderImg} alt="profile_pic" />
          <p className="name"> { matchInfo.name } </p>
          <p className="line1"> { matchInfo.degree + ", " + matchInfo.major }  </p>
          <p className="line2"> { matchInfo.loc } </p>
          <h1 className="match-title"> You've Connected! </h1>
          {
            // no mutual times, send something that says the upcoming meeting is right now
            mutualAvail.length === 0 && (
              <div className="no-mutual">
                <p className="no-mutual-info">
                 You and {matchInfo.name} don't have any mutually available times :( Send them an email at {matchInfo.email} to schedule a meeting.
                </p>
                <button className="continue-matching" onClick={() => getTimeFromMatch(new Date().toISOString())}></button>
              </div>
            )
          }
          {
            // only do the first 3 suggested
            mutualAvail.length !== 0 && (
              <div className="suggested">
                { availableTimes }
              </div>
            )
          }
        </div>
      )
    }
    </div>
  )
}

export default NewMatches
