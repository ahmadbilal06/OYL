import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TouchableWithoutFeedback,
    ImageBackground,
    Image
} from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { appIcons, appImages } from '../../services/utilities/assets';
import { AppStyles } from '../../services/utilities/appStyle';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../services/utilities/colors';
import { fontFamily, fontSize } from '../../services/utilities/fonts';
import CustomButton from '../button';
import Payment from '../../screens/app/payment';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import Feedback from '../../screens/app/feedback';

const CustomModal = ({
    nameValue,
    onChangeName,
    cardNumberValue,
    onChangeCardNumber,
    mmValue,
    onChangemm,
    yyValue,
    onChangeyy,
    cvvValue,
    onChangecvv,
    visible,
    closeModal,
    vehicalInfoModal,
    paymentModal,
    date


}) => {

    const [paymentSuccessModalVisible, setPaymentSuccessModalVisible] = useState(false);

    const navigation = useNavigation();

    const handleVheInfoBottonPress = () => {
        navigation.navigate('Payment')
        closeModal();
        console.log('Back arrow pressed!');
    };

    // const handlepaymentButtonPress = () => {
    //     setPaymentSuccessModalVisible(true);
    //     //navigation.navigate('Payment')
    //     console.log('payment pressed!');
    // };

    const handlepaymentButtonPress = () => {
        closeModal();  // Close the paymentModal
        setPaymentSuccessModalVisible(true);  // Show the paymentSuccessModal
        console.log('payment pressed!');
    };

    const handlepaymentSuccessCloseModal = () => {
        setPaymentSuccessModalVisible(false);
        navigation.navigate('AccountStack', { screen: 'Feedback' });
    };


    if (vehicalInfoModal) {
        return (
            <Modal
                animationType="slide"
                transparent={false}
                visible={visible}
                onRequestClose={closeModal}
            >
                <View style={styles.modalContainer}>
                    <View style={[styles.modalContent, styles.inputShadow]}>
                        <ImageBackground
                            source={appImages.backgroundImage}
                            style={AppStyles.imageBackground}
                            imageStyle={{
                                borderTopLeftRadius: responsiveWidth(12),
                                borderTopRightRadius: responsiveWidth(12),
                            }}
                        >
                            <Image
                                source={appIcons.tikCircle}
                                style={styles.checkImage}
                            />

                            <Text style={styles.successText}>Vehicle has been added{'\n'}successfully! One step{'\n'}left!</Text>

                            <CustomButton
                                buttonTextColor={colors.buttontextcolor1}
                                buttonTextFontfamily={fontFamily.robotoBold}
                                buttonFontSize={fontSize.buttonTextsize}
                                onPress={handleVheInfoBottonPress}
                                colors={colors.buttonGradiant1}
                                buttonText="CONTINUE"
                                marginTop={responsiveHeight(5)}
                                buttonWidth={responsiveWidth(73)}
                                buttonpadding={responsiveHeight(1.7)}
                            //marginbottm={responsiveHeight(1)}
                            />
                        </ImageBackground>
                    </View>
                </View>
            </Modal>
        );

    }



    if (paymentModal) {
        return (
            <View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer1}>
                        <View style={[styles.modalContent1, styles.inputShadow]}>
                            <View style={styles.circle}>
                                <Image
                                    source={appIcons.card}
                                    style={styles.paymentImage}
                                />
                            </View>

                            <Text style={styles.text1}>Add New Details</Text>
                            <Text style={styles.text2}>Please enter your Payment Details</Text>

                            <View style={styles.cardDetailContainer}>
                                <View style={styles.inputTextContainer1}>
                                    <TextInput
                                        placeholder='Card holder name'
                                        value={nameValue}
                                        onChangeText={onChangeName}
                                        placeholderTextColor={colors.placeholdar1}
                                        style={styles.inputName1}
                                    />
                                </View>
                                <View style={styles.inputTextContainer2}>
                                    <TextInput
                                        placeholder='Number of card'
                                        value={cardNumberValue}
                                        onChangeText={onChangeCardNumber}
                                        placeholderTextColor={colors.placeholdar1}
                                        style={styles.inputName1}
                                    />
                                </View>
                                <Text style={styles.validText}>VALID THRU</Text>



                                <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: responsiveWidth(.7) }}>
                                    <View style={styles.inputTextContainer3}>
                                        <TextInput
                                            placeholder='MM'
                                            value={mmValue}
                                            onChangeText={onChangemm}
                                            placeholderTextColor={colors.placeholdar1}
                                            style={styles.inputName2}
                                        />
                                    </View>
                                    <Text style={styles.validText2}>/</Text>
                                    <View style={styles.inputTextContainer3}>
                                        <TextInput
                                            placeholder='YY'
                                            value={yyValue}
                                            onChangeText={onChangeyy}
                                            placeholderTextColor={colors.placeholdar1}
                                            style={styles.inputName2}
                                        />
                                    </View>
                                    <View style={styles.inputTextContainer3}>
                                        <TextInput
                                            placeholder='CVV'
                                            value={cvvValue}
                                            onChangeText={onChangecvv}
                                            placeholderTextColor={colors.placeholdar1}
                                            style={styles.inputName2}
                                        />
                                    </View>
                                </View>



                            </View>


                            <CustomButton
                                buttonTextColor={colors.successText}
                                buttonTextFontfamily={fontFamily.poppinregular}
                                buttonFontSize={fontSize.smallButton}
                                onPress={handlepaymentButtonPress}
                                colors={colors.buttonGradiant4}
                                buttonText="Save"
                                marginTop={responsiveHeight(3)}
                                buttonWidth={responsiveWidth(27)}
                                buttonpadding={responsiveHeight(1)}
                            //marginbottm={responsiveHeight(1)}
                            />



                        </View>
                    </View>
                </Modal>




                <Modal
                    animationType="slide"
                    transparent={false}
                    visible={paymentSuccessModalVisible}
                    onRequestClose={handlepaymentSuccessCloseModal}
                >
                    <View style={styles.modalContainer}>
                        <View style={[styles.modalContent, styles.inputShadow]}>
                            <ImageBackground
                                source={appImages.backgroundImage}
                                style={AppStyles.imageBackground}
                                imageStyle={{
                                    borderTopLeftRadius: responsiveWidth(12),
                                    borderTopRightRadius: responsiveWidth(12),
                                }}
                            >
                                <Image
                                    source={appIcons.tikCircle}
                                    style={styles.checkImage}
                                />

                                <Text style={styles.congratulationText}>Congratulations!</Text>

                                <Text style={styles.successText2}>We will see you on{'\n'}[ {date} ]</Text>

                                <CustomButton
                                    buttonTextColor={colors.buttontextcolor1}
                                    buttonTextFontfamily={fontFamily.robotoBold}
                                    buttonFontSize={fontSize.buttonTextsize}
                                    onPress={handlepaymentSuccessCloseModal}
                                    colors={colors.buttonGradiant1}
                                    buttonText="CONTINUE"
                                    marginTop={responsiveHeight(4)}
                                    buttonWidth={responsiveWidth(73)}
                                    buttonpadding={responsiveHeight(1.7)}
                                //marginbottm={responsiveHeight(1)}
                                />
                            </ImageBackground>
                        </View>
                    </View>
                </Modal>
            </View>




        )
    }
};

