import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
const Task = (props) => {
    return (
        <View style={styles.item}>
            <View style={styles.itemleft}>
                <TouchableOpacity style={styles.square}></TouchableOpacity>

                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.circular}></View>

        </View>
    )
}
const styles = StyleSheet.create({

    item: {
        backgroundColor: '#FFF',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
        borderRadius: 10
    },
    itemleft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: 'green',
        opacity: 0.4,
        marginRight:15
    
    },
    itemText: {
        maxWidth:'80',
    }
    ,
    circular: {
        width:12,
        height:12,
        borderColor: 'red',
        borderWidth:2,
        borderRadius:5,
},

});
export default Task;