import React from 'react'
import { StyleSheet, View, Image } from 'react-native'

const Navbar = () => {
  return (
    <View style={styles.navbar}>
      <Image 
          style={[styles.icon, styles.homeIcon].flat()}
          source={require('./home.png')}
      />
      <Image 
          style={[styles.icon, styles.cartIcon].flat()}
          source={require('./cart.png')}
      />
      <Image 
          style={[styles.icon, styles.likedIcon].flat()}
          source={require('./liked.png')}
      />
    </View>
  )
}

const iconWidth = 11;

const styles = StyleSheet.create({
    navbar: {
        width: '100%', height: 90,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'absolute',
        bottom: 0,
        borderTopRightRadius: 50, borderTopLeftRadius: 50,
        backgroundColor: 'white',
    },
    icon: {
      marginTop: 5,
      width: `${iconWidth}%`, height: `${iconWidth*3.5}%`,
    },
    homeIcon: {
      marginLeft: 42.5,
    },
    cartIcon: {
      width: `${iconWidth*1.75}%`, height: `${iconWidth*6}%`,
    },
    likedIcon: {
      marginRight: 42.5,
    }
})

export default Navbar