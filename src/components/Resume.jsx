import '../styles/Preview.css'
import { Page, Text, View, Document, Font, StyleSheet, Link, Line } from '@react-pdf/renderer';
import ListItem from './ListItem';
Font.register({
    family: 'Open Sans',
    fonts: [
      { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-regular.ttf' },
      { src: 'https://cdn.jsdelivr.net/npm/open-sans-all@0.1.3/fonts/open-sans-600.ttf', fontWeight: 600 }
    ]
  })
const styles = StyleSheet.create({
    firstName: {fontSize: '22px', alignSelf: 'center'},
    section: {fontSize: '14px', marginBottom: 20},
    heading: {fontSize: '18px'},
    myMargin: {margin: '20 5 1 5'},
    line: { borderBottom: 1, marginTop: 5, marginBottom: 5 },
    link: {textDecoration: 'none'},
    alignCenter: {alignSelf: 'center'},
    arrangeInlineSpace: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'},
    arrangeInline: {display: 'flex', flexDirection: 'row', alignItems: 'baseline' },
    title: {fontFamily: 'Open Sans', fontSize: '16px' }
});

function Resume ({data}) {
    return (
    <Document>
        <Page size="A4">
            <View style={styles.myMargin}>
                <View style={[styles.section]}>
                    <Text style={styles.firstName}>{data.basicDetails.name}</Text>
                    <View>
                        <Text style={styles.alignCenter}>{data.basicDetails.phone} | {data.basicDetails.addr}</Text>
                        <Text style={styles.alignCenter}><Link style={styles.link} src={'mailto:'+data.basicDetails.mail}>{data.basicDetails.mail}</Link> | <Link style={styles.link} src={data.basicDetails.linkedin}>{data.basicDetails.linkedin}</Link></Text>
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Objective</Text>
                    <Line style={styles.line} />
                    <Text>{data.basicDetails.objective}</Text>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Experience</Text>
                    <Line style={styles.line} />
                    <View>
                        {data.exp.map((exp) => (
                            <View key={exp.id}>
                                <View style={styles.arrangeInlineSpace}>
                                    <View>
                                        <Text>{exp.roleName}</Text>
                                        <Text>{exp.companyName}</Text>
                                    </View>
                                    <View>
                                        <Text>{exp.isPresent ? 'Present' : new Date(exp.startDate)}</Text>
                                        <Text>{exp.location}</Text>
                                    </View>
                                </View>
                                <View>
                                    {exp.descArr.map((desc) => (
                                        <ListItem key={desc.id}>
                                            {desc.text}
                                        </ListItem>
                                    ))}
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
                <View style={styles.section}>
                    <Text style={styles.heading}>Education</Text>
                    <Line style={styles.line} />
                    <View>
                        {data.edu.map((edu) => (
                            <View key={edu.id}>
                                <View style={styles.arrangeInlineSpace}>
                                    <Text>{edu.eduName + ', '+edu.clgName}</Text>
                                    <Text>{edu.startYear + '-' + edu.endYear}</Text>
                                </View>
                                <Text>{edu.score}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Skills</Text>
                    <Line style={styles.line} />
                    <View>
                        <Text>{data.skills}</Text>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.heading}>Projects</Text>
                    <Line style={styles.line} />
                    <View>
                        {data.projects.map((project) => (
                            <View style={styles.arrangeInline} key={project.id}>
                                <Text style={styles.title}>{project.name+' : '}</Text>
                                <Text>{project.desc} </Text>
                                {project.link && <Link style={styles.link} src={project.link}>Project Link</Link>}
                            </View>
                        ))} 
                    </View>
                </View>
            </View>
        </Page>
    </Document>
    )
}


export default Resume