import {Link, Redirect} from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import {NavLink} from 'react-router-dom'
import logo_full from '../images/Logo_Full.png'

const initialForm = {formType: 'signUp'}
const SetupProfile = () => {
  const [form, updateForm] = useState(initialForm)
  const [selection, updateSelection] = useState('')
  const [value1, onChange] = useState(0);
  const [value2, onChange2] = useState(0);
  const [value3, onChange3] = useState(0);
  const [value4, onChange4] = useState(0);
  const [value5, onChange5] = useState(0);
  const [value6, onChange6] = useState(0);
  const [value7, onChange7] = useState(0);
  const [value8, onChange8] = useState(0);
  const [value9, onChange9] = useState(0);
  const [value10, onChange10] = useState(0);
  const [value11, onChange11] = useState(0);
  const [value12, onChange12] = useState(0);
  const a = [value1, value2, value3, value4, value5, value6, value7, value8, value9, value10, value11, value12];
  useEffect(()=>{
    const ele = document.querySelectorAll(".slider-bubble");
    if (ele){
      var c = 0;
      ele.forEach(function(h){
        h.style.marginLeft = a[c] * 51.5 + 130 + 'px';
        c ++;
      });
    }
    const eles = document.querySelectorAll(".slider");
    var total = 0;
    eles.forEach(function(i){
      total += parseInt(i.value);
    });
    const points = document.querySelector("#slide-points");
    if (points){
      if (80 - total >= 0){
        points.style.color = "black";
      } else {
        points.style.color = "red";
      }
      points.innerHTML = 80 - total;
    }
  }, [a])

  function OnClickStep1(e) {
    updateSelection('step1')
  }

  function OnClickStep2(e) {
    updateSelection('step2')
  }

  function OnClickStep3(e) {
    updateSelection('step3')
  }

  function OnClickStep4(e) {
    updateSelection('step4')
  }

  function toggleButtonState(e){
    
  }

  function backToSelection(e) {
    updateSelection('')
  }

  return (
    <div className = "body">
      <div className='landing-nav'>
        <NavLink exact to="/" className="nav-btn-logo"><img className="nav-logo" src={logo_full} alt="Swivel_Logo" /></NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/login" className="nav-btn" id="setup-save">Save and exit.</NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/dashboard" className="nav-btn"><u>skip</u></NavLink>
      </div>
      <div>
        {
          (selection == "step1" || selection == "") && (
          <div className = "setup-content" id = "step_1">
            <div className="setup-nav" id="setup-nav">
              <button className="setup-nav-btn active" onClick = {() => OnClickStep1()}> <div className = "setup-nav-nbr active"> 1 </div> General information</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep2()}> <div className = "setup-nav-nbr"> 2 </div> About your company</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep3()}> <div className = "setup-nav-nbr"> 3 </div> What you're looking for</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep4()}> <div className = "setup-nav-nbr"> 4 </div> About you</button>
            </div>

            <h1 className = "setup-h1">Step 1</h1>
            <h2 className = "setup-h2">Getting Started</h2>
            <p className = "setup-sub">What is your position?</p>
            <input className ="step1-box" id = "position-box" type = "text" placeholder = "Position"/>
            <p className = "setup-sub">What is your company size?</p>
            <select id = "size-box">
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>501-1000</option>
                <option>1001-5000</option>
            </select>
            <p className = "setup-sub" id = "location-text">Where are you located? </p>
            <input className ="step1-box" id = "location-box" type = "text" placeholder = "Location"/>
            <p className = "setup-sub">What is your company's website? </p>
            <input className ="step1-box" id = "website-box" type = "text" placeholder = "Website"/>
            <p className = "setup-sub">What post secondary/graduate school did you attend?</p>
            <input className ="step1-box" id = "school-box" type = "text" placeholder = "Education"/>
            <label>
              <p></p>
              <input type = "checkbox" id = "no-school-check"/>
              Prefers not to say
            </label>
            <hr />
            <button className="setup-next" onClick = {() => OnClickStep2()}>→</button>
          </div>
          )
        }
        {
          selection == "step2" && (
            <div className = "setup-content" id = "step_2">
            <div className="setup-nav" id="setup-nav">
              <button className="setup-nav-btn" onClick = {() => OnClickStep1()}> <div className = "setup-nav-nbr"> 1 </div> General information</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep2()}> <div className = "setup-nav-nbr active"> 2 </div> About your company</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep3()}> <div className = "setup-nav-nbr"> 3 </div> What you're looking for</button>
              <button className="setup-nav-btn" onClick = {() => OnClickStep4()}> <div className = "setup-nav-nbr"> 4 </div> About you</button>
            </div>

              <h1 className = "setup-h1">Step 2</h1>
              <h2 className = "setup-h2">Getting There</h2>
              <p className = "setup-sub">What are your company's values?</p>
              <p id = "slidertop">Please distribute <b>80 points</b> to what your company values most. Hover over value of description of value.</p>

              <div className = "slidercounter">
                <p>Points Left:</p>
                <p id = "slide-points">80</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Flexibility </p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className="slider" value  = {value1} onChange = {({target:{value:radius}}) => {onChange(radius)}} id="flexibility"/>
                <div className="slider-bubble"> {value1} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Diversity</p>
                <p className ="slider-zero">0</p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value  = {value2} onChange = {({target:{value:radius}}) => {onChange2(radius)}} id="diversity-slider"/>
                <div className="slider-bubble"> {value2} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Innovation</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value  = {value3} onChange = {({target:{value:radius}}) => {onChange3(radius)}} id="Innovation-slider"/>
                <div className="slider-bubble"> {value3} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Customers</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value  = {value4} onChange = {({target:{value:radius}}) => {onChange4(radius)}} id="Customers-slider"/>
                <div className="slider-bubble"> {value4} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Authenticity</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value  = {value5} onChange = {({target:{value:radius}}) => {onChange5(radius)}} id="Authenticity-slider"/>
                <div className="slider-bubble"> {value5} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Accountability</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value6} onChange = {({target:{value:radius}}) => {onChange6(radius)}}  id="Accountability-slider"/>
                <div className="slider-bubble"> {value6} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Sustainability</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value7} onChange = {({target:{value:radius}}) => {onChange7(radius)}} id="Sustainability-slider"/>
                <div className="slider-bubble"> {value7} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Purpose</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value8} onChange = {({target:{value:radius}}) => {onChange8(radius)}} id="Purpose-slider"/>
                <div className="slider-bubble"> {value8} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Quality</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value9} onChange = {({target:{value:radius}}) => {onChange9(radius)}} id="Quality-slider"/>
                <div className="slider-bubble"> {value9} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Curiousity</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value10} onChange = {({target:{value:radius}}) => {onChange10(radius)}} id="Curiousity-slider"/>
                <div className="slider-bubble"> {value10} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Generosity</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value11} onChange = {({target:{value:radius}}) => {onChange11(radius)}} id="Generosity-slider"/>
                <div className="slider-bubble"> {value11} </div>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Collaboration</p>  <p className ="slider-zero">0 </p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" value = {value12} onChange = {({target:{value:radius}}) => {onChange12(radius)}} id="Collaboration-slider"/>
                <div className="slider-bubble"> {value12} </div>
                <p className = "sliderback">10</p>
              </div>
              <hr />
              <h3 className = "setup-h3">Do you offer any employee benefits and perks?</h3>
              <p>What are the additional benefits and perks that make your company unique and a desirable company to work at?</p>
              <p>Please select all that apply</p>
              <table className = "setup-table">
                <tr className = "setup-table-header">
                  <th>
                    Health, Wellness, Inclusion
                  </th>
                  <th>
                    Pay & Vacation
                  </th>
                  <th>
                    Giving Back, Growth, Schedule, Tech
                  </th>
                  <th>
                    Office & Culture
                  </th>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Wellness & Mental Health Programs
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Vacation/Paid Time Off
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                      CSR Initiatives
                      </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                      Recreational Clubs
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                      Diversity Programs
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                      Tuition Reimbursement
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                      Volunteer Time
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Company Outings
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Health, Dental, Vision Package
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Corporate Discounts
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Employee Training & Growth Programs
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Happy Hours
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Disability Insurance
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Performance Bonus
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Remote Work Opportunities
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Pet-friendly Environment
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Gym Memberships/Fitness Stipend
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Employee Stock Purchase Plan
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Flexible Schedule/Hours
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Stocked Kitchen (Snacks & Drinks)
                    </label>
                  </td>
                </tr>
                <tr>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Onsite Gym/Meditation Rooms
                    </label>
                  </td>
                  <td>
                    <label>
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    State-of-the-art Technology
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Casual Dress
                    </label>
                  </td>
                </tr>
                 <tr>
                  <td>
                    <label>
                    </label>
                  </td>
                  <td>
                    <label>
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Technology Stipends
                    </label>
                  </td>
                  <td>
                    <label>
                    <input type = "checkbox" id = ""/>
                    Location (Accessible by Public Transit)
                    </label>
                  </td>
                </tr>
              </table>
              <hr />
              <button className="setup-last" onClick = {() => OnClickStep1()}>←</button>
              <button className="setup-next" onClick = {() => OnClickStep3()}>→</button>
            </div>
          )
        }
        {
          selection == "step3" && (
            <div className = "setup-content" id = "step_3">
              <div className="setup-nav" id="setup-nav">
                <button className="setup-nav-btn" onClick = {() => OnClickStep1()}> <div className = "setup-nav-nbr"> 1 </div> General information</button>
                <button className="setup-nav-btn" onClick = {() => OnClickStep2()}> <div className = "setup-nav-nbr"> 2 </div> About your company</button>
                <button className="setup-nav-btn active" onClick = {() => OnClickStep3()}> <div className = "setup-nav-nbr active"> 3 </div> What you're looking for</button>
                <button className="setup-nav-btn" onClick = {() => OnClickStep4()}> <div className = "setup-nav-nbr"> 4 </div> About you</button>
              </div>
              <h1 className = "setup-h1">Step 3</h1>
              <h2 className = "setup-h2">Almost Done</h2>
              <p className = "setup-sub">What technical skills are you looking for?</p>
              <p>Choose 5 skills that you are looking for in a candidate.</p>
              <h3 className = "setup-h3">Computer Science</h3>
              <table className = "setup-table">
                <tr>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "web-skill">Web Dev</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "mobile-skill">Mobile Dev</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "ai-skill">AI</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "front-skill">Front End</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "back-skill">Back End</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "cloud-computing">Cloud Computing</button>
                  </td>
                </tr>
                <tr>
                <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "data-sci">Data Science</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "dev-op">DevOps</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "virtual">Virtualization</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "blockchain">Blockchain</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "softarc">Software Architecture</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "unit-test">Unit Testing</button>
                  </td>
                </tr>
                <tr>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "oper-skill">Operating Systems</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "network-skill">Network Security</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "IOT-skill">IOT</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "AR-skill">AR/VR</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "quality-skill">Quality Assurance</button>
                  </td>
                  <td>
                    <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "command-skill">Command Line</button>
                  </td>
                </tr>
                </table>
                <h3 className = "setup-h3"> Engineering </h3>
                <table className = "setup-table">
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Electronic-skill">Electronic Eng</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Electric-skill">Electric Eng</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "linear-skill">Linear Algebra</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "math-skill">Mathematics</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Robot-skill">Robotics</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "CAD-skill">CAD</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Circuit-skill">Circuitry</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "CNC-skill">CNC</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Machine-skill">Machining</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Fluid-skill">Fluid Modelling</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Sensor-skill">Sensoring</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "MATLAB-skill">MATLAB</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "advance-skill">Advanced Physics</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "nano-skill">Nanotechnology</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "infra-skill">Infrastructural Design</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Inventory-skill">Inventory Management</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "equipment-skill">Equipment Diagnostics</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "trouble-skill">Troubleshooting</button>
                    </td>
                  </tr>
                </table>

                <h3 className = "setup-h3"> Commerce </h3>
                <table className = "setup-table">
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "sales-skill">Salesforce/CRMs</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "online-skill">Online Accounting</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "stat-skill">Statistics</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "ecomm-skill">eCommerce</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "anal-skill">Analytical Reasoning</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Social-skill">Social Media</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Sales-skill">Sales</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "AB-skill">A/B Testing</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Mind-skill">Mind Mapping</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Survey-skill">Survey Software</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Data-skill">Data Analysis</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Project-skill">Project Management</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "SEO-skill">SEO/SEM</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "business-skill">Business Analysis</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "CMS-skill">CMS</button>
                    </td>
                  </tr>
                </table>

                <h3 className = "setup-h3"> Design </h3>
                <table className = "setup-table">
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "UI-skill">UI</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "UX-skill">UX</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "photoshop-skill">Photoshop</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "Indesign-skill">InDesign</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "wire-skill">Wireframing</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "video-skill">Video Production</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "brand-skill">Brand Development</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "illus-skill">Illustrator</button>
                    </td>
                  </tr>
                </table>
              <hr />

              <p className = "setup-sub">What soft skills are you looking for in an employee?</p>
              <p>Choose 3 soft skills that you most seek in a candidate.</p>
                <table className = "setup-table">
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "leader-skill">Leadership</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "adapt-skill">Adaptability</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "create-skill">Creativity</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "comm-skill">Communication</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "execution-skill">Execution</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "detail-skill">Detail Oriented</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "critical-skill">Critical Thinking</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "decision-skill">Decision Making</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "persua-skill">Persuasion</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "collab-skill">Collaboration</button>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "organ-skill">Organization</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "conflict-skill">Conflict Resolution</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "emotional-skill">Emotional Intelligence</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "open-skill">Open-mindedness</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "self-skill">Self-starter</button>
                    </td>
                  </tr>
                </table>
                <hr />
                <p className = "setup-sub">Employment Type?</p>
                <p>What position length are you looking to hire for? Please select all that apply.</p>
                <table className = "setup-table">
                  <tr>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "full-time">Full Time</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "intern">Internship/Co-op</button>
                    </td>
                    <td>
                      <button className="skill-btn" onClick = {() => toggleButtonState(this)} id = "contract">Contract Work</button>
                    </td>
                  </tr>
                </table>
                <hr />
              <button className="setup-last" onClick = {() => OnClickStep2()}>←</button>
              <button className="setup-next" onClick = {() => OnClickStep4()}>→</button>
            </div>
          )
        }
        {
          selection == "step4" && (
            <div className = "setup-content" id = "step_4">
              <div className="setup-nav" id="setup-nav">
                <button className="setup-nav-btn" onClick = {() => OnClickStep1()}> <div className = "setup-nav-nbr"> 1 </div> General information</button>
                <button className="setup-nav-btn" onClick = {() => OnClickStep2()}> <div className = "setup-nav-nbr"> 2 </div> About your company</button>
                <button className="setup-nav-btn" onClick = {() => OnClickStep3()}> <div className = "setup-nav-nbr"> 3 </div> What you're looking for</button>
                <button className="setup-nav-btn active" onClick = {() => OnClickStep4()}> <div className = "setup-nav-nbr active"> 4 </div> About you</button>
              </div>
              <h1 className = "setup-h1">Step 4</h1>
              <h2 className = "setup-h2">Last step.</h2>
              <p className = "setup-sub">Tell us about your company.</p>
              <p>In 100 words or less</p>
              <textarea className ="setup-textarea" id = "company_intro" type = "text" maxLength = "100"/>
              <p className = "setup-sub">What is life like at your company.</p>
              <p>In 100 words or less</p>
              <textarea className ="setup-textarea" id = "company_life" type = "text" maxLength = "100"/>
              <p className = "setup-sub">Tell us about yourself.</p>
              <p>In 100 words or less</p>
              <textarea className ="setup-textarea" id = "company_life" type = "text" maxLength = "100"/>
              <hr />
              <button className="setup-last" onClick = {() => OnClickStep3()}>←</button>
              <Link to="/dashboard" id = "finish-setup" className="setup-next">→</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SetupProfile
