import Preview from "./Preview"
import Option from "./Option"
import { useState } from "react"

const Resume = {
    edu: [{
        clgName: 'Dr. B.C. Roy Engineering College',
        eduName: 'Bachelor of Commerece',
        location: 'Durgapur',
        startYear: 2021,
        endYear: 2023,
        isPresent: false,
    }],
    exp: [{
        companyName: 'LabVantage',
        roleName: 'Associate Solution Engineer',
        location: 'Kolkata',
        startDate: +new Date(),
        endDate: null,
        isPresent: true
    }],
    basicDetails: {
        name: 'Ashay Jaiswal',
        addr: 'Bokaro, Jharkhand',
        phone: '8709776795',
        mail: 'ashaywin@gmail.com',
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
        <>
            <Option onChange={setResume}></Option>
            <Preview data={resume}></Preview>
        </>
    )
}

export default Builder