import '../styles/Form.css'
import { useState } from "react"
import deleteIcon from '../assets/delete.png'
import {processForm}  from './processForm.js'

function toggleOptionBody(event){
    const elm = event.target;
    const containerBody = elm.closest('.option-container')
    const allOptionContainer = document.querySelectorAll('.option-container')
    for (const optionContainer of allOptionContainer){
        if (containerBody === optionContainer) continue
        if (!optionContainer.classList.contains('minimize'))
            optionContainer.classList.add('minimize')
            optionContainer.querySelector('.option-minimize').classList.add('arrow-down')
    }
    if (containerBody.classList.contains('minimize')){
        containerBody.classList.remove('minimize')
        elm.classList.remove('arrow-down')
    }else {
        containerBody.classList.add('minimize')
        elm.classList.add('arrow-down')
    }
}

export function BasicDetails({handleResume, updateInstance}){
    const optionName = 'Basic Details'
    const optionId = 'basicDetails'
    return (
    <div className='option-container'>
                <div className='option-head'>
                    <div className='option-title'>
                        {optionName}
                    </div>
                    <div className='option-minimize arrow' onClick={toggleOptionBody}>
                    </div>
                </div>
                <div className='option-form'>
                    <form onSubmit={(e) => processForm({e, type: optionId, handleResume, updateInstance})}>  
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
                        <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={optionName}>Save</button></div>             
                    </form>
                </div>
            </div>
            )
}

const ExpView = ({data, handleExpDelete}) => {
    return (<div className='item-view'>
        <div className='item-primary'>
            <div>{data.companyName}</div>
            <div>{data.roleName}</div>
        </div>
        <div className='item-secondary'>
            <div>{data.location}</div>
            <div><img className='delete-icon' onClick={() => {handleExpDelete(data.id)}} src={deleteIcon}></img></div>
        </div>

    </div>)
}
const ExpForm = ({optionId, optionName, setArrData, handleResume}) => {
    const [isPresent, setIsPresent] = useState(false)
    const handleIsPresent = () => {
        setIsPresent(!isPresent)
    }

    return (<form onSubmit={(e) => processForm({e, type: optionId, handleResume, setArrData})}> 

            <div className='value-wrapper'>
                <div className='input-container'>
                    <label htmlFor="roleName">Role:</label>
                    <input id='roleName' name='roleName' ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="companyName">Comapny:</label>
                    <input id='companyName' name='companyName'></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="location">Location</label>
                    <input id='location' name='location' ></input> 
                </div>     
                <div className='input-container'>
                    <label htmlFor="startDate">Start Date</label>
                    <input id='startDate' type='date' name='startDate' ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="endDate">End Date</label>
                    <input id='endDate' type='date' name='endDate' disabled={isPresent} ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="isPresent">Is Present?</label>
                    <input id='isPresent' checked={isPresent} type='checkbox' name='isPresent' onChange={handleIsPresent} ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="descArr">Description</label>
                    <textarea id='descArr'  name='descArr' ></textarea> 
                </div>          
            </div>
            <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={optionName}>Save</button></div>             
    </form>)
}

export function Experience({handleResume}){ 
    const optionName = 'Experience'
    const optionId = 'exp'
    const [expItems, setExpItems] = useState([])
    const handleExpDelete = (id) => {
        const updatedItems = expItems.filter((exp)=> exp.id !== id)
        setExpItems(updatedItems)
        const prepareData = {}
        prepareData[optionId] = updatedItems
        handleResume(prepareData)
    }
    
    return (
    <div className='option-container minimize'>
                <div className='option-head'>
                    <div className='option-title'>
                        {optionName}
                    </div>
                    <div className='option-minimize arrow' onClick={toggleOptionBody}>
                    </div>
                </div>
                <div className='option-form'>

                    <div className='display-option-content'>
                    {
                    expItems.map((expItem)=>
                            <ExpView key={expItem.id} data={expItem} handleExpDelete={handleExpDelete}></ExpView>
                        )
                    }
                    </div>
                    <ExpForm optionId={optionId} optionName={optionName} handleResume={handleResume} setArrData={setExpItems}></ExpForm>
                </div>
            </div>
            )
}

const EduView = ({data, handleEduDelete}) => {
    return (<div className='item-view'>
        <div className='item-primary'>
            <div>{data.eduName}</div>
        </div>
        <div className='item-secondary'>
            <div><img className='delete-icon' onClick={() => {handleEduDelete(data.id)}} src={deleteIcon}></img></div>
        </div>

    </div>)
}
const EduForm = ({optionId, optionName, setArrData, handleResume}) => {
    const [isPresent, setIsPresent] = useState(false)
    const handleIsPresent = () => {
        setIsPresent(!isPresent)
    }

    return (<form onSubmit={(e) => processForm({e, type: optionId, handleResume, setArrData})}> 

            <div className='value-wrapper'>
                <div className='input-container'>
                    <label htmlFor="eduName">Qualification:</label>
                    <input id='eduName' name='eduName' ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="clgName">College Name:</label>
                    <input id='clgName' name='clgName'></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="location">Location</label>
                    <input id='location' name='location' ></input> 
                </div> 
                <div className='input-container'>
                    <label htmlFor="score">Score</label>
                    <input id='score'  name='score' /> 
                </div>      
                <div className='input-container'>
                    <label htmlFor="startYear">Start Year</label>
                    <input id='startYear' type='number' min='2000' max='3000' name='startYear' ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="endYear">End Year</label>
                    <input id='endYear' type='number' min='2000' max='3000' name='endYear' disabled={isPresent} ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="isPresent">Is Present?</label>
                    <input id='isPresent' checked={isPresent} type='checkbox' name='isPresent' onChange={handleIsPresent} ></input> 
                </div>        
            </div>
            <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={optionName}>Save</button></div>             
    </form>)
}

