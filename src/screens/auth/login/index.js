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
import { appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomTextInput from '../../../components/customTextInput';
import CustomButton from '../../../components/button';
import auth from '@react-native-firebase/auth';


const Login = ({ navigation }) => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

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

    try {
      setLoading(true);
      // Perform Firebase authentication
      const userCredential = await auth().signInWithEmailAndPassword(email, password);

      // If authentication is successful, navigate to the AppStack or any other screen
      setLoading(false);
      navigation.navigate('AppNavigation');
      console.log('User logged in:', userCredential.user);
    } catch (error) {
      console.error('Error logging in:', error.message);
      // Handle authentication error (e.g., display an error message)
      Alert.alert('Error', 'Invalid email or password. Please try again.');
    }
    
  };

  const handleCreatPress = () => {
    // Your custom logic when the button is pressed
    navigation.navigate('CreatAccount')
    console.log('Button Pressed!');
  };

  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>
      <StatusBar
        backgroundColor={colors.backgroundColor1}
      />
      <ImageBackground
        source={appImages.backgroundImage}
        style={AppStyles.imageBackground}
      >
        <ScrollView>
          <View style={AppStyles.loginLogoContiner}>
            <Image
              source={appImages.logo}
              style={AppStyles.logostyle}
            />
          </View>
          <Text style={AppStyles.text1}>Enter your phone number to log in!</Text>



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
            height={responsiveHeight(9)}
            marginTop={responsiveHeight(3)}
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
            marginTop={responsiveHeight(4)}
            height={responsiveHeight(9)}
            securetextEntry={true}
          //onChangeText={setEmail}
          //showCalendarImage={true}
          //marginTop= {responsiveHeight(5)}
          //editAble={false}
          />

          <View style={AppStyles.creatContainer}>
            <Text style={AppStyles.creatTextStyle1}>Do not have an account?  </Text>
            <TouchableOpacity onPress={handleCreatPress}>
              <Text style={AppStyles.creatTextStyle2}>Create</Text>
            </TouchableOpacity>
          </View>


          <View>
            <CustomButton
              buttonTextColor={colors.buttontextcolor1}
              buttonTextFontfamily={fontFamily.robotoBold}
              buttonFontSize={fontSize.buttonTextsize}
              onPress={handleButtonPress}
              colors={colors.buttonGradiant1}
              buttonText="LUBE ME UP!"
              marginTop={responsiveHeight(12)}
              buttonWidth={responsiveWidth(80)}
              buttonpadding={responsiveHeight(1.8)}
            />
          </View>

          {loading && (
          <View style={AppStyles.lodingContainer}>
            <ActivityIndicator size="large" color="#FFFFC8" />
          </View>
          )}

        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
})