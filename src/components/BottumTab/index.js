import { Image, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { appIcons } from '../../services/utilities/assets'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import { colors } from '../../services/utilities/colors'
import { fontFamily } from '../../services/utilities/fonts';
import { useNavigation } from '@react-navigation/native';
import HomeStack from '../../navigation/appNavigation/homeStack'
import Home from '../../screens/app/home'

const CustomBottumTab = () => {

    const navigation = useNavigation();

    const navigateToHomeScreen = () => {
      // Navigate to the 'Home' screen
      navigation.navigate('HomeStack', { screen: 'Home' });
    };

    return (
        <View>
            <View style={styles.line}/>
            <View style={styles.container}>
                <TouchableWithoutFeedback onPress={navigateToHomeScreen}>
                <View style={styles.container1}>
                    <Image
                        source={appIcons.yhome}
                        style={styles.icon}
                    />
                    <Text style={styles.textStyle}>Home</Text>
                </View>
                </TouchableWithoutFeedback>
                <View style={styles.container1}>
                    <Image
                        source={appIcons.yprofile}
                        style={styles.icon}
                    />
                    <Text style={styles.textStyle}>Account</Text>
                </View>
            </View>
        </View>

    )
}

export default CustomBottumTab

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
    },
    container1: {
        alignItems: 'center',
    },
    icon: {
        width: responsiveWidth(7),
        height: responsiveHeight(4),
        resizeMode: 'stretch',
    },
    textStyle: {
        color: colors.textColor1,
        fontFamily: fontFamily.robotoRegular,
        fontSize: responsiveFontSize(1.5),
        
    },
    line:{
        backgroundColor: colors.backgroundColor3,
        height: responsiveHeight(.4),
        marginTop: responsiveHeight(4),
        width: responsiveWidth(13),
        marginLeft: responsiveWidth(61.5),
        marginBottom: responsiveHeight(.5),
    }
})