import { responsiveFontSize } from "react-native-responsive-dimensions"

const fontFamily = {
  oxygenBold: 'Oxygen-Bold',
  robotoBold: 'Roboto-Bold',
  poppinLight: 'Poppins-Light',
  poppinSemiBold: 'Poppins-SemiBold',
  robotoMedium: 'Roboto-Medium',
  robotoRegular: 'Roboto-Regular',
  poppinmedum: 'Poppins-Medium',
  poppinregular: 'Poppins-Regular',
  montserratmedium: 'Montserrat-Medium',
  montserratregular: 'Montserrat-Regular',

  }
  const fontSize = {

    lablefontsize1 :responsiveFontSize(1.4),
    placeHolderfontsize1 :responsiveFontSize(1.5),

     lablefontsize2 :responsiveFontSize(1.4),
     placeHolderfontsize2 :responsiveFontSize(1.3),

    buttonTextsize: responsiveFontSize(2.3),
    buttonTextsize2: responsiveFontSize(2),
    smallButton: responsiveFontSize(2),

    medium :responsiveFontSize(2),

    accountmanuestextsize: responsiveFontSize(1.7),
    thankutext: responsiveFontSize(4.5),
    headerTextsize: responsiveFontSize(2.5),
    termsTextSize: responsiveFontSize(1.7),
    homeHeaderTextsize: responsiveFontSize(3),
    headerTextsize2: responsiveFontSize(2.2),
    headerTextsize3: responsiveFontSize(1.7),
    detailTextsize: responsiveFontSize(2.4),
    success: responsiveFontSize(2.7),
    payment: responsiveFontSize(1.3),
  }
  
  
  export  {fontFamily,fontSize}