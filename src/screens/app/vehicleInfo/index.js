import { SafeAreaView, StatusBar, StyleSheet, Text, View, Alert, TouchableOpacity, ActivityIndicator, } from 'react-native'
import React, { useState, useEffect } from 'react'
import HomeHeader from '../../../components/homeHeader'
import Payment from '../payment'
import { AppStyles } from '../../../services/utilities/appStyle'
import { fontFamily, fontSize } from '../../../services/utilities/fonts'
import { colors } from '../../../services/utilities/colors'
import CustomTextInput from '../../../components/customTextInput'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import CustomCheckbox from '../../../components/checkbox'
import { appIcons, appImages } from '../../../services/utilities/assets'
import CustomButton from '../../../components/button'
import CustomModal from '../../../components/modal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const VehicleInfo = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const [isChecked, setChecked] = useState(false);
  const [vehicleMake, setvehicleMake] = useState("");
  const [vehicleModel, setvehicleModel] = useState("");
  const [vehicleYear, setvehicleYear] = useState("");
  const [vehicleColor, setvehicleColor] = useState("");
  const [vehicleMileage, setvehicleMileage] = useState("");

  const handleCheckboxPress = () => {
    setChecked(!isChecked);
  };

  // const handleModalButtonPress = () => {
  //   navigation.navigate('Payment')
  //   console.log('Back arrow pressed!');
  // };

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };







  useEffect(() => {
    if (isChecked) {
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

    }
    else {
      setvehicleMake('');
      setvehicleModel('');
      setvehicleYear('');
      setvehicleColor('');
      setvehicleMileage('');
    }
    
  }, [isChecked]);






  const handleButtonPress = async () => {

    if (!vehicleMake || !vehicleModel || !vehicleYear || !vehicleColor || !vehicleMileage) {
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
      //Alert.alert('User profile data stored in Firestore successfully!');
    } catch (error) {
      console.error('Error storing user profile data:', error.message);
      Alert.alert('Error', 'Failed to store user profile data. Please try again.');
    }

    openModal();
  };



  return (
    <SafeAreaView style={[AppStyles.safeAreaStyle, styles.backgroundstyle]}>
      <StatusBar
        hidden={true}
      />

      <HomeHeader
        text={'Vehicle Info'}
      />

      {loading && (
        <View style={AppStyles.lodingContainer}>
          <ActivityIndicator size="large" color="#FFFFC8" />
        </View>
      )}

      <Text style={AppStyles.detailText}>Please Enter Details</Text>

      <CustomTextInput
        lable='Vehicle Year'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="Enter the year of your Vehicle"
        placeholdercolor={colors.placeholdar3}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={vehicleYear}
        onChangeText={(text) => setvehicleYear(text)}
        marginTop={responsiveHeight(2.5)}
        height={responsiveHeight(8)}
        placeholdertopmargin={responsiveHeight(-1)}
      />

      <CustomTextInput
        lable='Vehicle Make'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="Enter make of your Vehicle"
        placeholdercolor={colors.placeholdar3}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={vehicleMake}
        onChangeText={(text) => setvehicleMake(text)}
        marginTop={responsiveHeight(2.5)}
        height={responsiveHeight(8)}
        placeholdertopmargin={responsiveHeight(-1)}
      />

      <CustomTextInput
        lable='Vehicle Model'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="Enter model of your Vehicle"
        placeholdercolor={colors.placeholdar4}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={vehicleModel}
        onChangeText={(text) => setvehicleModel(text)}
        marginTop={responsiveHeight(2.5)}
        height={responsiveHeight(8)}
        placeholdertopmargin={responsiveHeight(-1)}
      />

      <CustomTextInput
        lable='Vehicle Color'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="Enter color of your Vehicle"
        placeholdercolor={colors.placeholdar3}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={vehicleColor}
        onChangeText={(text) => setvehicleColor(text)}
        marginTop={responsiveHeight(2.5)}
        height={responsiveHeight(8)}
        placeholdertopmargin={responsiveHeight(-1)}
      />

      <CustomTextInput
        lable='Vehicle Mileage'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="If unknown enter approximate"
        placeholdercolor={colors.placeholdar3}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={vehicleMileage}
        onChangeText={(text) => setvehicleMileage(text)}
        marginTop={responsiveHeight(2.5)}
        height={responsiveHeight(8)}
        placeholdertopmargin={responsiveHeight(-1)}
      />


      <View style={styles.checkBoxOuterView}>
        <View style={styles.checkbox}>
          <CustomCheckbox
            checkedImage={appIcons.tik1}
            uncheckedImage={appIcons.box}
            isChecked={isChecked}
            onPress={handleCheckboxPress}
            box={true}
          />
        </View>
        <Text style={styles.pullText}>Pull info from profile here</Text>
      </View>


      <CustomButton
        buttonTextColor={colors.backgroundColor2}
        buttonTextFontfamily={fontFamily.robotoBold}
        buttonFontSize={fontSize.buttonTextsize2}
        onPress={handleButtonPress}
        colors={colors.buttonGradiant3}
        buttonText="ADD"
        marginTop={responsiveHeight(2.5)}
        buttonWidth={responsiveWidth(75)}
        buttonpadding={responsiveHeight(1.7)}
      //marginbottm={responsiveHeight(1)}
      />

      <CustomModal
        visible={modalVisible}
        closeModal={closeModal}
        vehicalInfoModal={true}
      />

    </SafeAreaView>
  )
}

export default VehicleInfo


const styles = StyleSheet.create({

  backgroundstyle: {
    backgroundColor: colors.backgroundColor2,
  },
  checkBoxOuterView: {
    marginLeft: responsiveWidth(6),
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    alignItems: 'center',

  },
  pullText: {
    fontFamily: fontFamily.robotoMedium,
    color: colors.pullTextColor,
    fontSize: fontSize.lebal1,
  }
})