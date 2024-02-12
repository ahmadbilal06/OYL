import { StyleSheet, Text, View, Image, TouchableOpacity, } from 'react-native'
import React from 'react'
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { colors } from '../../services/utilities/colors';
import { appIcons, appImages } from '../../services/utilities/assets'
import { AppStyles } from '../../services/utilities/appStyle';

const CustomHeader = ({
    headerText,
    headerfontfamily,
    headertextcolor,
    headerfonrsize,
    onPress,
    headerColor,
    marginheadleft,
}) => {


    return (
        <View style={[styles.container, {backgroundColor: headerColor}]}>
            <View style={styles.arrowView}>
                <TouchableOpacity onPress={onPress}>
                    <Image
                        source={appIcons.backArrow}
                        style={AppStyles.backArrowStyle}
                    />
                </TouchableOpacity>
            </View>
            <View style={{marginLeft: marginheadleft}}>
                <Text style={{ fontFamily: headerfontfamily, color: headertextcolor, fontSize: headerfonrsize, }}>{headerText}</Text>
            </View>
        </View>
    )
}

export default CustomHeader

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        //backgroundColor: colors.backgroundColor2,
        height: responsiveHeight(7),
        borderColor: colors.headerBorder,
        borderLeftWidth: responsiveWidth(1.5),
        borderRightWidth: responsiveWidth(1.5),
        borderBottomWidth: responsiveWidth(1),
    },
    arrowView: {
        marginLeft: responsiveWidth(5),
    },
    headertextView: {
        marginLeft: responsiveWidth(20),
    }
})