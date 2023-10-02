import { BasicDetails, Education, Experience, Skills, Projects } from './Form.jsx';
import '../styles/Option.css'
import FloatingOption from './FloatingOption.jsx'


function Option({handleResume, resume, instance, updateInstance}) {

    return (
        <div id="option">
            <BasicDetails handleResume={handleResume} updateInstance={updateInstance}></BasicDetails>
            <Experience handleResume={handleResume} updateInstance={updateInstance}></Experience>
            <Education handleResume={handleResume} updateInstance={updateInstance}></Education>
            <Skills handleResume={handleResume} updateInstance={updateInstance}></Skills>
            <Projects handleResume={handleResume} updateInstance={updateInstance}></Projects>
            <FloatingOption instance={instance} name={resume.basicDetails.name}></FloatingOption>
            {/* <Objective></Objective>
            <Experience></Experience>
            <Skills></Skills>
            <Projects></Projects>
            <Volunteering></Volunteering> */}
        </div>
    )
}

export default Option