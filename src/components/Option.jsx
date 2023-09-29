import {processForm}  from './processForm.js'
import { BasicDetails, Education, Experience, Skills, Projects } from './Form.jsx';

import '../styles/Option.css'



function Option({handleResume, resume}) {

    return (
        <div id="option">
            <BasicDetails handleResume={handleResume} processForm={processForm}></BasicDetails>
            <Experience handleResume={handleResume} processForm={processForm}></Experience>
            <Education handleResume={handleResume} processForm={processForm}></Education>
            <Skills handleResume={handleResume} processForm={processForm}></Skills>
            <Projects handleResume={handleResume} processForm={processForm}></Projects>
            
            {/* <Objective></Objective>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
            <Volunteering></Volunteering> */}
        </div>
    )
}

export default Option