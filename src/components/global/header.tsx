import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
//import { BACK_ARROW_URL, BACK_ARROW_PATH } from '../../constants/paths';

const Header = () => {
    //const backArrowPath = `${ICON_PATH}/back-arrow.svg`
    //tintColor: 'blue', 
    return (
        <View style={styles.header}>
            <Image 
                style={styles.backArrow}
                source={require('./back-arrow.png')}
            />
            <Text style={styles.title}>Tienda</Text>
            <Image 
                style={styles.hamburger}
                source={require('./hamburger.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        marginLeft: 15, marginRight: 20,
        marginTop: 50,
        minHeight: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    backArrow: {
        width: 30, height: 30,
    },
    title: {
        fontSize: 30,
        textAlign: 'center',
        fontWeight: 'bold'
    },
    hamburger: {
        width: 37.5, height: 37.5,
    }
})

export default Header;