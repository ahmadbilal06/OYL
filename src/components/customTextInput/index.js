import React, { useState } from 'react';
import { Text, TextInput, View, StyleSheet, TouchableOpacity, Image, Platform } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../services/utilities/colors';
import { appIcons } from '../../services/utilities/assets';
import DateTimePicker from '@react-native-community/datetimepicker';
import CustomHomeModal from '../homeModal';

const CustomTextInput = ({
  lable,
  labelFontFamily,
  lableColor,
  placeholder,
  placeholdercolor,
  placeholderFontFamily,
  value,
  onChangeText,
  marginTop,
  securetextEntry,
  showCalendarImage,
  lablefontsize,
  placeholderfontsize,
  editable,
  height,
  placeholdertopmargin,
  containerColor,
  showLocationImage,
  onChangelocation,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(securetextEntry);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isDatePickerVisible, setDatePickerVisible] = useState(false);
  const [isLocationModalVisiable, setLocationModalVisiable] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
  };

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const handleDateConfirm = (event, date) => {
    if (date !== undefined && date !== null) {
      setSelectedDate(date);
      onChangeText(formatDate(date)); // Pass the formatted date as text
    }
    setDatePickerVisible(false);
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1; // Month is 0-based
    const year = date.getFullYear();

    return `${day} / ${month} / ${year}`;
  };

  const closeLocatioModal = () => {
    setLocationModalVisiable(false);
  };
  const openLocatioModal = () => {
    setLocationModalVisiable(true);
  };

  return (
    <View style={[styles.container, styles.inputShadow, { marginTop, backgroundColor: containerColor }]}>
      <View style={{height: height}}>
        <Text style={[styles.labelStyle, { fontFamily: labelFontFamily, color: lableColor, fontSize: lablefontsize }]}>{lable}</Text>
        <TextInput
          style={[styles.inputStyle, { fontFamily: placeholderFontFamily, fontSize: placeholderfontsize, marginTop: placeholdertopmargin }]}
          placeholder={placeholder}
          placeholderTextColor={placeholdercolor}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isPasswordVisible}
          editable={editable}
        />
      </View>
      <View>
        {securetextEntry && (
          <View style={styles.eyeContainer}>
            <TouchableOpacity onPress={togglePasswordVisibility}>
              <Image source={!isPasswordVisible ? appIcons.openEye : appIcons.closeEye} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        )}
        {showCalendarImage && (
          <View style={styles.eyeContainer}>
            <TouchableOpacity onPress={showDatePicker}>
              <Image source={appIcons.calender} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        )}
         {showLocationImage && (
          <View style={styles.eyeContainer}>
            <TouchableOpacity onPress={openLocatioModal}>
              <Image source={appIcons.location} style={styles.eyeIcon} />
            </TouchableOpacity>
          </View>
        )}
      </View>
      {isDatePickerVisible && (
        <DateTimePicker
          value={selectedDate}
          mode="date"
          display="spinner"
          onChange={handleDateConfirm}
          format="day month year"
        />
      )}

{isLocationModalVisiable && (
  <CustomHomeModal
  visible={isLocationModalVisiable}
  closeModal={closeLocatioModal}
  location={true}
  locationValue={value}
  onChangelocation={onChangelocation}
/>
      )}

    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container0: {
    flexDirection: 'row',
    //justifyContent: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.inputContainerColor,
    //height: responsiveHeight(8.5),
    width: responsiveWidth(90),
    borderRadius: responsiveWidth(3.5),
    marginLeft: responsiveWidth(5),
  },
  labelStyle: {
    marginTop: responsiveHeight(0.7),
    marginLeft: responsiveWidth(3),
  },
  inputStyle: {
    marginLeft: responsiveWidth(2.5),
    width: responsiveWidth(60),
    //height: responsiveHeight(7)
    //marginTop: -responsiveHeight(1),
  },
  eyeIcon: {
    height: responsiveHeight(5),
    width: responsiveWidth(5),
    resizeMode: 'contain',
  },
  eyeContainer: {
    marginLeft: responsiveWidth(19),
  },

  inputShadow: Platform.OS === 'android'
    ? {
      elevation: responsiveWidth(1),
    }
    : {
      shadowColor: 'rgb(255,255,233)', // Change this to a valid shadow color
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
});
