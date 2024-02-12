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
import React, { useState, useEffect } from 'react';
import { colors } from '../../../services/utilities/colors';
import { appIcons, appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/button';
import CustomBottumTab from '../../../components/BottumTab';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const EditProfile = ({ navigation }) => {

  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [birthday, setBirthday] = useState("");
  const [vehicleMake, setvehicleMake] = useState("");
  const [vehicleModel, setvehicleModel] = useState("");
  const [vehicleYear, setvehicleYear] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehicleMileage, setvehicleMileage] = useState("");


  // const handleButtonPress = () => {
  //   console.log('Prifile Updated');
  //   navigation.navgate()
  // };

  const handleBackArrowPress = () => {
    navigation.goBack();  // Use navigation.goBack() to go back to the previous screen
    console.log('Back arrow pressed!');
  };


  useEffect(() => {
    const fetchUserProfileData = async () => {
      try {
        setLoading(true);
        const user = auth().currentUser.uid;

        if (user) {
          const userId = user;
          const userDocument = await firestore()
            .collection('users')
            .doc(userId)
            .get();

          if (userDocument.exists) {
            const userData = userDocument.data();
            console.log('User data found:', userData);
            setFirstName(userData.firstName);
            setLastName(userData.lastName);
            setBirthday(userData.birthday);
            setvehicleMake(userData.vehicleInfo.vehicleMake);
            setvehicleModel(userData.vehicleInfo.vehicleModel);
            setvehicleYear(userData.vehicleInfo.vehicleYear);
            setvehicleColor(userData.vehicleInfo.vehicleColor);
            setvehicleMileage(userData.vehicleInfo.vehicleMileage);
          } else {
            console.log('User data not found in Firestore for user ID:', userId);
            Alert.alert('Error', 'User data not found in Firestore');
          }
        } else {
          console.log('No user is currently logged in.');
          Alert.alert('Error', 'No user is currently logged in.');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching user data from Firestore', error);
        Alert.alert('Error', 'Error fetching user data from Firestore');
      }
    };

    fetchUserProfileData();
  }, []);









  const handleButtonPress = async () => {

    if (!firstName || !lastName || !birthday || !vehicleMake || !vehicleModel || !vehicleYear || !vehicleColor || !vehicleMileage) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      // Store the user profile data in Firestore
      const userId = auth().currentUser.uid; // Get the current user's ID
      const userEmail = auth().currentUser.email; // Get the current user's Email
      const docReference = firestore().collection('users').doc(userId)
      docReference.update({
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
      // navigation.navigate('AppNavigation');
      setLoading(false);
      console.log('User profile data stored in Firestore successfully!');
      Alert.alert('User profile data stored in Firestore successfully!');
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


          <View style={styles.editHeadContainer}>
            <View style={styles.arrowView}>
              <TouchableOpacity onPress={handleBackArrowPress}>
                <Image
                  source={appIcons.colorArrow}
                  style={AppStyles.backArrowStyle}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.headertextView}>
              <Text style={styles.headText}>Edit Profile</Text>
            </View>
          </View>


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
            marginTop={responsiveHeight(1)}
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
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
            height={responsiveHeight(7.3)}
            placeholdertopmargin={responsiveHeight(-1.2)}
          />

          <CustomButton
            buttonTextColor={colors.buttontextcolor1}
            buttonTextFontfamily={fontFamily.robotoBold}
            buttonFontSize={fontSize.buttonTextsize2}
            onPress={handleButtonPress}
            colors={colors.buttonGradiant1}
            buttonText="SAVE CHANGES"
            marginTop={responsiveHeight(3.5)}
            buttonWidth={responsiveWidth(75)}
            buttonpadding={responsiveHeight(1.2)}
          //marginbottm={responsiveHeight(1)}
          />

          <View style={{ marginTop: responsiveHeight(1) }}>
            <CustomBottumTab />
          </View>

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({

  arrowView: {
    marginLeft: responsiveWidth(6),
  },
  headertextView: {
    marginLeft: responsiveWidth(26),
  },
  headText: {
    color: colors.textColor1,
    fontFamily: fontFamily.robotoBold,
    fontSize: fontSize.headerTextsize,
  },
  editHeadContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: responsiveHeight(2),
    paddingBottom: responsiveHeight(1),

  }
})