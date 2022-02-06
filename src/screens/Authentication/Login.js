import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import LogoImage from '../../images/Logo.png'
import { h1, h2, h3, h4 } from '../../component/Texts';
import TextInputPassword from '../../component/TextInputPassword';
import TextInputEmail from '../../component/TextInputEmail';

import Buttons from '../../component/Buttons';
import { color } from '../../component/Colors';
import { useSelector, useDispatch } from 'react-redux';
import {getLogin} from '../../redux/actions'

export default function Login() {
    // const getValue = useSelector(state => state.LoginReducer)
    const dispatch = useDispatch()
    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const [displayEmailError, setDisplayEmailError] = useState('')
    const [displayPasswordError, setDisplayPasswordError] = useState('')
    const loginFun = () => {
        if (loginEmail == '' && loginPassword == '') {
            console.log('Both Feilds are Empty')
            setDisplayEmailError('Please Enter Email')
            setDisplayPasswordError('Please Enter Password')
        }
        else if (loginEmail == '') {
            // console.log('LoginEmail is empty ')
            setDisplayEmailError('Please Enter Email')

        }
        else if (loginPassword == '') {
            // console.log('Password is empty ')
            setDisplayPasswordError('Please Enter Password')
            setDisplayEmailError('')
        }
        else {
            console.log('Both are non empty')
            setDisplayEmailError('')
            setDisplayPasswordError('')
            let loginInfo = { loginEmail, loginPassword }
            //     // console.log('from Login Screen',loginInfo)
            dispatch(getLogin(loginInfo))
            //     // navigation.navigate('HomeScreen')

            //     // console.log('Hi from Login' +JSON.stringify(getValue));
            //     // console.log('Hi from Login' +getValue.matchingVar);

        }
    }
    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <View style={{}}>
                    <View style={styles.headerBoxLayout}>
                        <Image source={LogoImage} style={styles.logoStyle} resizeMode='contain' />
                        <Text style={[h1, { color: color.black }]}>Welcome</Text>
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>

                        <Text style={h2}>Login</Text>

                        <TouchableWithoutFeedback >
                            <Text style={h2}>Signup</Text>
                        </TouchableWithoutFeedback>

                    </View>
                    <View style={styles.line} />
                </View>
                <View style={{ flex: 1, justifyContent: 'space-between', marginVertical: hp(10) }}>

                    <View>
                        <View style={{ marginHorizontal: wp(5) }}>

                            <TextInputEmail
                                borderWidth={displayEmailError ? 1 : 0}
                                borderColor={displayEmailError ? color.red : null}
                                placeholder='Enter Email'
                                value={loginEmail}
                                onchangetext={e => {
                                    setLoginEmail(e);
                                    setDisplayEmailError('');
                                }}
                            />
                            <View style={{ marginTop: 5 }}>
                                <Text style={[h4, { color: color.red }]}>{displayEmailError ? displayEmailError : null}</Text>
                            </View>

                            <TextInputPassword
                                borderWidth={displayPasswordError ? 1 : 0}
                                borderColor={displayPasswordError ? color.red : null}
                                placeholder='Enter Password'
                                value={loginPassword}
                                onchangetext={p => {
                                    setLoginPassword(p);
                                    setDisplayPasswordError('')
                                }}

                            />
                            <View style={{ marginTop: 5 }}>
                                <Text style={[h4, { color: color.red }]} >{displayPasswordError ? displayPasswordError : null}</Text>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 20 }}>
                                <TouchableWithoutFeedback >
                                    <Text style={h3}>Forgot Password?</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>


                    <View style={{ marginHorizontal: wp(5) }}>

                        <Buttons onpress={loginFun} title='Login'/>
                    </View>





                </View>
            </ScrollView>
        </View >
    );
}
const styles = StyleSheet.create({
    logoStyle: {
        width: 130,
        height: 180,
    },
    headerBoxLayout: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: hp(5)
    },
    line: {
        borderBottomWidth: 4,
        width: wp('50%'),
        borderColor: color.primary
    }

});
