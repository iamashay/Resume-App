import Preview from "./Preview"
import Option from "./Option"
import { useState, useEffect } from "react"
import '../styles/Builder.css'
import Resume from './Resume';
import { usePDF } from '@react-pdf/renderer';

const resumeData = {
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
        descArr: ['asdasd', 'asd33234234'],
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
    const [resume, setResume] = useState(resumeData)
    //const [instance, updateInstance] = usePDF({ document: <Resume resume={resume} /> });
    const [instance, updateInstance] = usePDF({ document: <Resume resume={resume} /> });
    const handleResume = (data) => {
        setResume((currentResume) => {
            console.log(data)
            const newResume = {...currentResume, ...data}
            updateInstance(<Resume resume={newResume} />)
            console.log(newResume)
            return newResume
        })
    }


    return (
        <div id="builder"> 
            <Option instance={instance} updateInstance={updateInstance} handleResume={handleResume}  resume={resume}></Option>
            <Preview instance={instance} resume={resume}></Preview>
        </div>
    )
}

export default Builder