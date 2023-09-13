import Preview from "./Preview"
import Option from "./Option"
import { useState } from "react"
import '../styles/Builder.css'
const Resume = {
    edu: [{
        clgName: 'Dr. College',
        eduName: 'Bachelor of Commerece',
        location: 'Manali',
        startYear: 2021,
        endYear: 2023,
        isPresent: false,
    }],
    exp: [{
        companyName: 'LocuSoft',
        roleName: 'Software Engineer',
        location: 'Kolkata',
        startDate: +new Date(),
        endDate: null,
        isPresent: true
    }],
    basicDetails: {
        name: 'Joe Doe',
        addr: 'Paharganj, Delhi',
        phone: '6353453453',
        mail: 'dfgdfhdgdfg@gmail.com',
        objective: 'An inspiring software aspirant',
        linkedin: 'https://linkedin.com'
    },
    skills: ['git', 'html'],
    projects: [{
        name: 'Starlight',
        desc: 'WOOOOo!'
    }],
}



function Builder() {
    const [resume, setResume] = useState(Resume)
    console.log(resume)

    return (
        <div id="builder"> 
            <Option id="option" setResume={setResume} resume={resume}></Option>
            <Preview data={resume}></Preview>
            
        </div>
    )
}

export default Builder