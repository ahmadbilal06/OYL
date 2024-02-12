import {
    Modal,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    TextInput,
    TouchableWithoutFeedback,
} from 'react-native';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { appIcons, appImages } from '../../services/utilities/assets';
import { AppStyles } from '../../services/utilities/appStyle';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../services/utilities/colors';
import { fontFamily, fontSize } from '../../services/utilities/fonts';
import CustomButton from '../button';


const CustomHomeModal = ({
    visible,
    closeModal,
    location,
    locationValue,
    onChangelocation,
    updateOilType,
    oil,
}) => {


    const navigation = useNavigation();




    if (location) {
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
                                    source={appIcons.location1}
                                    style={styles.paymentImage}
                                />
                            </View>

                            <Text style={styles.text1}>Add Location</Text>

                            <View style={styles.inputTextContainer1}>
                                <TextInput
                                    placeholder='Search here'
                                    value={locationValue}
                                    onChangeText={(text) => {
                                        onChangelocation(text); // Update the selectedLocation in the parent component
                                    }}
                                    placeholderTextColor={colors.placeholdar1}
                                    style={styles.inputName1}
                                />
                            </View>


                            <CustomButton
                                buttonTextColor={colors.successText}
                                buttonTextFontfamily={fontFamily.poppinregular}
                                buttonFontSize={fontSize.smallButton}
                                onPress={closeModal}
                                colors={colors.buttonGradiant4}
                                buttonText="Submit"
                                marginTop={responsiveHeight(3.5)}
                                buttonWidth={responsiveWidth(27)}
                                buttonpadding={responsiveHeight(1)}
                            //marginbottm={responsiveHeight(1)}
                            />

                        </View>
                    </View>
                </Modal>

            </View>




        )
    }




    if (oil) {
        return (
            <View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={visible}
                    onRequestClose={closeModal}
                >
                    <View style={styles.modalContainer1}>
                        <View style={[styles.modalContent2, styles.inputShadow]}>

                            <View style={styles.oilContiner}>
                                <View>
                                    <Text style={styles.oilText}>Oil type</Text>
                                    <Text style={styles.oilText2}>Please select Oil type from here</Text>
                                    <Text style={styles.oilText3}>(All Oil High Quality Synthetic)</Text>
                                </View>
                                <View style={styles.eyeContainer}>
                                    <Image
                                        source={appIcons.downArrow}
                                        style={styles.eyeIcon}
                                    />
                                </View>
                            </View>
                            <TouchableWithoutFeedback onPress={() => updateOilType('Manufacturers Recommendation')}>
                                <View style={styles.upperContainer}>
                                    <Text style={styles.text2}>Manufacturers Recommendation</Text>
                                </View>
                            </TouchableWithoutFeedback>
                            <View style={styles.middleContainer}>
                                <Text style={styles.text3}>------- OR -------</Text>
                            </View>
                            <TouchableWithoutFeedback onPress={() => updateOilType('0W-20')}>
                            <View style={styles.middleContainer}>
                                <Text style={styles.text2}>0W-20</Text>
                            </View>
                            </TouchableWithoutFeedback >
                            <TouchableWithoutFeedback onPress={() => updateOilType('5W-20')}>
                            <View style={styles.middleContainer}>
                                <Text style={styles.text2}>5W-20</Text>
                            </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => updateOilType('5W-30')}>
                            <View style={styles.middleContainer}>
                                <Text style={styles.text2}>5W-30</Text>
                            </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => updateOilType('10W-30')}>
                            <View style={styles.middleContainer}>
                                <Text style={styles.text2}>10W-30</Text>
                            </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => updateOilType('10W-40')}>
                            <View style={styles.lowerContainer}>
                                <Text style={styles.text2}>10W-40</Text>
                            </View>
                            </TouchableWithoutFeedback>

                        </View>
                    </View>
                </Modal>

            </View>




        )
    }
};

export default CustomHomeModal

