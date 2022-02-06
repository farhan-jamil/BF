import React from 'react'
import { View, Text, StyleSheet, SafeAreaView, Image } from 'react-native'
import SplashImage from '../../images/Logo.png'
import { useSelector } from 'react-redux'
export default function SplashScreen({ navigation }) {
    // const getValue = useSelector(state => state.LoginReducer)
    // console.log('Hi from MainStack' + JSON.stringify(getValue));
    // console.log('Hi from MainStack' + getValue.matchingVar);
    // const movement = getValue.matchingVar
    setTimeout(() => {
                    navigation.replace('Login'), 1000
                })
    // setTimeout(() => {
    //     {
    //         if (movement) {
    //             navigation.replace('HomeScreen'), 1000
    //         }
    //         else {

    //             navigation.replace('LoginScreen'), 2000
    //         }
    //     }
    // })
    return (
        <SafeAreaView style={styles.container}>
            <Image source={SplashImage} style={{ width: '90%', height: '80%' }} resizeMode='contain' />
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'

    }
})
