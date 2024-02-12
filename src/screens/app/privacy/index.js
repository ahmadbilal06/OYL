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
import CustomHeader from '../../../components/header';
import CustomText from '../../../components/Text';


const Privacy = ({ navigation }) => {

  const handleBackArrowPress = () => {
    navigation.navigate('Account')
  }

  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>
      <StatusBar
        hidden={false}
        backgroundColor={colors.backgroundColor2}
        barStyle={'dark-content'}
      />
      <ImageBackground
        source={appImages.backgroundImage}
        style={AppStyles.imageBackground}
      >
        <CustomHeader
          headerColor={colors.backgroundColor2}
          headerText="Privacy Policy"
          headerfontfamily={fontFamily.robotoBold}
          headertextcolor={colors.headersTextColor}
          headerfonrsize={fontSize.headerTextsize}
          onPress={handleBackArrowPress}
          marginheadleft={responsiveWidth(21)}
        />

        <ScrollView>
          <CustomText />
        </ScrollView>
      </ImageBackground>

    </SafeAreaView>

  )
}

export default Privacy

const styles = StyleSheet.create({})