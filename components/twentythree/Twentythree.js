
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Header from '../../components/header/Header';

export default function Twentythree({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToTwentyfour = () => {
    navigation.navigate('Veinte cuatro');
  }

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos');
  };

  const goToTwentyone = () => {
    navigation.navigate('Veinte uno');
  };

  const goToTwentythree = () => {
    navigation.navigate('Veinte tres');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />
      <ImageBackground
        source={require('../../assets/pizzacont.png')}
        style={styles.imagen}>
        <ImageBackground
          source={require('../../assets/fiorella.png')}
          style={styles.imagen1}
        />
      </ImageBackground>

      <View style={styles.imagenmikeContainer}>
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

        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Politicas del restaurante {"\n"}
          </Text>
          <Text style={styles.texto1}>
            No incluye otras promociones vigentes.
          </Text>
          <Text style={styles.texto2}>
            Restricciones por contrato
          </Text>
          <Text style={styles.texto3}>
            Restricciones por contrato
          </Text>
        </View>
      </View>
      <View style={{ marginTop: 80, marginLeft: 290, marginRight: 30 }}>
        <Button title="Siguiente" onPress={goToTwentyfour} />
      </View>
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
  buttonContainer: {
    position: 'absolute',
    bottom: 188,
    left: 92,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 20,
    left: 82,
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
  textContainer: {
    paddingHorizontal: 20,
    marginTop: 20,
    bottom: 160,
  },
  paragraph: {
    marginBottom: 10,
    fontSize: 16,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  texto1: {
    marginTop: -5,
    bottom: 13,
  },
  texto2: {
    marginTop: 5,
    bottom: 13,
  },
  texto3: {
    marginTop: 5,
    bottom: 13,
  },
});