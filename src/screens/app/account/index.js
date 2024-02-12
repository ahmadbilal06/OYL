import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback
} from 'react-native'
import React, { useState, } from 'react';
import { colors } from '../../../services/utilities/colors';
import { appIcons, appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import EditProfile from '../editProfile';
import Feedback from '../feedback';
import Terms from '../Terms';
import Privacy from '../privacy';
import auth from '@react-native-firebase/auth';

const Account = ({navigation}) => {

  
  const handleLogoutPress = async () => {
    try {
      await auth().signOut();
      console.log('User logged out successfully');
      // Optionally, you can navigate to the login screen or any other screen after logout
      navigation.navigate('Login'); // Replace 'Login' with the name of your login screen
    } catch (error) {
      console.error('Error logging out:', error.message);
      // Handle logout error (e.g., display an error message)
      Alert.alert('Error', 'Unable to logout. Please try again.');
    }
  };


  
  return (
    <SafeAreaView style={styles.accountSafearea}>
      <StatusBar
        hidden={true}
      />

      <View style={styles.acountContainer}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('EditProfile')}>
        <View style={styles.uperContainer}>
          <Text style={styles.text}>Edit Profile</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Feedback')}>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>Share Your Feedback</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Terms')}>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>Terms of Service</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Privacy')}>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>Privacy Policy</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('AboutUs')}>
        <View style={styles.middleContainer}>
          <Text style={styles.text}>About Us</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={handleLogoutPress}>
        <View style={styles.bottomContainer}>
          <Text style={[styles.logouttext, {fontWeight: 'bold'}]}>Logout</Text>
          <Image
            source={appIcons.farrow}
            style={styles.arrow}
          />
        </View>
        </TouchableWithoutFeedback>

        

      </View>
    </SafeAreaView>
  )
}

export default Account

const styles = StyleSheet.create({

  accountSafearea: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  acountContainer: {
    alignSelf: 'flex-end',
    backgroundColor: colors.backgroundColor2,
    borderTopLeftRadius: responsiveWidth(7),
    borderTopRightRadius: responsiveWidth(7),
    height: responsiveHeight(50),
    width: responsiveWidth(100),
    elevation: 25,
    shadowColor: '#00000080',
    shadowOpacity: 1,
    paddingTop: responsiveHeight(5),
    paddingBottom: responsiveHeight(5),
    paddingLeft: responsiveWidth(3.5),
    paddingRight: responsiveWidth(3.5),
    //borderWidth: responsiveWidth(.1),
    //borderColor: colors.accountBorder1,
  },
  uperContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: responsiveWidth(.5),
    borderRightWidth: responsiveWidth(.5),
    borderTopWidth: responsiveWidth(.5),
    borderColor: colors.accountBorder,
    borderTopRightRadius: responsiveWidth(5),
    borderTopLeftRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
  },
  middleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderLeftWidth: responsiveWidth(.5),
    borderRightWidth: responsiveWidth(.5),
    borderTopWidth: responsiveWidth(.5),
    borderColor: colors.accountBorder,
    padding: responsiveWidth(3),
  },
  bottomContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: responsiveWidth(.5),
    borderColor: colors.accountBorder,
    borderBottomRightRadius: responsiveWidth(5),
    borderBottomLeftRadius: responsiveWidth(5),
    padding: responsiveWidth(3),
  },
  arrow:{
    height: responsiveHeight(2),
    width: responsiveWidth(2),
    resizeMode: 'contain'
  },
  text:{
    color: colors.accountmenutext,
    fontFamily: fontFamily.robotoRegular,
    fontSize: fontSize.accountmanuestextsize
  },
  logouttext:{
    color: colors.accountmenutext,
    fontFamily: fontFamily.robotoBold,
    fontSize: fontSize.accountmanuestextsize,
  }
})