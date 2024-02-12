
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../../screens/app/home';
import VehicleInfo from '../../../screens/app/vehicleInfo';
import Payment from '../../../screens/app/payment';
const Stack = createNativeStackNavigator();

const HomeStack = () => {
    return (
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
        <Stack.Screen name="Payment" component={Payment} />
      </Stack.Navigator>
    );
  };

export default HomeStack
