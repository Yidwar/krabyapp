
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Twentyone({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos');
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
        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}></Text>
          <Text style={styles.priceText}>ABIERTO AHORA</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Horarios de atencion {"\n"} Lunes a Viernes de 10:00 am - 9:00 pm
          </Text>
          <Text style={styles.paragraph}>
            Tipos de comida {"\n"} Comida asada, fria, ahumada jdshjdhjhsdj djhsdjhd {"\n"} husdhuuhsuhdu dshudshudhudshud
          </Text>
        </View>
        <Image source={require('../../assets/ubicacion.png')} style={styles.imagen1} resizeMode="stretch" />
      </View>

      <View style={{ marginTop: -15, marginLeft: 280, marginRight: 40 }}>
        <Button title="Siguiente" onPress={goToTwentytwo} />
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
    height: '40%',
    resizeMode: 'contain',
  },
  imagen1: {
    width: '95%',

    height: '15%',
    resizeMode: 'contain'

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
  orangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DAE22F',
    padding: 10,
    marginVertical: 18,
    width: '100%',
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },
  textContainer: {
    paddingHorizontal: 20,

  },
  paragraph: {

    fontSize: 11,
    lineHeight: 24,
  },
});