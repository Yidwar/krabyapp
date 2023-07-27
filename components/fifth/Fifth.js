import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Fifth({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleSkip = () => {
  };

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };
  const goToSixth = () => {
    navigation.navigate('Sexta');
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image source={require('../../assets/logo.png')} style={[styles.logo, { marginTop: -200 }]} />
          <Text style={styles.subTitle}>Ingresa tu número de teléfono{"\n"} o con tu correo electrónico</Text>
          <TextInput placeholder='Ingresa con tu numero o correo' style={styles.textInput}
          />

          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} onPress={goToSixth}>Siguiente</Text>
          </TouchableOpacity>

          <View style={styles.checkboxContainer}>
            <View style={styles.checkboxTextContainer}>
              <CheckBox
                checked={isChecked}
                onPress={handleCheckboxChange}
                containerStyle={styles.checkBox}
              />
              <Text style={styles.checkboxText}>Acepto términos y condiciones.</Text>
            </View>
          </View>
          <Text style={styles.subTitle1}>Iniciar sesión con Google</Text>
          <View style={styles.container1}>
            <Image source={require('../../assets/google.png')} style={[styles.logo1, { marginTop: 50 }]} />
          </View>
          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText}>Quiero registrarme</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    paddingVertical: 270,
    paddingHorizontal: 98,
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    marginLeft: 50,
  },
  logo1: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  container1: {
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
    height: 10,
    marginBottom: -80,
  },
  titulo: {
    fontSize: 80,
    color: '000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subTitle1: {
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: -200,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    textAlign: 'center',
    marginLeft: -20,
    marginRight: -20,

  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 10,
    width: -60,
    marginLeft: -20,
    marginRight: -20,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkBox: {
    marginHorizontal: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 95,
  },
  checkboxTextContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -20,
    marginTop: -160,
  },
  checkboxText: {
    fontSize: 13,
    color: 'white',
    marginLeft: -17,
    marginRight: 5,
    marginTop: -2,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#fff',
  },
  skipButton: {
    position: 'absolute',
    top: 70,
    right: -10,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginTop: 525,
    marginRight: 150,
  },
  skipButtonText: {
    fontSize: 15,
    color: "white",
    width: 130,
    textAlign: 'center',
    marginLeft: 50,
  },
});