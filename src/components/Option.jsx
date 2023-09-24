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
            <div className='option-container'>
                <div className='option-head'>
                    <div className='option-title'>
                        {'Basic Details'}
                    </div>
                    <div className='option-minimize arrow arrow-up'>
                    </div>
                </div>
                <div className='option-form'>
                    <form>  
                        <div className='value-wrapper'>
                            <div className='input-container'>
                                <label htmlFor="name">Name:</label>
                                <input id='name' name='name'></input> 
                            </div>
                            <div className='input-container'>
                                <label htmlFor="location">Location:</label>
                                <input id='location' name='location'></input> 
                            </div>
                            <div className='input-container'>
                                <label htmlFor="mail">Email Address</label>
                                <input id='mail' name='mail'></input> 
                            </div> 
                            <div className='input-container'>
                                <label htmlFor="phone">Phone</label>
                                <input id='phone' name='mail'></input> 
                            </div>      
                            <div className='input-container'>
                                <label htmlFor="linkedin">LinkedIn</label>
                                <input id='linkedin' name='linkedin'></input> 
                            </div>   
                        </div>
                        <div className='form-footer'><button className='btn-green' type='submit'>Save</button></div>             
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