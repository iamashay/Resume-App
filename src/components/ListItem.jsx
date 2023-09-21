import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
    row:{
        display: 'flex',
        flexDirection: 'row',
    },
    bullet:{
        height: '100%',
    }
})

const ListItem = ({ children }) => {
    return (
        <View style={styles.row}>
            <View style={styles.bullet}>
                <Text>{'\u2022' + " "}</Text>
            </View>
            <Text>{children}</Text>
        </View>
    )
}



export default ListItem;