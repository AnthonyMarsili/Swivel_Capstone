/* landing page (defaults to company side) */
import stud1 from "../images/student/landing_header.png"
import comp1 from "../images/company/landing_header.png"
import studBanner from "../images/student/company_banner.png"
import compBanner from "../images/company/uni_banner.png"


import {Link} from 'react-router-dom'


const Landing = () => {
  const userType = window.location.pathname;
      if(userType === "/students") {
        const sec1Info = "Many students don’t know their range of " +
                          " options when it comes to internships and full-time positions. "
        const sec1Info1 = "Our networking platform will personally connect you with opportunities " +
                          "at startups to help you reach your full potential."
        const sec1Heading = "Start making real impact now"

        const sec3Heading = "How Swivel can kickstart your career."
        const sec3p1Head = "Create your profile."
        const sec3p1 = "Take 2 minutes to create a personalized profile so we can find the best fit for you."

        const sec3p2Head = "Start matching."
        const sec3p2 = "Behind the scenes, our filtering algorithm will create a curated list of startups that we"+
                        " think are a good fit. Select the ones you are interested in."

        const sec3p3Head = "Unlock career opportunities."
        const sec3p3 = "Have one on one video conversations with startups to grow your network and accelerate your job hunt. "

        return[
          Section1(stud1, "stud-info1", sec1Info, sec1Info1, "stud-heading1", sec1Heading, "stud-join-btn"),
          Section2(studBanner),
          Section3(sec3Heading, "studStep", sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3)

        ]
      } else {
        const sec1Info = "Startups have a difficult time sourcing top, emerging talent in an efficient manner. "
        const sec1Info1 = "We are a machine learning, networking platform that personally connects you with relevant, "+
                          "high calibre students and recent graduates to help you find culture adds that match your hiring needs."
        const sec1Heading = "Build your team with emerging talent, anywhere, anytime."

        const sec3Heading = "How Swivel can help you source talent."
        const sec3p1Head = "Efficient Onboarding."
        const sec3p1 = "Take 2 minutes to create a personalized company profile so we can find you well suited student talent."

        const sec3p2Head = "Receive matches."
        const sec3p2 = "Behind the scenes, our matching algorithm will create a curated list of students that we think are a "+
                        "good fit for your hiring needs and company culture. Select the ones you are interested in and we will schedule a video call."

        const sec3p3Head = "Build student talent pipeline."
        const sec3p3 = "Have one on one video conversations with students and keep track of all potential hires on your dashboard."

        return[
          Section1(comp1, "comp-info1", sec1Info, sec1Info1, "comp-heading1", sec1Heading, "comp-join-btn"),
          Section2(compBanner),
          Section3(sec3Heading, "compStep", sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3)
        ]
      }
}

const Section1 = ( image, info1Class, landingInfo1, landingInfo2, heading1Class, landingHeading1, btnClass ) => {
    return(
      <div className="landing-info">
        <img className="landing-img1" src={image} alt="heading_image"/>
        <h1 className={heading1Class}> {landingHeading1} </h1>
        <div className={info1Class}>
          <p> {landingInfo1} </p>
          <p> {landingInfo2} </p>
        </div>
        <Link className={btnClass} to="/login">Join Now</Link>
      </div>
    )
}

const Section2 = ( image ) => {
  return(
    <div className="landing-info">
      <img className="banner-img" src={image} alt="banner"/>
    </div>
  )
}

const Section3 = ( sec3Heading, stepId, sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3 ) => {
  return(
    <div className="landing-info">
      <h1 className="section3-header">{sec3Heading}</h1>
      <div className="steps">
        <div className="step" id="step1">
          <div className="step1-head">
              <h3 className="step-head" id={stepId} > 1. </h3>
              <h3 className="step-head"> {sec3p1Head} </h3>
          </div>
          <p className="step-body"> {sec3p1} </p>
        </div>
        <div className="step" id="step2">
          <div className="step2-head">
              <h3 className="step-head" id={stepId} > 2. </h3>
              <h3 className="step-head"> {sec3p2Head} </h3>
          </div>
          <p id="step2-body"> {sec3p2} </p>
        </div>
        <div className="step" id="step3">
          <div className="step3-head">
              <h3 className="step-head" id={stepId} > 3. </h3>
              <h3 className="step-head"> {sec3p3Head} </h3>
          </div>
          <p className="step-body"> {sec3p3} </p>
        </div>
      </div>
    </div>
  )
}

export default Landing
