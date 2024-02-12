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
import CustomCheckbox from '../../../components/checkbox';
import CustomButton from '../../../components/button';
import auth from '@react-native-firebase/auth';

const CreatAccount = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isChecked, setChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCheckboxPress = () => {
    setChecked(!isChecked);
  };


  const handleBackArrowPress = () => {
    // Your custom logic when the button is pressed
    navigation.navigate('Login')
    console.log('Button Pressed!');
  };



  const handleButtonPress = async () => {
    // Check if email and password are not empty
    if (!email || !password) {
      Alert.alert('Error', 'Email and password cannot be empty.');
      return;
    }

    // Check if the email is in the correct format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Error', 'Please enter a valid email address.');
      return;
    }

    // Check if the checkbox is checked
    if (!isChecked) {
      Alert.alert('Error', 'Please accept the Terms of Service and Privacy Policy.');
      return;
    }

    try {
      setLoading(true);
      // Check if the email already exists
      const signInMethods = await auth().fetchSignInMethodsForEmail(email);

      if (signInMethods && signInMethods.length > 0) {
        // Email already exists
        Alert.alert('Error', 'Email already exists. Please use a different email.');
      } else {
        // Email doesn't exist, create a new account
        const userCredential = await auth().createUserWithEmailAndPassword(email, password);
        console.log('User created successfully:', userCredential.user);
        setLoading(false);
        navigation.navigate('SetProfile');
      }
    } catch (error) {
      console.error('Error creating user:', error.message);
      Alert.alert('Error', error.message);
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
        <CustomHeader
          headerColor={colors.backgroundColor2}
          headerText="Create Account"
          headerfontfamily={fontFamily.robotoBold}
          headertextcolor={colors.headersTextColor}
          headerfonrsize={fontSize.headerTextsize}
          onPress={handleBackArrowPress}
          marginheadleft={responsiveWidth(19)}
        />

        <CustomTextInput
          lable='Email'
          lableFontFamily={fontFamily.robotoBold}
          lableColor={colors.lebal1}
          lablefontsize={fontSize.lablefontsize1}
          placeholder="micktason@email.com"
          placeholdercolor={colors.placeholdar1}
          placeholderfontfamily={fontFamily.robotoRegular}
          placeholderfontsize={fontSize.placeHolderfontsize1}
          containerColor={colors.backgroundColor3}
          value={email}
          onChangeText={(text) => setEmail(text)}
          marginTop={responsiveHeight(5)}
          height={responsiveHeight(9)}
        />

        <CustomTextInput
          lable='Password'
          lableFontFamily={fontFamily.robotoBold}
          lableColor={colors.lebal1}
          lablefontsize={fontSize.lablefontsize1}
          placeholder="• • • • • • • • • • • • • • •"
          placeholdercolor={colors.placeholdar1}
          placeholderfontfamily={fontFamily.robotoRegular}
          placeholderfontsize={fontSize.placeHolderfontsize1}
          containerColor={colors.backgroundColor3}
          value={password}
          onChangeText={(text) => setPassword(text)}
          marginTop={responsiveHeight(5)}
          securetextEntry={true}
          height={responsiveHeight(9)}
        />


        <View style={AppStyles.termsPrivacyContainer}>
          <View>
            <CustomCheckbox
              checkedImage={appIcons.tick}
              uncheckedImage={appIcons.untick}
              isChecked={isChecked}
              onPress={handleCheckboxPress}
            />
          </View>
          <Text style={AppStyles.creatTextStyle1}>I accept the </Text>
          <Text style={AppStyles.creatTextStyle2}>Terms of Servic </Text>
          <Text style={AppStyles.creatTextStyle1}>and </Text>
          <Text style={AppStyles.creatTextStyle2}>Privacy Policy</Text>
        </View>

        <CustomButton
          buttonTextColor={colors.buttontextcolor1}
          buttonTextFontfamily={fontFamily.robotoBold}
          buttonFontSize={fontSize.buttonTextsize}
          onPress={handleButtonPress}
          colors={colors.buttonGradiant1}
          buttonText="Lets go!"
          marginTop={responsiveHeight(11)}
          buttonWidth={responsiveWidth(75)}
          buttonpadding={responsiveHeight(1.8)}
        />


        {loading && (
          <View style={AppStyles.lodingContainer}>
            <ActivityIndicator size="large" color="#FFFFC8" />
          </View>
        )}

        <ScrollView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default CreatAccount

const styles = StyleSheet.create({
})