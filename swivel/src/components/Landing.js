/* landing page (defaults to company side) */
import stud1 from "../images/student/landing_header.png"
import comp1 from "../images/company/landing_header.png"
import studBanner from "../images/student/company_banner.png"
import compBanner from "../images/company/uni_banner.png"

import studSec31 from "../images/student/section3_1.png"
import studSec32 from "../images/student/section3_2.png"
import studSec33 from "../images/student/section3_3.png"
import studSec3L from "../images/student/line.png"

import compSec31 from "../images/company/section3_1.png"
import compSec32 from "../images/company/section3_2.png"
import compSec33 from "../images/company/section3_3.png"
import compSec3L from "../images/company/line.png"

import studQuote from "../images/student/quotes.png"
import studEx1 from "../images/student/student1.jpeg"
import studEx2 from "../images/student/student2.jpeg"

import compQuote from "../images/company/quotes.png"
import compEx1 from "../images/company/logo1.png"
import compEx2 from "../images/company/logo2.png"



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

        const sec4Heading = "What other students are saying."

        const rev1StudName = "Grace Demill, Comm ’20"
        const rev1StudSchool = "Queen's University"
        const rev1 = "Coming out of first year, I was surrounded by classmates who had already locked prestigious internships in"+
                      " Finance or CPG through personal connections. Anxious to find my “perfect fit” as a young professional, I"+
                      " came across the vibrant world of startups. was such a fantastic hands-on experience, and we need companies"+
                      " like Sw!vel to help fill the gap between students and startups."

        const rev2StudName = "Theo Bresolin, Eng ’20"
        const rev2StudSchool = "Queen's University"
        const rev2 = "When looking for full time work as a university student, the well-known, prestigious companies dominate campus"+
                      " events, job boards, LinkedIn, and even conversations with friends. Swivel is a great platform to not only see"+
                      " what other opportunities are out there but also find a true two-way fit."

        return[
          Section1(stud1, "stud-info1", sec1Info, sec1Info1, "stud-heading1", sec1Heading, "stud-join-btn"),
          Section2(studBanner),
          Section3(sec3Heading, "studStep", sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3, studSec31, studSec32, studSec33, studSec3L),
          Section4(sec4Heading, studQuote, rev1, studEx1, rev2, studEx2, "stud-review-from", rev1StudName, rev1StudSchool, rev2StudName, rev2StudSchool, "stud-quote")

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

        const sec4Heading = "What other companies are saying."

        const rev1 = "It becomes even more important for recruiters to understand talent beyond the resume to ensure a position is actually a good "+
                    "fit. Recruiters will need more information about talent in advance of making contact. That means they’ll need tools to better"+
                    " understand applicants’ needs and wants, in addition to their qualifications. It’s about seeing people, not candidates."

        const rev2 = "Those numbers reflect a classic tragedy of the commons — fueled by employers who are fishing ever farther into the sea of "+
                      "talent in search of job-ready workers rather than helping incumbents or younger, underserved, and underrepresented groups"+
                      " develop the skills they need to fill tomorrow’s roles."

        return[
          Section1(comp1, "comp-info1", sec1Info, sec1Info1, "comp-heading1", sec1Heading, "comp-join-btn"),
          Section2(compBanner),
          Section3(sec3Heading, "compStep", sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3, compSec31, compSec32, compSec33, compSec3L),
          Section4(sec4Heading, compQuote, rev1, compEx1, rev2, compEx2, "comp-review-from")
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

const Section3 = ( sec3Heading, stepId, sec3p1Head, sec3p1, sec3p2Head, sec3p2, sec3p3Head, sec3p3, sec31Img, sec32Img, sec33Img, sec3L ) => {
  return(
    <div className="landing-info">
      <h1 className="section-header">{sec3Heading}</h1>
      <div className="steps">
        <div className="step"  id="step1">
          <div className="step1-elem step-info">
              <h3 className="step-head" id={stepId} > 1. </h3>
              <h3 className="step-head title"> {sec3p1Head} </h3>
              <p className="step-body"> {sec3p1} </p>
          </div>
          <div className="step1-elem">
            <img className="line" id="step1-line" src={sec3L} alt="line"/>
          </div>
          <div className="step1-elem">
            <img className="screenshot" id="step1-scrn" src={sec31Img} alt="screenshot1"/>
          </div>
        </div>
        <div className="step" id="step2">
          <div className="step2-elem">
            <img className="step2 screenshot" id="step2-scrn" src={sec32Img} alt="screenshot2" />
          </div>
          <div className="step2-elem">
            <img className="step2 line" id="step2-line" src={sec3L} alt="line" />
          </div>
          <div className="step2-elem step-info">
              <h3 className="step-head2" id={stepId} > 2. </h3>
              <h3 className="step-head2 title"> {sec3p2Head} </h3>
              <p id="step2-body"> {sec3p2} </p>
          </div>
        </div>

        <div className="step" id="step3">
          <div className="step3-elem step-info">
              <h3 className="step-head" id={stepId} > 3. </h3>
              <h3 className="step-head title"> {sec3p3Head} </h3>
              <p className="step-body"> {sec3p3} </p>
          </div>
          <div className="step3-elem">
            <img className="line" id="step3-line" src={sec3L} alt="line"/>
          </div>
          <div className="step3-elem">
            <img className="screenshot" id="step3-scrn" src={sec33Img} alt="screenshot3" />
          </div>

        </div>
      </div>
    </div>
  )
}

const Section4 = ( sec4Heading, quoteImg, rev1, rev1From, rev2, rev2From, reviewClass, stud1Head, stud1School, stud2Head, stud2School, quoteId) => {

  return(
    <div className="landing-info" id="section4">
      <img className="top-quote" src={quoteImg} alt="quotes"/>
      <h1 className="section-header" id="sec4-heading"> {sec4Heading} </h1>

      <div className="review" id="rev-div-1">
        <p className="review-content"> {rev1} </p>
        <img className="rev-from" id={reviewClass} src= {rev1From} alt="review_logo" />
        <div className="rev-from" id="stud-info">
          <h4 className="stud-head">{stud1Head}</h4>
          <p className="stud-school">{stud1School}</p>
        </div>
      </div>

      <div className="review" id="rev-div-2">
        <p className="review-content"> {rev2} </p>
        <img id={reviewClass} src= {rev2From} alt="review_logo" />
        <div className="rev-from" id="stud-info">
          <h4 className="stud-head">{stud2Head}</h4>
          <p className="stud-school">{stud2School}</p>
        </div>
      </div>
      <img className="bottom-quote" id={quoteId} src={quoteImg} alt="quotes"/>
    </div>
  )

}











export default Landing
