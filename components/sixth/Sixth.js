import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Sixth({ navigation }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const goToEighth = () => {
    navigation.navigate('Octava');
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image source={require('../../assets/logo.png')} style={[styles.logo, { marginTop: -80 }]} />
          <Text style={styles.subTitle}>Completa con tus datos los {"\n"} siguientes campos:</Text>
          <TextInput
            placeholder='Nombre y Apellido' style={[styles.textInput, { paddingLeft: 20 }]} />
          <TextInput
            placeholder='Telefono' style={[styles.textInput, { paddingLeft: 20 }]} />
          <TextInput
            placeholder='Tipo de Cedula' style={[styles.textInput, { paddingLeft: 20 }]} />
          <TextInput
            placeholder='Escoge tu ciudad' style={[styles.textInput, { paddingLeft: 20 }]} />

          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckboxChange}
              containerStyle={styles.checkBox}
            />
            <Text style={styles.checkboxLabel}>Acepto términos y condiciones.</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} onPress={goToEighth}>Siguiente</Text>
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
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 75,
  },
  logo: {
    width: 150,
    height: 150,
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
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: 300,
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    width: 300,

  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#fff',
    marginLeft: -12,
  },
});
