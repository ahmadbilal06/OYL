import { Image, ImageBackground, StatusBar, StyleSheet, View, SafeAreaView } from 'react-native';
import React, {useEffect,useState} from 'react';
import { AppStyles} from '../../../services/utilities/appStyle';
import { appImages } from '../../../services/utilities/assets';
import { colors } from '../../../services/utilities/colors';
import auth from '@react-native-firebase/auth';
import HomeStack from '../../../navigation/appNavigation/homeStack';
import AppNavigation from '../../../navigation/appNavigation';
//import { scale } from 'react-native-size-matters';

const Splash = ({navigation}) => {

  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const authStateChangedListener = auth().onAuthStateChanged((user) => {
      setUser(user);
      if (initializing) {
        setInitializing(false);
      }
    });

    // Cleanup the listener on component unmount
    return () => authStateChangedListener();
  }, [initializing]);

  useEffect(() => {
    const redirectUser = () => {
      if (initializing) {
        // Still initializing, do nothing
        return;
      }

      if (user) {
        // User is already logged in, navigate to the home screen
        navigation.navigate('AppNavigation'); // Replace with the name of your home screen
      } else {
        // User is not logged in, navigate to the login screen
        navigation.replace('Login'); // Replace with the name of your login screen
      }
    };

    const timer = setTimeout(redirectUser, 1000); // 1 second delay

    // Cleanup the timer on component unmount
    return () => clearTimeout(timer);
  }, [navigation, initializing, user]);
  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>
      <StatusBar
      backgroundColor={colors.backgroundColor1}
      />

        <ImageBackground
        source = {appImages.backgroundImage}
        style={AppStyles.imageBackground}
        >
          <View style={AppStyles.logoContainer}>
            <Image
            source={appImages.logo}
            style={AppStyles.logostyle}
            />
          </View>
        </ImageBackground>

    </SafeAreaView>
  )
}

export default Splash

const styles = StyleSheet.create({
 
})