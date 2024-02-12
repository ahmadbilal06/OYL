import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { fontFamily, fontSize } from '../../services/utilities/fonts'
import { colors } from '../../services/utilities/colors'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'

const CustomText = () => {
  return (
    <View style={styles.policycontainer}>
    <Text style={styles.policytxt}>Integer at faucibus urna.Nullam condimentum leo
      id elit sagittis auctor. Curabitur elementum nunc a
      leo imperdiet, nec elementum diam elementum.
      Etiam elementum euismod commodo. Proin eleifend eget quam ut efficitur.
      Mauris a accumsan mauris.{'\n'}{'\n'}
      Phasellus egestas et risus sit amet hendrerit.
      Nulla facilisi. Cras urna sem, vulputate sed condimentum a,
      posuere vel enim.{'\n'}{'\n'}Integer at faucibus urna. Nullam
      condimentum leo id elit sagittis auctor. Curabitur elementum nunc a
      leo imperdiet, nec elementum diam elementum. Etiam elementum euismod
      commodo.{'\n'}{'\n'}Proin eleifend eget quam ut efficitur. Mauris a
      accumsan mauris. Phasellus egestas et risus sit amet hendrerit. Nulla facilisi. Cras urna sem,
      vulputate sed condimentum a, posuere vel enim.{'\n'}{'\n'}
      Integer at faucibus urna. Nullam condimentum leo id elit sagittis
      auctor. Curabitur elementum nunc a leo imperdiet, nec elementum diam
      elementum. Etiam elementum euismod commodo. Proin eleifend eget quam
      ut efficitur. Mauris a accumsan mauris.{'\n'}{'\n'}Phasellus egestas
      et risus sit amet hendrerit. Nulla facilisi. Cras urna sem, vulputate sed condimentum a, posuere vel enim. </Text>
  </View>
  )
}

export default CustomText

const styles = StyleSheet.create({
    policycontainer: {
        height: responsiveHeight(100),
        marginLeft: responsiveWidth(2.5),
        width: responsiveWidth(95),
        alignItems: 'center',
        marginTop: responsiveHeight(4)
      },
      policytxt: {
        color: colors.termsText,
        fontFamily: fontFamily.robotoRegular,
        fontSize: fontSize.termsTextSize,
      },
})