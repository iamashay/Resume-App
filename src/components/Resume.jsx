import '../styles/Preview.css'
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    firstName: {fontSize: 60, alignSelf: 'center'}
  });

function Resume ({data}) {
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


export default Resume