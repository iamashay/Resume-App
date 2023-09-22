function BasicDetails(){
    
}

function Objective(){
    
}

function Experience(){
    
}

function Education(){
    
}

function Skills(){
    
}

function Projects(){
    
}

function Volunteering(){
    
}

import '../styles/Option.css'

function Option({setResume, resume}) {
    const handleName = (value) => {
        setResume((currentRes) => ({...currentRes, basicDetails: {...currentRes.basicDetails, name: value}}))
    }
    return (
        <div id="option">
            <input onChange={(e) => handleName(e.target.value)} />
            <p>{resume.basicDetails.name}</p>
            <div className='option-container'>
                <div className='option-head'>
                    <div className='option-title'>
                        {'Basic Details'}
                    </div>
                    <div className='option-minimize'>
                        ^
                    </div>
                </div>
                <div className='option-form'>
                    <form>
                        
                    </form>
                </div>
            </div>
            <BasicDetails></BasicDetails>
            <Objective></Objective>
            <Experience></Experience>
            <Education></Education>
            <Skills></Skills>
            <Projects></Projects>
            <Volunteering></Volunteering>
        </div>
    )
}

export default Option