const styles = StyleSheet.create({
    modalContainer1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000D9',
    },
    modalContent1: {
        backgroundColor: 'white',
        width: responsiveWidth(90),
        height: responsiveHeight(33),
        borderRadius: responsiveWidth(3),
    },
    circle: {
        backgroundColor: '#000000',
        alignSelf: 'center',
        height: responsiveWidth(22),
        width: responsiveWidth(22),
        borderRadius: responsiveWidth(11),
        marginTop: responsiveHeight(-6.5),
        // elevation: 7,
        // shadowColor: '#FFFFC875',
        // shadowOpacity: 1,
        // shadowOffset: {
        //     width: 0,
        //     height: 5,
        // },
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    paymentImage: {
        height: responsiveHeight(9),
        width: responsiveWidth(9),
        resizeMode: 'contain'
    },
    text1: {
        marginTop: responsiveHeight(2.5),
        textAlign: 'center',
        fontFamily: fontFamily.poppinmedum,
        color: colors.pullTextColor,
        fontSize: responsiveFontSize(2.2),
        fontWeight: 'bold',
    },
    inputTextContainer1: {
        backgroundColor: colors.backgroundColor5,
        alignSelf: 'center',
        width: responsiveWidth(80),
        height: responsiveHeight(6.5),
        borderRadius: responsiveWidth(1.5),
        marginTop: responsiveHeight(2.5),
        paddingLeft: responsiveWidth(1.5),
    },
    inputName1: {
        color: colors.placeholdar5,
        width: responsiveWidth(35),
        fontSize: responsiveFontSize(1.6),
        fontFamily: fontFamily.poppinLight,
    },


    //Oil modal

    modalContent2: {
        backgroundColor: 'white',
        width: responsiveWidth(90),
        //height: responsiveHeight(58.5),
        borderRadius: responsiveWidth(3),
    },
    oilContiner: {
        alignSelf: 'center',
        alignItems: 'center',
        marginTop: responsiveHeight(1.5),
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: colors.backgroundColor2,
        width: responsiveWidth(85),
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveWidth(1.5),
        borderRadius: responsiveWidth(4),
        elevation: responsiveWidth(.7),
        //marginTop: responsiveHeight(-.5),
    },
    eyeIcon: {
        height: responsiveHeight(5.5),
        width: responsiveWidth(5.5),
        resizeMode: 'contain',
    },
    eyeContainer: {
        //marginLeft: responsiveWidth(31),
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

    upperContainer: {
        alignSelf: 'center',
        marginTop: responsiveHeight(1.5),
        backgroundColor: colors.backgroundColor2,
        width: responsiveWidth(85),
        borderTopRightRadius: responsiveWidth(3),
        borderTopLeftRadius: responsiveWidth(3),
        elevation: responsiveWidth(.7),
        padding: responsiveHeight(1.5),
    },

    middleContainer: {
        alignSelf: 'center',
        backgroundColor: colors.backgroundColor2,
        width: responsiveWidth(85),
        elevation: responsiveWidth(.7),
        padding: responsiveHeight(1.5),
        borderTopColor: '#D8D8D8',
        borderTopWidth: responsiveHeight(.2),
    },
    lowerContainer: {
        alignSelf: 'center',
        backgroundColor: colors.backgroundColor2,
        borderBottomLeftRadius: responsiveWidth(3),
        borderBottomRightRadius: responsiveWidth(3),
        width: responsiveWidth(85),
        elevation: responsiveWidth(.7),
        padding: responsiveHeight(1.5),
        borderTopColor: '#D8D8D8',
        borderTopWidth: responsiveHeight(.2),
        marginBottom: responsiveHeight(1.5),
    },
    text2: {
        marginLeft: responsiveWidth(2),
        color: colors.textColor2,
        fontFamily: fontFamily.robotoRegular,
        fontSize: responsiveFontSize(2)
    },
    text3: {
        textAlign: 'center',
        color: colors.textColor2,
        fontFamily: fontFamily.robotoRegular,
        fontSize: responsiveFontSize(2)
    }

})