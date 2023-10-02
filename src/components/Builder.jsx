import Preview from "./Preview"
import Option from "./Option"
import { useState, useEffect } from "react"
import '../styles/Builder.css'
import Resume from './Resume';
import { usePDF } from '@react-pdf/renderer';

const resumeData = {
    edu: [{
        id: '45fvdgdg',
        clgName: 'XYZ International College',
        eduName: 'Bachelor of Technology',
        location: 'Manali',
        startYear: 2021,
        endYear: 2023,
        isPresent: false,
        score: '9 CGPA'
    }, 
    {
        id: '345f',
        clgName: 'XYZ Public School',
        eduName: 'Class 12',
        location: 'Manali',
        startYear: 2020,
        endYear: 2021,
        isPresent: false,
        score: '90 %'
    }
    ],
    exp: [{
        id: '2342sd',
        companyName: 'LocuSoft',
        roleName: 'Software Engineer',
        location: 'New Delhi',
        descArr: ['Raised sales by 50% of the product', 'Built chat system with Generative AI'],
        startDate: '01/12/2022',
        endDate: null,
        isPresent: true
    },
    {
        id: '23d42sd',
        companyName: 'EY',
        roleName: 'Software Analyst',
        location: 'New Delhi',
        descArr: ['Enhanced performance and execution time', 'Built chat system with Generative AI'],
        startDate: '10/02/2021',
        endDate: '01/12/2022',
        isPresent: false
    }],
    basicDetails: {
        name: 'Joe Doe',
        addr: 'Paharganj, Delhi',
        phone: '6353453453',
        mail: 'dfgdfhdgdfg@gmail.com',
        objective: 'An inspiring software aspirant',
        linkedin: 'https://linkedin.com'
    },
    skills: 'JavaScript, NodeJS, ReactJS, HTML, CSS, PHP, Java',
    projects: [{
        id: 'sadfsdf3',
        name: 'Resume Maker',
        desc: 'An application where you could create your resume in a popular layout. Built in ReactJS.',
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