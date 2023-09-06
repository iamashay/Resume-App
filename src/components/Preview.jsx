import '../styles/Preview.css'

function Preview({data}) {
    const basicDetails = data.basicDetails
    const eduDetails = data.edu
    const expDetails = data.exp
    const skills = data.skills
    const projects = data.projects
    return (
        <>
            {basicDetails.name}
            <br></br>
            {basicDetails.phone}
            <br></br>
            {basicDetails.mail}
            <br></br>
            {basicDetails.addr}
            <br></br>
            {basicDetails.linkedin}

            {eduDetails.map((edu)=> 
                (
                    <>
                    {edu.clgName}
                    {edu.eduName}
                    {edu.location}
                    {edu.startYear + '-'+ edu.endYear}
                    </>
                )
            )}

            {expDetails.map((exp)=> 
                    <>
                    {exp.companyName}
                    {exp.roleName}
                    {exp.location}
                    {exp.startDate + '-' + exp.isPresent ? 'Currently Pursuing' : exp.endDate}
                    </>
            )}

            {data.skills}
            {projects.map((project)=> 
                <>
                {project.name}
                {project.desc}
                </>
            )}

        </>
    )
}

export default Preview