export function Education({handleResume}){ 
    const optionName = 'Education'
    const optionId = 'edu'
    const [eduItems, setEduItems] = useState([])
    const handleEduDelete = (id) => {
        const updatedItems = eduItems.filter((edu)=> edu.id !== id)
        setEduItems(updatedItems)
        const prepareData = {}
        prepareData[optionId] = updatedItems
        handleResume(prepareData)
    }

    return (
    <div className='option-container minimize'>
                <div className='option-head'>
                    <div className='option-title'>
                        {optionName}
                    </div>
                    <div className='option-minimize arrow' onClick={toggleOptionBody}>
                    </div>
                </div>
                <div className='option-form'>

                    <div className='display-option-content'>
                    { console.log(eduItems)}{
                    eduItems.map((eduItem)=>
                            <EduView key={eduItem.id} data={eduItem} handleEduDelete={handleEduDelete}></EduView>
                        )
                    }
                    </div>
                    <EduForm optionId={optionId} optionName={optionName} handleResume={handleResume} setArrData={setEduItems}></EduForm>
                </div>
            </div>
            )
}

const SkillsForm = ({optionId, optionName, handleResume}) => {

    return (<form onSubmit={(e) => processForm({e, type: optionId, handleResume})}> 

            <div className='value-wrapper'>
                <div className='input-container'>
                    <label htmlFor="skills">Skills:</label>
                    <textarea id='skills' name='skills' ></textarea> 
                </div>      
            </div>
            <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={optionName}>Save</button></div>             
    </form>)
}

export function Skills({handleResume}){
    const optionName = 'Skills'
    const optionId = 'skills'
    
    return (
        <div className='option-container minimize'>
                    <div className='option-head'>
                        <div className='option-title'>
                            {optionName}
                        </div>
                        <div className='option-minimize arrow' onClick={toggleOptionBody}>
                        </div>
                    </div>
                    <div className='option-form'>
                        <SkillsForm optionId={optionId} optionName={optionName} handleResume={handleResume}></SkillsForm>
                    </div>
                </div>
                )
}

const ProjectView = ({data, handleProjectDelete}) => {
    return (<div className='item-view'>
        <div className='item-primary'>
            <div>{data.name}</div>
        </div>
        <div className='item-secondary'>
            <div><img className='delete-icon' onClick={() => {handleProjectDelete(data.id)}} src={deleteIcon}></img></div>
        </div>

    </div>)
}

const ProjectForm = ({optionId, optionName, setArrData, handleResume}) => {

    return (<form onSubmit={(e) => processForm({e, type: optionId, handleResume, setArrData})}> 
            <div className='value-wrapper'>
                <div className='input-container'>
                    <label htmlFor="name">Project Name:</label>
                    <input id='name' name='name' ></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="desc">Description:</label>
                    <input id='desc' name='desc'></input> 
                </div>
                <div className='input-container'>
                    <label htmlFor="link">Project Link</label>
                    <input id='link' name='link' ></input> 
                </div>      
            </div>
            <div className='form-footer'><button className='btn-green' type='submit' name='submit' value={optionName}>Save</button></div>             
    </form>)
}
export function Projects({handleResume}){ 
    const optionName = 'Projects'
    const optionId = 'projects'
    const [projectItems, setProjectItems] = useState([])
    const handleProjectDelete = (id) => {
        const updatedItems = projectItems.filter((project)=> project.id !== id)
        setProjectItems(updatedItems)
        const prepareData = {}
        prepareData[optionId] = updatedItems
        handleResume(prepareData)
    }

    
    return (
    <div className='option-container minimize'>
                <div className='option-head'>
                    <div className='option-title'>
                        {optionName}
                    </div>
                    <div className='option-minimize arrow' onClick={toggleOptionBody}>
                    </div>
                </div>
                <div className='option-form'>

                    <div className='display-option-content'>
                    { console.log(projectItems)}{
                    projectItems.map((projectItem)=>
                            <ProjectView key={projectItem.id} data={projectItem} handleProjectDelete={handleProjectDelete}></ProjectView>
                        )
                    }
                    </div>
                    <ProjectForm optionId={optionId} optionName={optionName} handleResume={handleResume} setArrData={setProjectItems}></ProjectForm>
                </div>
            </div>
            )
}
