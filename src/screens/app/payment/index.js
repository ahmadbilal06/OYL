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
} from 'react-native'
import React, { useState, useEffect } from 'react';
import { colors } from '../../../services/utilities/colors';
import { appIcons, appImages } from '../../../services/utilities/assets';
import { AppStyles } from '../../../services/utilities/appStyle';
import { fontFamily, fontSize } from '../../../services/utilities/fonts';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import CustomHeader from '../../../components/header';
import CustomTextInput from '../../../components/customTextInput';
import CustomCheckbox from '../../../components/checkbox';
import CustomButton from '../../../components/button';
import VehicleInfo from '../vehicleInfo';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import CustomModal from '../../../components/modal';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';

const Payment = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false);
  const [cardHolderName, setCardHolderName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [mm, setmm] = useState("");
  const [yy, setyy] = useState("");
  const [cvv, setcvv] = useState("");
  const [combinedDate, setCombinedDate] = useState('');

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleBackArrowPress = () => {
    // Your custom logic when the button is pressed
    navigation.navigate('VehicleInfo')
    console.log('Button Pressed!');
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Query Firestore to fetch the document containing combinedDate
        const userId = auth().currentUser.uid;
        const documentSnapshot = await firestore().collection('Schedule').doc(userId).get();
        const data = documentSnapshot.data();
        // Extract combinedDate from the document data
        const combinedDateFromDB = data?.date;
        setCombinedDate(combinedDateFromDB);
      } catch (error) {
        console.error('Error fetching combinedDate:', error.message);
      }
    };

    fetchData();
  }, []);


  return (
    <SafeAreaView style={AppStyles.safeAreaStyle}>
      <ImageBackground
        source={appImages.backgroundImage}
        style={AppStyles.imageBackground}
      >
        <StatusBar
          hidden={false}
          backgroundColor={colors.backgroundColor2}
          barStyle={'dark-content'}
        />

        <CustomHeader
          headerColor={colors.backgroundColor2}
          headerText="Select Price & Payment Method"
          headerfontfamily={fontFamily.robotoBold}
          headertextcolor={colors.headersTextColor}
          headerfonrsize={fontSize.headerTextsize3}
          onPress={handleBackArrowPress}
          marginheadleft={responsiveWidth(8.5)}
        />

        <View style={[styles.paymentContainer, styles.shadow]}>
          <View style={styles.upperContainer} />

          <Text style={styles.textSmall}>YOUR OYL AND FYLTER CHANGE WILL BE</Text>

          <View style={styles.PriceView}>
            <Text style={styles.dollar}>$</Text>
            <Text style={styles.amount}>87</Text>
          </View>

          <Text style={styles.textSmallbottom}>THIS WILL HAVE YOU ROLLIN FOR 10,000 MILES -{'\n'}SHOOT WE'LL EVEN TOP OFF YOUR WASHER FLUID{'\n'}AND AIR UP YOUR TIRES</Text>
          <View style={styles.bottomContainer} />
        </View>

        <Text style={styles.paymentMathodText}>Payment Methods</Text>

        <View style={styles.paymentrow}>
          <TouchableWithoutFeedback onPress={openModal}>
            <View style={[styles.PaymentImagebackground, styles.shadow]}>
              <Image
                source={appImages.str}
                style={styles.imageStyle}
              />
            </View>
          </TouchableWithoutFeedback>
          <View style={[styles.PaymentImagebackground, styles.shadow]}>
            <Image
              source={appImages.Apa}
              style={styles.imageStyle}
            />
          </View>
          <View style={[styles.PaymentImagebackground, styles.shadow]}>
            <Image
              source={appImages.pay}
              style={styles.imageStyle}
            />
          </View>
        </View>

        <View style={styles.paymentrow}>
          <View style={[styles.PaymentImagebackground, styles.shadow]}>
            <Image
              source={appImages.bit}
              style={styles.imageStyle}
            />
          </View>
          <View style={[styles.PaymentImagebackground, styles.shadow]}>
            <Image
              source={appImages.aff}
              style={styles.imageStyle}
            />
          </View>
          <View style={[styles.PaymentImagebackground, styles.shadow]}>
            <Image
              source={appImages.kla}
              style={styles.imageStyle}
            />
          </View>
        </View>


        <CustomModal
          visible={modalVisible}
          closeModal={closeModal}
          paymentModal={true}
          nameValue={cardHolderName}
          onChangeName={(text) => setCardHolderName(text)}
          cardNumberValue={cardNumber}
          onChangeCardNumber={(text) => setCardNumber(text)}
          mmValue={mm}
          onChangemm={(text) => setmm(text)}
          yyValue={yy}
          onChangeyy={(text) => setyy(text)}
          cvvValue={cvv}
          onChangecvv={(text) => setcvv(text)}
          date={combinedDate}
        />


        <ScrollView>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  )
}

export default Payment

const styles = StyleSheet.create({
  paymentContainer: {
    marginTop: responsiveHeight(3),
    alignSelf: 'center',
    backgroundColor: colors.backgroundColor2,
    // height: responsiveHeight(40),
    width: responsiveWidth(77),
    borderRadius: responsiveWidth(7),
  },
  shadow: {
    shadowColor: '#FFFFC88F',
    shadowOffset: {
      width: 0,
      height: responsiveHeight(5),
    },
    shadowOpacity: 0.7,
    shadowRadius: responsiveHeight(2),
    elevation: responsiveHeight(5),
  },
  upperContainer: {
    backgroundColor: colors.backgroundColor3,
    height: responsiveHeight(6),
    width: responsiveWidth(77),
    borderTopRightRadius: responsiveWidth(7),
    borderTopLeftRadius: responsiveWidth(7),
  },
  bottomContainer: {
    height: responsiveHeight(6),
    width: responsiveWidth(77),
    backgroundColor: colors.backgroundColor3,
    borderBottomRightRadius: responsiveWidth(7),
    borderBottomLeftRadius: responsiveWidth(7),
  },
  textSmall: {
    marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
    textAlign: 'center',
    fontFamily: fontFamily.robotoRegular,
    color: colors.pullTextColor,
    fontSize: fontSize.payment,
  },
  textSmallbottom: {
    //marginTop: responsiveHeight(1.5),
    marginBottom: responsiveHeight(1.5),
    textAlign: 'center',
    fontFamily: fontFamily.robotoRegular,
    color: colors.pullTextColor,
    fontSize: fontSize.payment,
  },
  PriceView: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  amount: {
    fontFamily: fontFamily.robotoBold,
    color: colors.pullTextColor,
    fontSize: responsiveFontSize(11),
  },
  dollar: {
    fontFamily: fontFamily.robotoBold,
    color: colors.pullTextColor,
    fontSize: responsiveFontSize(6),
  },
  paymentMathodText: {
    marginTop: responsiveHeight(2),
    marginBottom: responsiveHeight(1.5),
    fontFamily: fontFamily.robotoRegular,
    color: colors.paymentMethodText,
    fontSize: responsiveFontSize(1.9),
    textAlign: 'center',
  },
  paymentrow: {
    marginTop: responsiveHeight(2),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  PaymentImagebackground: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.backgroundColor2,
    height: responsiveHeight(12),
    width: responsiveWidth(22),
    borderRadius: responsiveWidth(4),
  },
  imageStyle: {
    height: responsiveHeight(13),
    width: responsiveWidth(20),
    resizeMode: 'center',
  }

})