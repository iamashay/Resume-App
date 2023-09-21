import Preview from "./Preview"
import Option from "./Option"
import { useState } from "react"
import '../styles/Builder.css'
const Resume = {
    edu: [{
        id: '45fvdgdg',
        clgName: 'Dr. College',
        eduName: 'Bachelor of Commerece',
        location: 'Manali',
        startYear: 2021,
        endYear: 2023,
        isPresent: false,
        score: '9 CGPA'
    }],
    exp: [{
        id: '2342sd',
        companyName: 'LocuSoft',
        roleName: 'Software Engineer',
        location: 'Kolkata',
        descArr: [{id: '324dfg', text: 'Being trained on Java, SQL and JavaScript'}, {id: 'dff3', text: 'Top performer'}],
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
    skills: 'git, html',
    projects: [{
        id: 'sadfsdf3',
        name: 'Starlight',
        desc: 'WOOOOo!',
        link: 'http://asdsd.com'
    }],
}



function Builder() {
    const [resume, setResume] = useState(Resume)
    console.log(resume)

    return (
        <div id="builder"> 
            <Option setResume={setResume} resume={resume}></Option>
            <Preview data={resume}></Preview>
            
        </div>
    )
}

export default Builder