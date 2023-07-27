
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native';

export default function Thirteen({ navigation }) {

  const [restaurante, setRestaurante] = useState([]);
  useEffect(() => {
    async function apires() {
      try {
        const resta1 = await axios.get('http://10.0.2.2:8000/api/restaurante');
        console.log("hola");
        setRestaurante(resta1.data);
        console.log(restaurante);
      } catch (error) {
        console.error(error);
      }
    }
    apires()
  }, []);



  const goToFifteen = () => {
    navigation.navigate('Quince');
  };

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
        {/* CENTROS COMERCIALES */}
        <View style={styles.carouselContainer}>
          <Swiper style={styles.carousel} autoplay={true} autoplayTimeout={3} paginationStyle={styles.paginationStyle}>
            <Image source={require("../../assets/centroscomerciales.png")} style={styles.carouselImage} />
            <Image source={require("../../assets/centroscomerciales.png")} style={styles.carouselImage} />
          </Swiper>
        </View>

        <Image source={require('../../assets/pizza1.png')} style={styles.imagen1} resizeMode="stretch" />
        <Text style={styles.subTitle}>Selecciona el restaurante mike yidwar</Text>
      </View>
      <ScrollView>
        <View style={styles.cardContainer}>
          {restaurante.map((item) => (
            <TouchableOpacity style={styles.card} key={item.id}>
              <Image source={{ uri: item.foto_baner }} style={styles.cardImage} />
              <Text style={styles.cardText}>{item.nombre_restaurante}</Text>
              <Text style={styles.cardText}>Horario: {item.horario}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <View style={{ marginTop: -50, marginLeft: 280, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToFifteen} />

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
    height: '50%',
    resizeMode: 'contain',
  },
  imagen1: {
    width: '100%',
    height: '35%',
    resizeMode: 'contain',
  },
  imagen2: {
    width: '100%',
    height: '45%',
    resizeMode: 'contain',
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
    color: '#000',
    marginLeft: 20,
    marginBottom: -300,

  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  card: {
    width: '30%',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
  carouselContainer: {
    width: 460,
    height: 200,
    alignItems: 'flex-end',
    marginLeft: 0,
  },
  carouselImage: {
    width: '90%',
    height: '90%',
    resizeMode: 'cover',
  },
  paginationStyle: {
    marginLeft: -50,
  },
});