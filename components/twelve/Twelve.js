import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Header from '../../components/header/Header';
import Swiper from 'react-native-swiper';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Twelve({ navigation }) {

  const [menu, setMenu] = useState([]);

  useEffect(() => {
    async function api() {
      try {
        const menu1 = await axios.get('http://10.0.2.2:8000/api/comercial');
        console.log("hola");
        setMenu(menu1.data);
        console.log(menu);

      } catch (error) {
        console.error(error);
      }
    }
    api()

  }, []);

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };
  const goToThirteen = (id) => {
    
    navigation.navigate('Trece',{claveid:id});
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
      
      {/* CARROUSEL */}
      <View style={styles.carouselContainer}>
        <Swiper style={styles.carousel} autoplay={true} autoplayTimeout={3} paginationStyle={styles.paginationStyle}
          dot={<View style={styles.paginationDot} />} activeDot={<View style={styles.activePaginationDot} />}>
          <Image source={require("../../assets/cocacola.png")} style={styles.carouselImage} />
          <Image source={require("../../assets/cocacola.png")} style={styles.carouselImage} />
          <Image source={require("../../assets/cocacola.png")} style={styles.carouselImage} />
          <Image source={require("../../assets/cocacola.png")} style={styles.carouselImage} />
        </Swiper>
      </View>
      <ScrollView>
      <View style={styles.imagenmikeContainer}>
        <Text style={styles.subTitle}>Selecciona tu combo preferido</Text>
        <Image source={require('../../assets/corral1.png')} style={styles.imagen1} resizeMode="stretch" />
        <Text style={styles.subTitle}>Conoce los mejores centros comerciales de Barranquilla</Text>

        
        <View style={styles.cardContainer}>
        
        {menu.map((item) => (
          <TouchableOpacity style={styles.card} key={item.id} onPress={()=>goToThirteen(item.id)} >
            <Image source={{ uri:item.imagen }} style={styles.cardImage} />
            <Text style={styles.cardText}>{item.nombre_centro_comercial}</Text>
            <Text style={styles.cardText}>{item.direccion}</Text>
            <Text style={styles.cardText}>{item.ubicacion}</Text>
          </TouchableOpacity>
        ))}
         
      </View>
      
      
      <View style={{ marginTop: 220, marginLeft: 280, marginRight: 40}}>
        <Button title="Siguiente" onPress={handleButtonPress} />
      </View>
      
      </View>
      </ScrollView>
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
  logo: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  imagen: {
    width: '111%',
    height: '25%',
    marginLeft: -20,
    resizeMode: 'contain',
    marginTop: -20,
  },
  imagen1: {
    width: '100%',
    height: '10%',
    resizeMode: 'contain',
  },
  imagen2: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },
  imagenmikeContainer: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  subTitle: {
    fontSize: 14,
    color: '#9DBA0C',
    marginLeft: -2,
    marginTop: -2,
    paddingHorizontal: 11,
  },
  cardContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-end',
  },
  card: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginBottom: 10,
    width: '46%',
    marginRight: '4%',
  },
  cardText: {
    fontSize: 14,
    marginBottom: 5,
  },
  button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 200,
    marginHorizontal: 20,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 220,
    marginLeft: 280,
    marginRight: 40,
  },
  cardImage: {
    width: '100%',
    height: 100,
    resizeMode: 'cover',
    marginBottom: 5,
    borderRadius: 10,
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
    bottom: -5,
    borderRadius: 50,
  },
  paginationDot: {
    width: 16,
    height: 3,
    borderRadius: 2,
    backgroundColor: '#fc4b08',
    marginHorizontal: 4,
  },
  activePaginationDot: {
    width: 16,
    height: 4,
    borderRadius: 2,
    marginHorizontal: 4,
    backgroundColor: '#cccccc',
  },
});