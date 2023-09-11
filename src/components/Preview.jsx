import '../styles/Preview.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

/*
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

            {skills}
            {projects.map((project)=> 
                <>
                {project.name}
                {project.desc}
                </>
            )}

        </>
    )
}
*/

const styles = StyleSheet.create({
    firstName: {fontSize: 60, alignSelf: 'center'}
  });

function Preview ({data}) {
    return (
    <Document>
        <Page size="A4" scale = '100'>
        <View style={styles.section}>
            <Text style={styles.firstName}>{data.basicDetails.name}</Text>
        </View>
        <View style={styles.section}>
            <Text>Section #2</Text>
        </View>
        </Page>
    </Document>
    )
}

export default Preview