import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { appImages } from '../../services/utilities/assets';
import { AppStyles } from '../../services/utilities/appStyle';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../services/utilities/colors';
import { fontFamily, fontSize } from '../../services/utilities/fonts';

const HomeHeader = ({text}) => {
    return (
        <View style={styles.container}>
            <ImageBackground
            source={appImages.backgroundImage}
            style={AppStyles.imageBackground}
            imageStyle={{
                borderBottomLeftRadius: responsiveWidth(12),
                borderBottomRightRadius: responsiveWidth(12)
            }}
            > 
                <Text style={styles.textstyle}>{text}</Text>
            </ImageBackground>
        </View>

    )
}

export default HomeHeader

const styles = StyleSheet.create({

    container: {
        height: responsiveHeight(16),
        width: responsiveWidth(100),
    },
    textstyle: {
        marginTop: responsiveHeight(5),
        textAlign: 'center',
        color: colors.homeHeaderText,
        fontFamily: fontFamily.robotoRegular,
        fontSize: fontSize.homeHeaderTextsize,
    },
})