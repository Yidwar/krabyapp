
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Fifteen({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToSeventeen = () => {
    navigation.navigate('Diecisiete');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <Icon name="cart-outline" size={30} color="white" style={styles.icon} />

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/fiorella1.png')} style={styles.imagen} resizeMode="stretch" />
        <Image source={require('../../assets/menu.png')} style={styles.imagen2} resizeMode="stretch" />
      </View>

      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar} onPress={goToSeventeen}>Añade tu pedido</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#E26800',
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
    height: '28%',
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
    marginTop: -70,
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
});