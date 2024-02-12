import React, { useState } from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Alert,
  TextInput,
  Image,
ActivityIndicator,
} from 'react-native';
import HomeHeader from '../../../components/homeHeader';
import { AppStyles } from '../../../services/utilities/appStyle';
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../../services/utilities/colors';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import CustomTextInput from '../../../components/customTextInput';
import { appIcons } from '../../../services/utilities/assets';
import CustomButton from '../../../components/button';
import VehicleInfo from '../vehicleInfo';
import CustomHomeModal from '../../../components/homeModal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';


const Home = ({ navigation }) => {

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = new Date();
  const [loading, setLoading] = useState(false);
  const [selectedBox, setSelectedBox] = useState(null);
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedMonth, setSelectedMonth] = useState('');
  const [hourInput, setHourInput] = useState('');
  const [minutsInput, setMinutsInput] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState('AM');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [oilModalVisiable, setOilModalVisiable] = useState(false);
  const [oilType, setOilType] = useState("");

  const boxes = [];
  const combinedTime = `${hourInput}:${minutsInput} ${selectedPeriod}`;
  const combinedDate = `${selectedDate} ${selectedMonth}`;

  const handleBoxPress = (day, date, month, index) => {
    setSelectedBox(index);
    setSelectedDay(day);
    setSelectedDate(date.toString());
    setSelectedMonth(month);
    console.log(`Selected: ${day}, ${date}, ${month}`);
  };



  for (let i = 0; i < 8; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i); // Corrected date calculation by removing -1
  
    const dayLabel = i === 0 ? 'Today' : i === 1 ? 'Tomorrow' : daysOfWeek[date.getDay()];
    const isSelected = selectedBox === i;
  
    boxes.push(
      <TouchableOpacity
        key={i}
        style={[styles.box, isSelected && styles.selectedBox]}
        onPress={() => handleBoxPress(dayLabel, date.getDate(), date.toLocaleString('default', { month: 'short' }), i)}
      >
        <Text style={styles.boxText}>{dayLabel}</Text>
        <Text style={styles.boxText}>{date.getDate()}</Text>
        <Text style={styles.boxText}>{date.toLocaleString('default', { month: 'short' })}</Text>
      </TouchableOpacity>
    );
  }



  const handleHourChange = (text) => {
    // Validate the input to accept only values between 00 and 12 and one or two-digit input
    const isValid = /^\d{0,2}$/.test(text) && (text === '' || (parseInt(text) >= 0 && parseInt(text) <= 12));

    if (!isValid) {
      Alert.alert('Invalid Input', 'Please enter a valid hour (00-12)', [{ text: 'OK', onPress: () => setHourInput('') }]);
    } else {
      setHourInput(text);
    }
  };


  const handleminutsChange = (text) => {
    // Validate the input to accept only values between 00 and 12 and one or two-digit input
    const isValid = /^\d{0,2}$/.test(text) && (text === '' || (parseInt(text) >= 0 && parseInt(text) <= 60));

    if (!isValid) {
      Alert.alert('Invalid Input', 'Please enter a valid hour (00-60)', [{ text: 'OK', onPress: () => setMinutsInput('') }]);
    } else {
      setMinutsInput(text);
    }
  };


  const handlePeriodChange = (period) => {
    setSelectedPeriod(period);
  };

  const updateSelectedLocation = (location) => {
    setSelectedLocation(location);
  };

  // const handleButtonPresss = () => {
  //   navigation.navigate('VehicleInfo')
  // };

  const closeOilModal = () => {
    setOilModalVisiable(false);
  };
  const openOilModal = () => {
    setOilModalVisiable(true);
  };

  const updateOilType = (type) => {
    setOilType(type);
    setOilModalVisiable(false);
  };







  const handleButtonPress = async () => {
    // Check if all fields are not empty
    if (!selectedDay || !selectedDay || !selectedMonth || !hourInput || !minutsInput || !selectedPeriod || !selectedLocation || !oilType) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    try {
      setLoading(true);
      // Store the user profile data in Firestore
      const userId = auth().currentUser.uid; // Get the current user's ID
      const userEmail = auth().currentUser.email; // Get the current user's Email
      await firestore().collection('Schedule').doc(userId).set({
        userId: userId,
        email: userEmail,
        date: combinedDate,
        time: combinedTime,
        location: selectedLocation,
        oilType: oilType,
      });

      // Move to the next screen (you can customize this navigation logic)
      setLoading(false);
      navigation.navigate('VehicleInfo')
      console.log('User Schedule data stored in Firestore successfully!');
    } catch (error) {
      console.error('Error storing user Schedule data:', error.message);
      Alert.alert('Error', 'Failed to store user Schedule data. Please try again.');
    }
  };






  return (
    <SafeAreaView style={[AppStyles.safeAreaStyle, { backgroundColor: colors.backgroundColor2 }]}>
      <StatusBar hidden={true} />

      <HomeHeader text={'Schedule a Time'} />

      {loading && (
        <View style={AppStyles.lodingContainer}>
          <ActivityIndicator size="large" color="#FFFFC8" />
        </View>
      )}

<ScrollView>

      <Text style={AppStyles.detailText2}>Please Enter Details</Text>

      <ScrollView horizontal style={styles.container} showsHorizontalScrollIndicator={false}>
        {boxes}
      </ScrollView>
      <Text style={styles.enterTime}>Enter Time</Text>

      <View style={styles.timeContainer}>

        <View>
          <View style={styles.timeH}>
            <TextInput
              style={styles.input}
              placeholder='00'
              keyboardType="numeric"
              maxLength={2}
              placeholderTextColor={colors.lebal1}
              onChangeText={handleHourChange}
              value={hourInput}
            />
          </View>
        </View>
        <View>
          <Text style={styles.colon}>:</Text>
        </View>
        <View>
          <View style={styles.timeM}>
            <TextInput
              style={styles.input}
              placeholder='00'
              keyboardType="numeric"
              maxLength={2}
              placeholderTextColor={colors.lebal1}
              onChangeText={handleminutsChange}
              value={minutsInput}
            />
          </View>
        </View>

        <View>
          <View>
            <TouchableOpacity
              onPress={() => handlePeriodChange('AM')}
              style={[styles.amContianer, selectedPeriod === 'AM' && styles.selectedPeriodContainer]}
            >
              <Text style={[styles.ampmText, selectedPeriod === 'AM' && styles.selectedPeriodText]}>AM</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handlePeriodChange('PM')}
              style={[styles.pmContianer, selectedPeriod === 'PM' && styles.selectedPeriodContainer]}
            >
              <Text style={styles.ampmText}>PM</Text>
            </TouchableOpacity>
          </View>
        </View>

      </View>

      <CustomTextInput
        lable='Enter Location'
        lableFontFamily={fontFamily.robotoBold}
        lableColor={colors.lebal1}
        lablefontsize={fontSize.lablefontsize1}
        placeholder="Please enter your address"
        placeholdercolor={colors.placeholdar4}
        placeholderfontfamily={fontFamily.robotoRegular}
        placeholderfontsize={fontSize.placeHolderfontsize1}
        containerColor={colors.backgroundColor4}
        value={selectedLocation}
        onChangelocation={updateSelectedLocation}
        marginTop={responsiveHeight(3)}
        showLocationImage={true}
        editAble={false}
        height={responsiveHeight(8.6)}
        //placeholdertopmargin={responsiveHeight(-.5)}
      />

      <View style={styles.oilContiner}>
        <View>
          <Text style={styles.oilText}>Oil type</Text>
          <Text style={styles.oilText2}>Please select Oil type from here</Text>
          <Text style={styles.oilText3}>(All Oil High Quality Synthetic)</Text>
        </View>
        <View style={styles.eyeContainer}>
          <TouchableOpacity onPress={openOilModal}>
            <Image
              source={appIcons.downArrow}
              style={styles.eyeIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <CustomHomeModal
        visible={oilModalVisiable}
        closeModal={closeOilModal}
        oil={true}
        updateOilType={updateOilType}
      />

      <CustomButton
        buttonTextColor={colors.buttontextcolor1}
        buttonTextFontfamily={fontFamily.robotoBold}
        buttonFontSize={fontSize.buttonTextsize2}
        onPress={handleButtonPress}
        colors={colors.buttonGradiant5}
        buttonText="Lock it in!"
        marginTop={responsiveHeight(3.5)}
        buttonWidth={responsiveWidth(70)}
        buttonpadding={responsiveHeight(1.6)}
        marginbottm={responsiveHeight(3)}
        shedowcol={'#00000029'}
      />

</ScrollView>

    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: responsiveWidth(3),
    //height: responsiveHeight(5),
    marginTop: responsiveHeight(2),
  },
  box: {
    marginVertical: responsiveHeight(.5),
    width: responsiveWidth(25),
    height: responsiveWidth(23),
    marginHorizontal: responsiveWidth(1.5),
    backgroundColor: colors.backgroundColor2,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(3),
    elevation: responsiveWidth(1),
  },
  selectedBox: {
    backgroundColor: '#FFFFC8', // Change to the color you want for selected boxes
  },
  boxText: {
    color: colors.lebal1,
    fontFamily: fontFamily.robotoBold,
    marginBottom: responsiveHeight(.5),
  },
  timeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: responsiveWidth(4),
  },
  timeH: {
    backgroundColor: colors.backgroundColor2,
    width: responsiveWidth(25),
    height: responsiveWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(3),
    elevation: responsiveWidth(1),
  },
  timeM: {
    backgroundColor: '#FFFFC8',
    width: responsiveWidth(25),
    height: responsiveWidth(23),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: responsiveWidth(3),
    elevation: responsiveWidth(1),
  },
  input: {
    fontFamily: fontFamily.robotoBold,
    color: colors.lebal1,
    fontSize: responsiveFontSize(5),
    marginLeft: responsiveWidth(-.5),
  },
  colon: {
    fontFamily: fontFamily.robotoBold,
    color: colors.lebal1,
    fontSize: responsiveFontSize(6.5),
  },
  ampmText: {
    textAlign: 'center',
    color: colors.lebal1,
    fontFamily: fontFamily.robotoRegular,
    fontSize: responsiveFontSize(2),
    fontWeight: 'bold',
    //padding: responsiveWidth(2),
  },
  amContianer: {
    backgroundColor: colors.backgroundColor2,
    elevation: responsiveWidth(1),
    width: responsiveWidth(11),
    height: responsiveWidth(11.5),
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: responsiveWidth(.3),
    borderColor: '#000000',
    borderTopLeftRadius: responsiveWidth(2.5),
    borderTopRightRadius: responsiveWidth(2.5),
  },
  pmContianer: {
    backgroundColor: colors.backgroundColor2,
    elevation: responsiveWidth(1),
    width: responsiveWidth(11),
    height: responsiveWidth(11.5),
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: responsiveWidth(.3),
    borderColor: '#000000',
    borderBottomLeftRadius: responsiveWidth(2.5),
    borderBottomRightRadius: responsiveWidth(2.5),

  },
  selectedPeriodContainer: {
    backgroundColor: '#FFFFC8', // Change to the color you want for selected period
  },
  enterTime: {
    fontFamily: fontFamily.robotoBold,
    color: colors.lebal1,
    fontSize: responsiveFontSize(1.7),
    marginLeft: responsiveWidth(7),
    //marginBottom: responsiveHeight(3),
  },
  oilContiner: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: responsiveHeight(3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: colors.backgroundColor5,
    width: responsiveWidth(90),
    paddingHorizontal: responsiveWidth(4),
    paddingVertical: responsiveWidth(1.5),
    borderRadius: responsiveWidth(4),
    elevation: responsiveWidth(.7),
  },
  eyeIcon: {
    height: responsiveHeight(5.5),
    width: responsiveWidth(5.5),
    resizeMode: 'contain',
  },
  eyeContainer: {
    //marginLeft: responsiveWidth(35),
    
  },
  oilText: {
    //padding: responsiveWidth(.5),
    fontFamily: fontFamily.robotoBold,
    color: colors.lebal1,
    fontSize: responsiveFontSize(1.4),
  },
  oilText2: {
    marginTop: responsiveHeight(.5),
    fontFamily: fontFamily.robotoBold,
    color: colors.oiltext2,
    fontSize: responsiveFontSize(1.4),
  },
  oilText3: {
    fontFamily: fontFamily.robotoBold,
    color: colors.oiltext2,
    fontSize: responsiveFontSize(1.4),
    opacity: .7,
  },
});
