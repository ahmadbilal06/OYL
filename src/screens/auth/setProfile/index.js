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
  Alert,
  ActivityIndicator,
} from 'react-native'
import React, { useState, } from 'react';
import { colors } from '../../../services/utilities/colors';
import { appIcons, appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../../../components/header';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/button';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const SetProfile = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [vehicleMake, setvehicleMake] = useState("");
  const [vehicleModel, setvehicleModel] = useState("");
  const [vehicleYear, setvehicleYear] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehicleMileage, setvehicleMileage] = useState("");

  const handleButtonPress = async () => {
    // Check if all fields are not empty
    if (!firstName || !lastName || !birthday || !vehicleMake || !vehicleModel || !vehicleYear || !vehicleColor || !vehicleMileage) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      // Store the user profile data in Firestore
      const userId = auth().currentUser.uid; // Get the current user's ID
      const userEmail = auth().currentUser.email; // Get the current user's Email
      await firestore().collection('users').doc(userId).set({
        userId: userId,
        email: userEmail,
        firstName: firstName,
        lastName: lastName,
        birthday: birthday,
        vehicleInfo: {
          vehicleMake: vehicleMake,
          vehicleModel: vehicleModel,
          vehicleYear: vehicleYear,
          vehicleColor: vehicleColor,
          vehicleMileage: vehicleMileage,
        },
      });

      // Move to the next screen (you can customize this navigation logic)
      setLoading(false);
      navigation.navigate('AppNavigation');
      console.log('User profile data stored in Firestore successfully!');
    } catch (error) {
      console.error('Error storing user profile data:', error.message);
      Alert.alert('Error', 'Failed to store user profile data. Please try again.');
    }
  };

  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>
      <StatusBar
        backgroundColor={colors.backgroundColor2}
        barStyle={'dark-content'}
      />
      <ImageBackground
        source={appImages.backgroundImage}
        style={AppStyles.imageBackground}
      >
        <ScrollView>
          <CustomHeader
            headerColor={colors.backgroundColor2}
            headerText="Set Up Your Profile"
            headerfontfamily={fontFamily.robotoBold}
            headertextcolor={colors.headersTextColor}
            headerfonrsize={fontSize.headerTextsize}
            onPress={() => navigation.navigate('CreatAccount')}
            marginheadleft={responsiveWidth(16.5)}
          />

          {loading && (
            <View style={AppStyles.lodingContainer}>
              <ActivityIndicator size="large" color="#FFFFC8" />
            </View>
          )}

          <CustomTextInput
            lable='First Name'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Mick"
            placeholdercolor={colors.placeholdar1}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={firstName}
            onChangeText={(text) => setFirstName(text)}
            marginTop={responsiveHeight(3)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Last Name'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Tason"
            placeholdercolor={colors.placeholdar1}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={lastName}
            onChangeText={(text) => setLastName(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          //securetextEntry={true}
          />

          <CustomTextInput
            lable='Birthday'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="09 / 08 / 1996"
            placeholdercolor={colors.placeholdar1}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={birthday}
            onChangeText={(text) => setBirthday(text)}
            marginTop={responsiveHeight(1.5)}
            showCalendarImage={true}
            editAble={false}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Vehicle Make'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Enter the make of your Vehicle"
            placeholdercolor={colors.placeholdar2}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={vehicleMake}
            onChangeText={(text) => setvehicleMake(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Vehicle Model'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Enter model of your Vehicle"
            placeholdercolor={colors.placeholdar2}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={vehicleModel}
            onChangeText={(text) => setvehicleModel(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Vehicle Year'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Enter year of your Vehicle"
            placeholdercolor={colors.placeholdar2}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={vehicleYear}
            onChangeText={(text) => setvehicleYear(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Vehicle Color'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="Enter color of your Vehicle"
            placeholdercolor={colors.placeholdar2}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={vehicleColor}
            onChangeText={(text) => setvehicleColor(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomTextInput
            lable='Vehicle Mileage'
            lableFontFamily={fontFamily.robotoBold}
            lableColor={colors.lebal1}
            lablefontsize={fontSize.lablefontsize1}
            placeholder="If unknown enter approximate"
            placeholdercolor={colors.placeholdar2}
            placeholderfontfamily={fontFamily.robotoRegular}
            placeholderfontsize={fontSize.placeHolderfontsize1}
            containerColor={colors.backgroundColor3}
            value={vehicleMileage}
            onChangeText={(text) => setvehicleMileage(text)}
            marginTop={responsiveHeight(1.5)}
            height={responsiveHeight(8)}
            placeholdertopmargin={responsiveHeight(-0.5)}
          />

          <CustomButton
            buttonTextColor={colors.buttontextcolor1}
            buttonTextFontfamily={fontFamily.robotoBold}
            buttonFontSize={fontSize.buttonTextsize}
            onPress={handleButtonPress}
            colors={colors.buttonGradiant1}
            buttonText="DONE"
            marginTop={responsiveHeight(3)}
            buttonWidth={responsiveWidth(75)}
            buttonpadding={responsiveHeight(1.5)}
            marginbottm={responsiveHeight(4)}
          />

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default SetProfile

const styles = StyleSheet.create({
})