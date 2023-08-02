
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, useState, StatusBar} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Fifteen({ navigation }) {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const handleIconPress = () => {
    console.log('Icono presionado');
  };

  const goToSeventeen = () => {
    navigation.navigate('Diecisiete');
  };

  const goToTwentyone = () => {
    navigation.navigate('Veinte uno'); 
  };

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos'); 
  };
  const goToTwentythree = () => {
    navigation.navigate('Veinte tres'); 
  };

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

      <ImageBackground
        source={require('../../assets/pizzacont.png')}
        style={styles.imagen}>
        <ImageBackground
          source={require('../../assets/fiorella.png')}
          style={styles.imagen1}
        />

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.button, { height: 35 }]}
            onPress={() => handleButtonPress('Boton 1')}>
            <Text style={styles.buttonLabel} onPress={goToTwentyone}>Descripción</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.button2]}
            onPress={() => handleButtonPress('Boton 2')}>
            <Text style={styles.buttonLabel} onPress={goToTwentytwo}>Calificación</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, styles.button3]}
            onPress={() => handleButtonPress('Boton 3')}>
            <Text style={styles.buttonLabel} onPress={goToTwentythree}>Politicas</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>

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
    width: '105%',
    height: '50%',
    resizeMode: 'cover',
    alignSelf: 'center',
    marginTop: 0,
  },
  imagen1: {
    position: 'absolute',
    bottom: 80,
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
    marginLeft: 16,
  },
  bucancelar: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 150,
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
  buttonContainer: {
    position: 'absolute',
    bottom: 53,
    left: 92,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 20,
  },
  button: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 22,
    width: 100,
    textAlign: 'center',
  },
  button2: {
    marginTop: 5,
    bottom: 40,
    marginLeft: 100,
    textAlign: 'center',
  },
  button3: {
    marginLeft: 5,
    bottom: 98,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    marginLeft: 200,
    textAlign: 'center',
    width: 85,
    marginTop: 23,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 11,
    fontWeight: 'bold',
    marginTop: -0.5,
  },
});