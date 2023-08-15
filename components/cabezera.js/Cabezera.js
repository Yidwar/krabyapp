import {StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
export default function Cabezera({ navigation, cartCount }){
    //const [menu, setMenu] = useState([]);
   // const [cartClicked, setCartClicked] = useState(false);
    //const [cartCount, setCartCount] = useState([0]);
    //const [cartCountGlobal, setCartCountGlobal] = useState(0);
    //const [cartProducts, setCartProducts] = useState([]);
  
  
    const goToSeventeen = () => {
        navigation.navigate('Diecisiete', { cartCount });
      }
    return (
        <View style={styles.header}>
        
        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <View style={styles.cartContainer}>
            <Icon name="cart-outline" size={30} color="white" style={styles.icon} onPress={goToSeventeen} />
            {cartCount > 0 && <View style={styles.cartBadge}><Text style={styles.cartBadgeText}>{cartCount}</Text></View>}
          </View>

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
        </View>
    </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    header: {
      backgroundColor: '#fc4b08',
      paddingTop: StatusBar.currentHeight,
      paddingHorizontal: 10,
      paddingBottom: 10,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: 10,
    },
    iconsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  
    icon: {
      marginRight: 10,
    },
    icon2: {
      marginRight: 30,
    },
    headerText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    logo: {
      flex: 1,
      width: 30,
      height: 30,
      resizeMode: 'contain',
      alignItems: 'center',
    },
  
    imagen: {
      width: '100%',
      height: '50%',
      resizeMode: 'contain',
    },
    imagen1: {
      width: '100%',
      height: '15%',
      resizeMode: 'contain',
    },
    imagen2: {
      width: '100%',
      height: '60%',
      resizeMode: 'contain',
    },
  
    bucancelar: {
      backgroundColor: 'orange',
      borderRadius: 30,
      padding: 10,
      marginTop: -50,
      width: '80%',
      marginLeft: 40,
  
    },
    butextcancelar: {
      color: 'white',
      fontSize: 16,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    subTitle: {
      fontSize: 14,
      color: '#9DBA0C',
      marginLeft: 20,
    },
    imagenmikeContainer: {
      width: '100%',
      height: 200, // Ajusta la altura deseada para la imagen
    },
    menuInfoContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
    },
    menuCard: {
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      width: '80%',
      alignItems: 'center',
    },
    menuImage: {
      width: '100%',
      height: 100, // Ajusta la altura deseada para la imagen
      resizeMode: 'cover',
      marginBottom: 10,
    },
    menuName: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 5,
    },
    menuFooter: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },
    menuPrice: {
      fontSize: 16,
    },
    menuCartIcon: {
      marginLeft: 10,
    },
    cartContainer: {
      position: 'relative',
    },
    cartBadge: {
      position: 'absolute',
      top: -8,
      right: -8,
      backgroundColor: 'black',
      borderRadius: 12,
      width: 24,
      height: 24,
      justifyContent: 'center',
      alignItems: 'center',
    },
    cartBadgeText: {
      color: 'white',
      fontWeight: 'bold',
    },
  
    menuContainer: {
      paddingHorizontal: 10,
    },
    menuItem: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#f2f2f2',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'gray',
      padding: 10,
      marginVertical: 5,
    },
    menuItemImage: {
      width: 80,
      height: 80,
      borderRadius: 10,
      marginRight: 10,
    },
    menuItemInfo: {
      flex: 1,
      marginRight: 10,
    },
    menuItemName: {
      fontSize: 18,
      fontWeight: 'bold',
    },
    menuItemPrice: {
      fontSize: 16,
    },
    menuItemCart: {
      justifyContent: 'center',
      alignItems: 'center',
      paddingHorizontal: 10,
    },
    productContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 16,
    },
    productImage: {
      width: 120,
      height: 80,
      borderRadius: 10,
    },
    productInfo: {
      marginLeft: 16,
    },
    productName: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#fc4b08',
    },
    productPrice: {
      fontSize: 14,
      color: '#888',
    },
    productPrice1: {
      fontSize: 16,
      color: '#fc4b08',
    },
    buttonsContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    button: {
      marginHorizontal: 8,
    },
    inputmike: {
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: '#fff',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginHorizontal: 20,
      marginVertical: 2,
      marginTop: 6,
    },
    inputIcon: {
      marginRight: -10,
      color: '#888',
      marginBottom: -5,
      marginTop: -20,
      marginLeft: -10,
    },
    subTitle: {
      flex: 1,
      color: 'gray',
      fontWeight: 'bold',
      marginLeft: -28,
      marginTop: -15,
    },
  });