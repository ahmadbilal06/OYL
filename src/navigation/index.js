// Navigation

import { StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from './authNavigation';
import AppNavigation from './appNavigation';
const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    // <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}} initialRouteName='AuthNavigation'>
            <Stack.Screen name='AuthNavigation' component={AuthNavigation}/>
            <Stack.Screen name='AppNavigation' component={AppNavigation}/>
        </Stack.Navigator>
    // </NavigationContainer>
  );
};

export default Navigation

const styles = StyleSheet.create({})