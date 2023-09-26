import {processForm}  from './processForm.js'

function BasicDetails({processForm, handleResume}){
    return (
    <div className='option-container'>
                <div className='option-head'>
                    <div className='option-title'>
                        {'Basic Details'}
                    </div>
                    <div className='option-minimize arrow' onClick={toggleOptionBody}>
                    </div>
                </div>
                <div className='option-form'>
                    <form onSubmit={(e) => processForm(e, 'basicDetails', handleResume)}>  
                        <div className='value-wrapper'>
                            <div className='input-container'>
                                <label htmlFor="name">Name:</label>
                                <input id='name' name='name' ></input> 
                            </div>
                            <div className='input-container'>
                                <label htmlFor="addr">Location:</label>
                                <input id='addr' name='addr'></input> 
                            </div>
                            <div className='input-container'>
                                <label htmlFor="mail">Email Address</label>
                                <input id='mail' name='mail' ></input> 
                            </div> 
                            <div className='input-container'>
                                <label htmlFor="phone">Phone</label>
                                <input id='phone' name='phone' ></input> 
                            </div>      
                            <div className='input-container'>
                                <label htmlFor="linkedin">LinkedIn</label>
                                <input id='linkedin' name='linkedin' ></input> 
                            </div>
                            <div className='input-container'>
                                <label htmlFor="objective">Objective</label>
                                <input id='objective' name='objective' ></input> 
                            </div>      
                        </div>
                        <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={'Basic Details'}>Save</button></div>             
                    </form>
                </div>
            </div>
            )
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

function toggleOptionBody(event){
    const elm = event.target;
    console.log(elm)
    const containerBody = elm.closest('.option-container')
    if (containerBody.classList.contains('minimize')){
        containerBody.classList.remove('minimize')
        elm.classList.remove('arrow-down')
    }else {
        containerBody.classList.add('minimize')
        elm.classList.add('arrow-down')

    }
}

function Option({handleResume}) {

    return (
        <div id="option">
            <BasicDetails handleResume={handleResume} processForm={processForm}></BasicDetails>
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