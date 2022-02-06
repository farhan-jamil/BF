import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

import Splash from '../screens/SplashScreen/Splash'
import Login from '../screens/Authentication/Login'
import Home from '../screens/HomeScreen/Home'
import Logout from '../screens/Authentication/Logout';

import { useSelector } from 'react-redux';
export default function MainStackNavgation() {
  const getValue = useSelector(state => state.LoginReducer)
  // console.log('Hi from MainStack' + JSON.stringify(getValue));
  // console.log('Hi from MainStack' + getValue.matchingVar);
  const isSignedIn = getValue.matchingVar

  return (
    <Stack.Navigator >


      {isSignedIn ?
        <>
          <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
          <Stack.Screen name='Logout' component={Logout} options={{ headerShown: false }} />
        </>
        :
        <>
          <Stack.Screen name='Splash' component={Splash} options={{ headerShown: false }} />
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} /></>

      }
    </Stack.Navigator>
  )
}
