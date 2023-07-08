import React from 'react';
import { StyleSheet, StatusBar, View, Text, TextInput, TouchableOpacity, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header/Header';

export default function Twentysix({ navigation }) {

  const handleIconPress = () => {
    console.log('Icono presionado');
  };

  const goToTwentyeight = () => {
    navigation.navigate('Veinte ocho');
  }
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />

      <View style={styles.contenido}>
        <View style={styles.iconoIzquierdaContainer}>
          <TouchableOpacity style={styles.iconoIzquierdaButton} onPress={handleIconPress}>
              <Ionicons name="md-arrow-back" size={35} color="#7B7B7B" style={styles.iconoIzquierda} />
          </TouchableOpacity>
        </View>
        <View style={styles.gifContainer}>
          <Image source={require('../../assets/tarjeta.gif')} style={styles.image} />
        </View>
      </View>

      <View style={styles.tarjetaDetallesContainer}>
        <Text style={styles.label}>Detalles de la tarjeta</Text>
        <TextInput
          style={styles.input}
          placeholder="Número de tarjeta"
        />

        <View style={styles.inputsContainer}>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Mes de expiración"
            />
          </View>
          <View style={styles.inputWrapper}>
            <TextInput
              style={styles.input}
              placeholder="Año de expiración"
            />
          </View>
        </View>

        <TextInput
          style={styles.input}
          placeholder="CVV"
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Agregar tarjeta</Text>
        </TouchableOpacity>

        <View style={{ marginTop: -5, marginLeft: 240, marginRight: 25 }}>
          <Button title="Siguiente" onPress={goToTwentyeight} />
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  contenido: {
    backgroundColor: '#0000',
    height: StatusBar.currentHeight + 240,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconoIzquierdaContainer: {
    marginLeft: 0,
    marginTop: -180,
  },
  gifContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: -50,
  },
  image: {
    width: 200,
    height: 200,
  },
  tarjetaDetallesContainer: {
    backgroundColor: '#0000',
    padding: 30,
    width: '100%',
    height: '100%',
    marginTop: -55,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'gray',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#7B7B7B',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    color: 'black',
  },
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputWrapper: {
    flex: 1,
    marginRight: 4,
  },
  button: {
    backgroundColor: '#E2AE00',
    borderRadius: 50,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 16,
    width: '70%',
    alignSelf: 'center',
    marginTop: 60,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});