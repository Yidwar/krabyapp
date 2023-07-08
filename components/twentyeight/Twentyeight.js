
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
//import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Twentyeight({ navigation }) {
  const goToTwentynine = () => {
    navigation.navigate('Veinte nueve');
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
      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Text style={styles.boxText}>Soporte </Text>
          <Text style={styles.paragraph}>
            Para resolver cualquier inquietud. haz click en el icono  {"\n"} de whatsapp y comunicate con nosotros.
          </Text>
          <Icon name="logo-whatsapp" size={30} color="white" style={styles.whatsappIcon} />

        </View>
        {/* <View>
          {menu.map((menuItem) => (
            <Text key={menuItem.id}>{menuItem.title}</Text>
          ))}
        </View> */}
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
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 300,
  },
  box: {
    borderWidth: 3,
    borderColor: 'gray',
    padding: 20,
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  whatsappIcon: {
    fontSize: 30,
    color: '#25D366',
  },
  paragraph: {
    borderColor: 'gray',
    marginBottom: 10,
    fontSize: 12,
    lineHeight: 24,
  },
});