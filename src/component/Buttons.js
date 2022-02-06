import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import {color} from './Colors'
import { h2 } from './Texts';

export default function Buttons({onpress,title}) {
    return (
        <View>
            <TouchableOpacity style={styles.button}
            onPress={onpress}
            >

                <Text style ={[h2,{color:color.white}]}>{title}</Text>

            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    button: {
        backgroundColor: color.primary,
        padding: 10,
        elevation: 4,
        borderRadius: 6,
        alignItems:'center',
        justifyContent:'center'
    }
});
