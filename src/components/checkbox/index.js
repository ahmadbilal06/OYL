import React, { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
const CustomCheckbox = ({ checkedImage, uncheckedImage, isChecked, onPress, box }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Image source={isChecked ? checkedImage : uncheckedImage} style={styles.checkboxImage} />
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  container: {
    paddingRight: responsiveWidth(3),
  },
  checkboxImage: {
    width: responsiveWidth(6), // Set your desired width
    height: responsiveWidth(6), // Set your desired height
    resizeMode: 'contain',
  },
});

export default CustomCheckbox;
