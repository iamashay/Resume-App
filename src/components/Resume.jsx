import '../styles/Preview.css'
import { Page, Text, View, Document, Font, StyleSheet, Link, Line } from '@react-pdf/renderer';
import ListItem from './ListItem';
Font.register({
    family: 'helvetica',
    fonts: [
      { src: 'https://cdn.jsdelivr.net/npm/helvetica-original@1.0.0/Light/Helvetica-Light.ttf' },
      { src: 'https://cdn.jsdelivr.net/npm/helvetica-original@1.0.0/Bold/Helvetica-Bold.ttf', fontWeight: '800' },
    ]
  })
const styles = StyleSheet.create({
    firstName: {fontSize: '22px', alignSelf: 'center'},
    section: {fontSize: '14px', marginBottom: 20},
    heading: {fontSize: '16px', fontWeight: 'bold'},
    pageMargin: {margin: '20 8 1 8'},
    line: { borderBottom: 1, marginTop: 3, marginBottom: 5 },
    link: {textDecoration: 'none', fontSize: '12px'},
    alignCenter: {alignSelf: 'center'},
    arrangeInlineSpace: {display: 'flex', flexDirection: 'row', justifyContent: 'space-between'},
    arrangeInline: {display: 'flex', flexDirection: 'row', alignItems: 'baseline' },
    title: {fontFamily: 'helvetica', fontWeight: 'bold'},
    alignItemsRight: {alignItems: 'flex-end'},
    customFont: {fontFamily: 'helvetica'},
    sectionBodyMargin: {margin: '0 5px 0 5px'},
    arrItem: {margin: '0 0 5px'}
});

function formatDate(date) {
    const options = { year: 'numeric', month: 'short' };
    return new Date(date).toLocaleString('en-US', options)
}

function Resume ({resume}) {
    return (
    <Document>
        <Page size="A4">
            <View style={[styles.pageMargin, styles.customFont]}>
                <View style={[styles.section]}>
                    <Text style={styles.firstName}>{resume.basicDetails.name}</Text>
                    <View>
                        <Text style={styles.alignCenter}>{resume.basicDetails.phone} | {resume.basicDetails.addr}</Text>
                        <Text style={styles.alignCenter}><Link style={styles.link} src={'mailto:'+resume.basicDetails.mail}>{resume.basicDetails.mail}</Link> | <Link style={styles.link} src={resume.basicDetails.linkedin}>{resume.basicDetails.linkedin}</Link></Text>
                    </View>
                </View>
                { resume?.basicDetails?.objective &&
                    <View style={styles.section}>
                        <Text style={styles.heading}>Objective</Text>
                        <Line style={styles.line} />
                        <Text style={styles.sectionBodyMargin}>{resume.basicDetails.objective}</Text>
                    </View>
                }
                { resume?.exp?.length &&
                    <View style={styles.section}>
                        <Text style={styles.heading}>Experience</Text>
                        <Line style={styles.line} />
                        <View style={styles.sectionBodyMargin}>
                            {resume.exp.map((exp) => (

                                <View style={styles.arrItem} key={exp.id}>
                                    <View style={styles.arrangeInlineSpace}>
                                        <View>
                                            <Text style={styles.title}>{exp.roleName}</Text>
                                            <Text>{exp.companyName}</Text>
                                        </View>
                                        <View style={styles.alignItemsRight}>
                                            <Text>{`${formatDate(exp.startDate)} - ${exp.isPresent ? 'Present' : formatDate(exp.endDate)}`}</Text>
                                            <Text>{exp.location}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        {exp.descArr.map((desc, index) => (
                                            <ListItem key={index}>
                                                {desc}
                                            </ListItem>
                                        ))}
                                    </View>
                                </View>
                            ))}
                        </View>
                    </View>
                }
                { resume?.edu?.length &&
                    <View style={styles.section}>
                        <Text style={styles.heading}>Education</Text>
                        <Line style={styles.line} />
                        <View style={styles.sectionBodyMargin}>
                            {resume.edu.map((edu) => (
                                <View style={styles.arrItem} key={edu.id}>
                                    <View style={styles.arrangeInlineSpace}>
                                        <View style={styles.arrangeInline}>
                                            <Text style={styles.title}>{edu.eduName}</Text>
                                            <Text>, {edu.clgName}</Text>
                                        </View>
                                        <Text>{edu.startYear + '-' + edu.endYear}</Text>
                                    </View>
                                    <Text>{edu.score}</Text>
                                </View>
                            ))}
                        </View>
                    </View>
                }
                { resume?.skills &&
                    <View style={styles.section}>
                        <Text style={styles.heading}>Skills</Text>
                        <Line style={styles.line} />
                        <View style={styles.sectionBodyMargin}>
                            <Text>{resume.skills}</Text>
                        </View>
                    </View>
                }
                { resume?.projects?.length &&
                    <View style={styles.section}>
                        <Text style={styles.heading}>Projects</Text>
                        <Line style={styles.line} />
                        <View style={styles.sectionBodyMargin}>
                            {resume.projects.map((project) => (
                                <View style={[ styles.arrItem]} key={project.id}>
                                    <Text style={styles.title}>{project.name+' : '} <Text style={{fontWeight: 0}}>{project.desc} {project.link && <Link style={styles.link} src={project.link}>Project Link</Link>}</Text>    </Text>
                                    
                                </View>
                            ))} 
                        </View>
                    </View>
                }
            </View>
                        
        </Page>
    </Document>
    )
}


export default Resume