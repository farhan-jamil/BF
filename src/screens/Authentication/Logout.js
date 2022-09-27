import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Header from '../../component/Header';
import { useDispatch } from 'react-redux';
import { getLogin, getLogout } from '../../redux/actions';
import { LOGOUT_REQUEST } from '../../redux/actions/actionTypes';
import { color } from '../../component/Colors';
import { h2 } from '../../component/Texts';
import AntDesign from 'react-native-vector-icons/AntDesign'
export default function Logout() {
    const dispatch = useDispatch()
    return (

        <Header title='Logout' name='logout'
            onpress={() => dispatch({ type: LOGOUT_REQUEST })}
        />

    );
}
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: hp(15),
        backgroundColor: color.primary,
        justifyContent: 'center',
        elevation: wp(10),
        shadowColor: color.black,


    }
}); 