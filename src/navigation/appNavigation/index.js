// appNavigation

import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../../services/utilities/colors';
import { appIcons } from '../../services/utilities/assets';
import HomeStack from './homeStack';
import AccountStack from './accountStack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';
const Tab = createBottomTabNavigator();

const AppNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {backgroundColor: colors.backgroundColor2},
        tabBarActiveTintColor: '#222222',
        tabBarHideOnKeyboard: false,
        unmountOnBlur: true,
        lazy: true,
      })}
    >
      <Tab.Screen name='HomeStack'
        component={HomeStack}
        options={{
          tabBarLabel: 'Home', // Text for the tab
          tabBarIcon: ({ color, size }) => (
              <Image
                  source={appIcons.home} // Provide your image path
                  style={{ width: size, height: size, tintColor: color }}
              />
          ),
      }}
      />
      <Tab.Screen name='AccountStack' 
      component={AccountStack} 
      options={{
          tabBarLabel: 'Account', // Text for the tab
          tabBarStyle: {display: 'none'},
          tabBarIcon: ({ color, size }) => (
              <Image
                  source={appIcons.avatar} // Provide your image path
                  style={{ width: size, height: size, tintColor: color }}
              />
          ),
      
      }} 
      />
    </Tab.Navigator>
  );
};

// const HomeStack = () => {
//   return (
//     <Stack.Navigator creenOptions={{ headerShown: false }}>
//       <Stack.Screen name="Home" component={Home} />
//       <Stack.Screen name="VehicleInfo" component={VehicleInfo} />
//       <Stack.Screen name="Payment" component={Payment} />
//     </Stack.Navigator>
//   );
// };

// const AccountStack = () => {
//   return (
//     <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Account'>
//       <Stack.Screen name="Account" component={Account} options={{ tabBarVisible: false }} />
//       <Stack.Screen name="EditProfile" component={EditProfile} />
//       <Stack.Screen name="Feedback" component={Feedback} />
//       <Stack.Screen name="Terms" component={Terms} />
//       <Stack.Screen name="Privacy" component={Privacy} />
//       <Stack.Screen name="AboutUs" component={AboutUs} />
//     </Stack.Navigator>
//   );
// };


export default AppNavigation

const styles = StyleSheet.create({})