import React from 'react';
import { TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

const CustomButton = ({
   onPress, 
   colors, 
   buttonText,
   buttonTextColor,
   buttonTextFontfamily,
   buttonFontSize,
   marginTop,
   buttonWidth,
   buttonpadding,
   marginbottm,
   shedow,
  }) => {
  return (
<View style={{width: buttonWidth, alignSelf: 'center'}}>
    <TouchableOpacity onPress={onPress} style={{ marginTop, alignItems:'center', marginBottom: marginbottm}}>
    
      <LinearGradient colors={colors}
       start={{ x: 0, y: 0.5 }}  // Start from the left
       end={{ x: 1, y: 0.5 }}    // End at the right
       style={[styles.button, styles.shadow, {width: buttonWidth, padding: buttonpadding, shadowColor: shedow}]}>
        <Text style={{color: buttonTextColor, fontFamily: buttonTextFontfamily, fontSize : buttonFontSize}}>{buttonText}</Text>
      </LinearGradient>
      
    </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: responsiveWidth(7),
    alignItems: 'center',
  },
  shadow: {
    shadowColor: '#FFFFC8',
    shadowOffset: {
      width: 0,
      height: responsiveHeight(7),
    },
    shadowOpacity: 0.6,
    shadowRadius: responsiveHeight(2),
    elevation: responsiveHeight(.5),
  },
});

export default CustomButton;