export default CustomModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors.backgroundColor2,
    },
    modalContent: {
        backgroundColor: 'white',
        width: '100%',
        height: '50%',
        borderTopLeftRadius: responsiveWidth(12),
        borderTopRightRadius: responsiveWidth(12),
    },
    checkImage: {
        marginTop: responsiveHeight(4),
        alignSelf: 'center',
        width: responsiveWidth(16),
        height: responsiveHeight(11),
        resizeMode: 'contain'
    },
    successText: {
        marginTop: responsiveHeight(4),
        textAlign: 'center',
        color: colors.successText,
        fontFamily: fontFamily.robotoBold,
        fontSize: fontSize.success,
    },
    successText2: {
        marginTop: responsiveHeight(2.5),
        textAlign: 'center',
        color: colors.successText,
        fontFamily: fontFamily.robotoBold,
        fontSize: responsiveFontSize(2.2),
    },
    congratulationText: {
        marginTop: responsiveHeight(3),
        textAlign: 'center',
        color: colors.successText,
        fontFamily: fontFamily.robotoBold,
        fontSize: responsiveFontSize(3.5),
    },
    inputShadow: Platform.OS === 'android'
        ? {
            elevation: 11,
        }
        : {
            shadowColor: '#00000080',
            shadowOffset: {
                width: 0,
                height: -7,
            },
            shadowOpacity: 0.7,
            shadowRadius: 4,
        },




    // paymeny modal
    modalContainer1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000D9',
    },
    modalContent1: {
        backgroundColor: 'white',
        width: '90%',
        height: responsiveHeight(58.5),
        borderRadius: responsiveWidth(3),

    },
    circle: {
        backgroundColor: '#3B3134',
        alignSelf: 'center',
        height: responsiveWidth(22),
        width: responsiveWidth(22),
        borderRadius: responsiveWidth(11),
        marginTop: responsiveHeight(-6.5),
        elevation: 7,
        shadowColor: '#FFFFC875',
        shadowOpacity: 1,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentImage: {
        height: responsiveHeight(12),
        width: responsiveWidth(12),
        resizeMode: 'contain'
    },
    text1: {
        marginTop: responsiveHeight(2),
        textAlign: 'center',
        fontFamily: fontFamily.poppinregular,
        color: colors.pullTextColor,
        fontSize: responsiveFontSize(1.9),
    },
    text2: {
        marginTop: responsiveHeight(2),
        textAlign: 'center',
        fontFamily: fontFamily.poppinmedum,
        color: colors.pullTextColor,
        fontSize: responsiveFontSize(1.5),
    },
    cardDetailContainer: {
        marginTop: responsiveHeight(2.5),
        alignSelf: 'center',
        backgroundColor: 'white',
        height: responsiveHeight(28.5),
        width: responsiveWidth(75),
        elevation: responsiveWidth(5),
        shadowOpacity: 1,
        shadowColor: '#E3185A24',
        borderColor: '#E3185A24',
        borderWidth: responsiveWidth(.1),
        borderRadius: responsiveWidth(4),
        paddingTop: responsiveWidth(5),
    },
    inputTextContainer1: {
        backgroundColor: colors.backgroundColor5,
        alignSelf: 'center',
        width: responsiveWidth(67),
        height: responsiveHeight(4.5),
        borderRadius: responsiveWidth(1.5),
        marginTop: responsiveHeight(1.5),
        paddingLeft: responsiveWidth(1.5),
    },
    inputTextContainer2: {
        backgroundColor: colors.backgroundColor5,
        alignSelf: 'center',
        width: responsiveWidth(67),
        height: responsiveHeight(4.5),
        borderRadius: responsiveWidth(1.5),
        marginTop: responsiveHeight(1.5),
        paddingLeft: responsiveWidth(1.5),
    },
    inputName1: {
        backgroundColor: colors.backgroundColor5,
        width: responsiveWidth(35),
        fontSize: responsiveFontSize(1),
        fontFamily: fontFamily.montserratregular,
    },

    validText: {
        fontSize: responsiveFontSize(1),
        fontFamily: fontFamily.montserratregular,
        color: colors.placeholdar1,
        marginLeft: responsiveWidth(4),
        marginTop: responsiveHeight(1.5),
    },
    validText2: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: fontFamily.montserratregular,
        color: colors.placeholdar1,
        marginLeft: responsiveWidth(3),
        marginTop: responsiveHeight(1.5),
    },
    inputName2: {
        backgroundColor: colors.backgroundColor5,
        width: responsiveWidth(8),
        fontSize: responsiveFontSize(1),
        fontFamily: fontFamily.montserratregular,
    },
    inputTextContainer3: {
        backgroundColor: colors.backgroundColor5,
        alignSelf: 'center',
        width: responsiveWidth(18.5),
        height: responsiveHeight(4.5),
        borderRadius: responsiveWidth(1.5),
        marginTop: responsiveHeight(1.5),
        paddingLeft: responsiveWidth(1.5),
        marginLeft: responsiveWidth(3),
    },

})