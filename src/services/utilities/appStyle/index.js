import { StyleSheet } from 'react-native';
import { fontFamily, fontSize } from '../fonts';
import { colors } from '../colors';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { scale } from 'react-native-size-matters';

export const AppStyles = StyleSheet.create({

    // Splash


    safeAreaStyle: {
        flex: 1,
    },
    imageBackground: {
        flex: 1,
        resizeMode: 'cover',
    },
    logoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logostyle: {
        width: responsiveWidth(60),
        height: responsiveHeight(30),
        alignItems: 'center',
        resizeMode: 'contain',
    },



    // Login
    lodingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      },

    loginLogoContiner: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
      text1: {
        color: colors.textColor1,
        textAlign: 'center',
        fontFamily: fontFamily.robotoMedium,
        fontSize: fontSize.medium,
        marginTop: responsiveHeight(2),
        //marginBottom: responsiveHeight(2),
    },
    creatTextStyle1: {
        color: '#FFFFFF',
        fontFamily: fontFamily.poppinLight,
        fontSize: fontSize.placeHolderfontsize2,
    },
    creatTextStyle2: {
        color: colors.textColor1,
        fontFamily: fontFamily.poppinSemiBold,
        fontSize: fontSize.placeHolderfontsize2,
        fontWeight: 'bold',
    },
creatContainer: {
    marginTop: responsiveHeight(2),
    //marginLeft: responsiveWidth(47),
    flexDirection: 'row',
    alignSelf: 'flex-end',
    paddingRight: responsiveWidth(10),
},

// Creat Account

backArrowStyle: {
    width: responsiveWidth(2.5),
    height: responsiveHeight(2.5),
    resizeMode: 'contain',
},
termsPrivacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: responsiveHeight(2),
    marginLeft: responsiveWidth(5),
},
checkboxView: {
    marginRight: responsiveWidth(5),
},

// Home


detailText: {
    textAlign: 'center',
    fontFamily: fontFamily.robotoBold,
    color: colors.detailTextColor,
    fontSize: fontSize.detailTextsize,
    marginTop: responsiveHeight(2.5),
  },
  detailText2: {
    textAlign: 'center',
    fontFamily: fontFamily.robotoBold,
    color: colors.detailTextColor,
    fontSize: fontSize.detailTextsize,
    marginTop: responsiveHeight(3),
  },
})