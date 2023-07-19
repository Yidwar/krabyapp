
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

export default function Fifteen({route, navigation }) {
  const {claveidres} =route.params
  const [menu, setMenu] = useState([]);

  useEffect(() => {
   async function api() {
      try {
        const menu1 = await axios.get('http://10.0.2.2:8000/api/menurestaurante/'+ claveidres);
        console.log("hola mike");
       setMenu(menu1.data);
       console.log(menu);
        
      } catch (error) {
        console.error(error);
      }
    }
    api()
    
  }, []);

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };
  //<Image source={require('../../assets/menu.png')} style={styles.imagen2} resizeMode="stretch" />
  const goToSeventeen = () => {
    navigation.navigate('Diecisiete');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <Icon name="cart-outline" size={30} color="white" style={styles.icon} />

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
        </View>
    </View>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/fiorella1.png')} style={styles.imagen} resizeMode="stretch" />
      </View>
      <View style={styles.menuInfoContainer}>
        {menu.map((menuItem, index) => (
          <TouchableOpacity style={styles.menuCard} key={index}>
            <Image source={{ uri: menuItem.imagen_menu }} style={styles.menuImage} resizeMode="cover" />
            <Text style={styles.menuName}>{menuItem.producto}</Text>
            <View style={styles.menuFooter}>
              <Text style={styles.menuPrice}>Precio: {menuItem.precio}</Text>
              <Icon name="cart-outline" size={30} color="orange" style={styles.menuCartIcon} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{ marginTop: 10, marginLeft: 280, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToSeventeen} />
      </View>

    </View>
  );
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

});