import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const NewItem = (props) => {

    return (
        <View style={styles.item}>
            <View style={styles.itemsCenter}>
                <Text style={styles.Text}>New Reminder</Text>
            </View>
        </View>
    )
}



const styles = StyleSheet.create({
    item: {
        backgroundColor:'white',
        padding: 15,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        alignItems: 'center',
        marginTop: 0,
        width: '100%',
        shadowRadius: 6,
        shadowOpacity: 0.16,
        shadowOffset: {  
            width: 0,
            height: 6,
        },
    },
    ItemsCenter: {
        maxWidth: '100%',
    },
    Text: {
        color: '#00f',
        fontWeight: 'bold',
        fontSize: 16,
        alignContent: 'center',
        marginBottom: 0,
        marginTop: 0,
    },
});

export default NewItem;