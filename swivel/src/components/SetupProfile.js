import {Link, Redirect} from 'react-router-dom'
import React, { useState } from 'react'
import {NavLink} from 'react-router-dom'
import logo_full from '../images/Logo_Full.png'

const initialForm = {formType: 'signUp'}
const sliderdata = ['slider1', 'slider2', 'slider3']
const SetupProfile = ( ) => {
  const [form, updateForm] = useState(initialForm)
  const [selection, updateSelection] = useState('')

  function onChange(e) {
    e.persist()
    if(e.target.name === 'agree') {
      updateForm(() => ({ ...form, [e.target.name]: e.target.checked}))
    }
    else {
      updateForm(() => ({ ...form, [e.target.name]: e.target.value}))
    }
  }

  function updateSlider(e){
      var total = 80;
      document.getElementById("slide-points").innerHTML = total;
  }

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
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/login" className="nav-btn" id="sign-up"><u>Save and exit.</u></NavLink>
        <NavLink activeStyle={{ fontWeight: "bold" }} exact to="/dashboard" className="nav-btn"><u>skip</u></NavLink>
      </div>
      <div>
        {
          (selection == "step1" || selection == "") && (
          <div className = "setup-content" id = "step_1">
            <div className="side-nav" id="comp-nav">
              <button className="side-nav-btn active" onClick = {() => OnClickStep1()}>General information</button>
              <button className="side-nav-btn" onClick = {() => OnClickStep2()}>About your company</button>
              <button className="side-nav-btn" onClick = {() => OnClickStep3()}>What you're looking for</button>
              <button className="side-nav-btn" onClick = {() => OnClickStep4()}>About you</button>
            </div>

            <h1>Step 1</h1>
            <h2>Getting Started</h2>
            <p>What is your position?</p>
            <input className ="step1-box" id = "position-box" type = "text"/>
            <p>What is your company size?</p>
            <select id = "size-box">
                <option>11-50</option>
                <option>51-200</option>
                <option>201-500</option>
                <option>501-1000</option>
                <option>1001-5000</option>
            </select>
            <p>Where are you located? </p>
            <input className ="step1-box" id = "location-box" type = "text"/>
            <p>What is your company's website? </p>
            <input className ="step1-box" id = "website-box" type = "text"/>
            <p>What post secondary/graduate school did you attend?</p>
            <input className ="step1-box" id = "school-box" type = "text"/>
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
            <div className="side-nav" id="comp-nav">
              <button className="side-nav-btn" onClick = {() => OnClickStep1()}>General information</button>
              <button className="side-nav-btn active" onClick = {() => OnClickStep2()}>About your company</button>
              <button className="side-nav-btn" onClick = {() => OnClickStep3()}>What you're looking for</button>
              <button className="side-nav-btn" onClick = {() => OnClickStep4()}>About you</button>
            </div>

              <h1>Step 2</h1>
              <h2>Getting There</h2>
              <p>What are your company's values?</p>
              <p>Please distribute 80 points to what your company values most. Hover over value of description of value.</p>

              <div className = "slidercounter">
                <p>Points Left:</p>
                <p id = "slide-points">80</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Flexibility <span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className="slider" onChange = {updateSlider} id="flexibility"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Diversity<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="diversity-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Innovation<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Innovation-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Customers<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Customers-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Authenticity<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Authenticity-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Accountability<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Accountability-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Sustainability<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Sustainability-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Purpose<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Purpose-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Quality<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Quality-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Curiousity<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Curiousity-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Generosity<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Generosity-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <div className = "slidecontainer">
                <p className = "sliderfront">Collaboration<span className ="slider-zero">0</span></p>
                <input type="range" min="0" max="10" defaultValue="0" className = "slider" id="Collaboration-slider"/>
                <p className = "sliderback">10</p>
              </div>
              <hr />
              <h2>Do you offer any employee benefits and perks</h2>
              <p>What are the additional benefits and perks that make your company unique and a desirable company to work at?</p>
              <p>Please select all that apply</p>
              <table>
                <tr className = "setup-table-header">
                  <td>
                    Health, Wellness, Inclusion
                  </td>
                  <td>
                    Pay & Vacation
                  </td>
                  <td>
                    Giving Back, Growth, Schedule, Tech
                  </td>
                  <td>
                    Office & Culture
                  </td>
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
                  <input type = "checkbox" id = ""/>
                    CSR Initiatives
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Recreational Clubs
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
                  <input type = "checkbox" id = ""/>
                    Volunteer Time
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Company Outings
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
                  <input type = "checkbox" id = ""/>
                    Employee Training & Growth Programs
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Happy Hours
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
                  <input type = "checkbox" id = ""/>
                    Remote Work Opportunities
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Pet-friendly Environment
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
                  <input type = "checkbox" id = ""/>
                    Flexible Schedule/Hours
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Stocked Kitchen (Snacks & Drinks)
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
                  <input type = "checkbox" id = ""/>
                    State-of-the-art Technology
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Casual Dress
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
                  <input type = "checkbox" id = ""/>
                    Technology Stipends
                  </td>
                  <td>
                  <input type = "checkbox" id = ""/>
                    Location (Accessible by Public Transit)
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
              <div className="side-nav" id="comp-nav">
                <button className="side-nav-btn" onClick = {() => OnClickStep1()}>General information</button>
                <button className="side-nav-btn" onClick = {() => OnClickStep2()}>About your company</button>
                <button className="side-nav-btn active" onClick = {() => OnClickStep3()}>What you're looking for</button>
                <button className="side-nav-btn" onClick = {() => OnClickStep4()}>About you</button>
              </div>
              <h1>Step 3</h1>
              <h2>Almost Done</h2>
              <p>What technical skills are you looking for?</p>
              <p>Choose 5 skills that you are looking for in a candidate.</p>
              <h3>Computer Science</h3>
              <table>
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
                <h3> Engineering </h3>
                <table>
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

                <h3> Commerce </h3>
                <table>
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

                <h3> Design </h3>
                <table>
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

              <p> What soft skills are you looking for in an employee?</p>
              <p>Choose 3 soft skills that you most seek in a candidate.</p>
                <table>
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
                <p>Employment Type?</p>
                <p>What position length are you looking to hire for? Please select all that apply.</p>
                <table>
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
              <div className="side-nav" id="comp-nav">
                <button className="side-nav-btn" onClick = {() => OnClickStep1()}>General information</button>
                <button className="side-nav-btn" onClick = {() => OnClickStep2()}>About your company</button>
                <button className="side-nav-btn" onClick = {() => OnClickStep3()}>What you're looking for</button>
                <button className="side-nav-btn active" onClick = {() => OnClickStep4()}>About you</button>
              </div>
              <h1>Step 4</h1>
              <h2>Last step.</h2>
              <p>Tell us about your company.</p>
              <p>In 100 words or less</p>
              <input className ="setup-textarea" id = "company_intro" type = "text" maxLength = "100"/>
              <p>What is life like at your company.</p>
              <p>In 100 words or less</p>
              <input className ="setup-textarea" id = "company_life" type = "text" maxLength = "100"/>
              <hr />
              <button className="setup-last" onClick = {() => OnClickStep3()}>←</button>
              <Link to="/dashboard" className="setup-last">→</Link>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default SetupProfile
