
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Account from '../../../screens/app/account';
import EditProfile from '../../../screens/app/editProfile';
import Feedback from '../../../screens/app/feedback';
import Terms from '../../../screens/app/Terms';
import Privacy from '../../../screens/app/privacy';
import AboutUs from '../../../screens/app/aboutUs';

const Stack = createNativeStackNavigator();

const AccountStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Account'>
        <Stack.Screen name="Account" component={Account} options={{ unmountOnBlur: true }} />
        <Stack.Screen name="EditProfile" component={EditProfile} options={{ unmountOnBlur: true }} />
        <Stack.Screen name="Feedback" component={Feedback} options={{ unmountOnBlur: true }} />
        <Stack.Screen name="Terms" component={Terms} options={{ unmountOnBlur: true }} />
        <Stack.Screen name="Privacy" component={Privacy} options={{ unmountOnBlur: true }} />
        <Stack.Screen name="AboutUs" component={AboutUs} options={{ unmountOnBlur: true }} />
      </Stack.Navigator>
    );
  };

export default AccountStack
