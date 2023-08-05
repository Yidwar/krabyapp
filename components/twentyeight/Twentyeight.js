
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header/Header';

export default function Twentyeight({ navigation }) {
  const goToTwentynine = () => {
    navigation.navigate('Veinte nueve');
  };

  const goToTwentyfour = () => {
    navigation.navigate('Veinte cuatro');
  };


  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content"/>
      <Header />
      <View style={styles.boxContainer}>
        <TouchableOpacity style={styles.iconoIzquierdaButton}>
          <Ionicons name="md-arrow-back" size={40} color="#4B4B4B" onPress={goToTwentyfour} />
        </TouchableOpacity>
        <View style={styles.box}>
          <Text style={styles.boxText}>Soporte </Text>
          <Text style={styles.paragraph}>
            Para resolver cualquier inquietud. haz click en el icono{"\n"}de whatsapp y comunicate con nosotros.
          </Text>
          <Icon name="logo-whatsapp" size={30} color="white" style={styles.whatsappIcon}/>
        </View>
      </View>
      <View>
        <View style={{ marginTop: -60, marginLeft: 280, marginRight: 20 }}>
          <Button title="Siguiente" onPress={goToTwentynine} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 210,
  },
  box: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 20,
    alignItems: 'flex-start',
    borderRadius: 8,
    width: 350,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  whatsappIcon: {
    fontSize: 30,
    color: '#25D366',
    alignSelf: 'center',
  },
  paragraph: {
    borderColor: 'gray',
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 15,
  },
  iconoIzquierdaButton: {
    marginLeft: -320,
    marginTop: -180,
  },
});