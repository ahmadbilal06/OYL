// authNavigation

import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Splash from '../../screens/auth/splash';
import Login from '../../screens/auth/login';
import CreatAccount from '../../screens/auth/creatAccount';
import SetProfile from '../../screens/auth/setProfile';
const Stack = createNativeStackNavigator();
const AuthNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name='Splash' component={Splash}/>
      <Stack.Screen name='Login' component={Login}/>
      <Stack.Screen name='CreatAccount' component={CreatAccount}/>
      <Stack.Screen name='SetProfile' component={SetProfile}/>
    </Stack.Navigator>
  )
}

export default AuthNavigation

const styles = StyleSheet.create({})