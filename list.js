import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const List = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemsLeft}>
                <Text style={styles.folderText}>{props.folder}</Text>
                <Text style={styles.itemText}>{props.text}</Text>
                <Text style={styles.timeText}>{props.time}</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        backgroundColor:'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        alignItems: 'flex-start',
        marginTop: 10,
        shadowRadius: 6,
        shadowOpacity: 0.16,
        shadowOffset: {  
            width: 0,
            height: 3
        },
    },
    itemInactive: {
        backgroundColor:'white',
        padding: 15,
        borderRadius: 10,
        marginBottom: 5,
        alignItems: 'flex-start',
        marginTop: 10,
        shadowRadius: 6,
        shadowOpacity: 0.16,
        shadowOffset: {  
            width: 0,
            height: 3
        },
        opacity: 0.5,
    },
    itemsLeft: {
        maxWidth: '100%',
    },
    folderText: {
        color: '#00f',
        fontWeight: 'bold',
        fontSize: 12,
    },
    itemText: {
        fontWeight: 'bold',
        fontSize: 18,
        marginVertical: 3,
    },
    timeText: {
        color: '#a2a2a2',
        fontSize: 12,
    },
})

export default List;