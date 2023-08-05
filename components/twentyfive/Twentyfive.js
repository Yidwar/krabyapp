import React from 'react';
import { StyleSheet, StatusBar, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header/Header';

export default function Twentyfive({ navigation }) {
  const goToTwentysix = () => {
    navigation.navigate('Veinte seis');
  };

  const handleIconPress = () => {
    console.log('Icono presionado');
  };

  const goToTwentyfour = () => {
    navigation.navigate('Veinte cuatro');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />

      <View style={styles.contenido}>
        <View style={styles.iconoIzquierdaContainer}>
          <TouchableOpacity style={styles.iconoIzquierdaButton} onPress={handleIconPress} >
            <Ionicons name="md-arrow-back" size={35} color="white" style={styles.iconoIzquierda} onPress={goToTwentyfour}/>
          </TouchableOpacity>
        </View>
        <View style={styles.iconoCentroContainer}>
          <Ionicons name="person-circle-outline" size={70} color="white" style={styles.iconoCentro} />
        </View>
      </View>

      <View style={styles.otroContenedor}>
        <Text style={styles.label}>Nombre y apellido</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Número de celular</Text>
        <TextInput style={styles.input} />

        <Text style={styles.label}>Correo electrónico</Text>
        <TextInput style={styles.input} />


        <Text style={styles.label}>Número de tarjeta</Text>
        <View style={styles.tarjetaContainer}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText} onPress={goToTwentysix}>+</Text>
          </TouchableOpacity>
        </View>

        <TextInput style={styles.input} />
      </View>

      <View style={{ marginTop: -210, marginLeft: 280, marginRight: 38 }}>
        <Button title="Siguiente" onPress={goToTwentysix} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenido: {
    backgroundColor: '#E2AE00',
    height: StatusBar.currentHeight + 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  iconoIzquierdaContainer: {
    marginLeft: 0,
  },
  iconoCentroContainer: {
    flex: 1,
    alignItems: 'center',
    marginLeft: -55,
  },
  otroContenedor: {
    backgroundColor: '#E26800',
    padding: 30,
    width: '100%',
    height: '100%',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
    color: 'white',
  },
  input: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    marginBottom: 16,
    color: 'white',
  },
  tarjetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 16,
    marginTop: -25,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 50,
    paddingVertical: 6,
    paddingHorizontal: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 25,
    height: 25,
  },
  buttonText: {
    color: '#E26800',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: -20,
    marginTop: -22,
    textAlign: 'center',
  },
});