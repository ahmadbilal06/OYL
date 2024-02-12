import {
  ImageBackground,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native'
import React, { useState } from 'react';
import { colors } from '../../../services/utilities/colors';
import { appIcons, appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomButton from '../../../components/button';

const AboutUs = ({navigation}) => {

  const handleButtonPress = () => {
    // Your custom logic when the button is pressed
    navigation.navigate('HomeStack')
    console.log('Button Pressed!');
  };


  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>

      <StatusBar
        hidden={false}
        backgroundColor={colors.backgroundColor2}
        barStyle={'dark-content'}
      />
      <View style={styles.container1}>
        <View style={styles.circle}>
          <Image
            source={appIcons.thumb}
            style={styles.thumbstyle}
          />
        </View>
      </View>
      <View style={styles.container2}>
        <ImageBackground
          source={appImages.backgroundImage}
          style={AppStyles.imageBackground}
        >

          <Text style={styles.thanksstyle}>Thank You!</Text>
          <View style={{marginTop: responsiveHeight(2)}}>
          <Text style={styles.small}>Thanks for using our app, We hope</Text>
          <Text style={styles.small}>you like it and use it again.</Text>
          </View>

          <View style={styles.socialContainer}>
            <Image
              source={appIcons.face}
              style={styles.social}
            />
            <Image
              source={appIcons.insta}
              style={styles.social}
            />
          </View>
          <CustomButton
          buttonTextColor={colors.buttontextcolor1}
          buttonTextFontfamily={fontFamily.robotoBold}
          buttonFontSize={fontSize.buttonTextsize}
          onPress={handleButtonPress}
          colors={colors.buttonGradiant2}
          buttonText="Go Home"
          marginTop={responsiveHeight(3)}
          buttonWidth={responsiveWidth(46)}
          buttonpadding={responsiveHeight(1.6)}
          />
        </ImageBackground>
      </View>

    </SafeAreaView>
  )
}

export default AboutUs

const styles = StyleSheet.create({

  container1: {
    flex: 2,
    backgroundColor: colors.backgroundColor3,
    borderWidth: responsiveWidth(.7),
    borderColor: colors.feedbackBorder,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 2,
  },
  circle: {
    height: responsiveWidth(46),
    width: responsiveWidth(46),
    backgroundColor: colors.backgroundColor2,
    borderRadius: responsiveWidth(23),
    elevation: responsiveWidth(3),
    shadowOpacity: .2,
  },
  thumbstyle: {
    height: responsiveWidth(41),
    width: responsiveWidth(41),
    marginLeft: responsiveWidth(3),
    //marginTop: responsiveHeight(1),
    resizeMode: 'contain',
  },
  thanksstyle: {
    textAlign: 'center',
    color: colors.thanksText,
    fontFamily: fontFamily.robotoBold,
    fontSize: fontSize.thankutext,
    marginTop: responsiveHeight(4),
  },
  small: {
    textAlign: 'center',
    color: colors.thanksText,
    fontFamily: fontFamily.robotoRegular,
    fontSize: responsiveFontSize(2.3),
  },
  social: {
    height: responsiveHeight(10),
    width: responsiveWidth(15),
    resizeMode: 'contain'
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: responsiveWidth(33),
    paddingRight: responsiveWidth(33),
    marginTop: responsiveHeight(3),
  }
})