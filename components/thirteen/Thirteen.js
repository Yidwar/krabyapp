
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Header from '../../components/header/Header';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native';
import Cabezera from '../cabezera.js/Cabezera';
export default function Thirteen({ navigation, route }) {
  const {claveid} =route.params;

    const [restaurante, setRestaurante] = useState([]);
    //const [cartCount, setCartCount] = useState(0); // Inicializa el estado con 0
    const [cartCount, setCartCount] = useState(0);
    useEffect(() => {
      // Actualiza el estado con el valor recibido desde el componente anterior
      if (route.params && route.params.cartCount) {
        setCartCount(route.params.cartCount);
      }
    }, [route.params]);

  
    useEffect(() => {
        async function apires() {
          try {
            const resta1 = await axios.get('http://10.0.2.2:8000/api/lista_restaurantes_centro_comercial/'+claveid);
         
          setRestaurante(resta1.data);
         console.log(restaurante);
          } catch (error) {
            console.error(error);
          }
        }
        apires()
    }, []);


  const goToFifteen = (id) => {
    console.log("THISMENU",id);
    navigation.navigate('Quince',{claveidres:id});
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      <Cabezera navigation={navigation} cartCount={cartCount} />

      <View style={styles.imagenmikeContainer}>
        {/* CENTROS COMERCIALES */}
        <View style={styles.carouselContainer}>
          <Swiper style={styles.carousel} autoplay={true} autoplayTimeout={2} paginationStyle={styles.paginationStyle}>
            <Image source={require("../../assets/centroscomerciales.png")} style={styles.carouselImage} />
            <Image source={require("../../assets/centroscomerciales.png")} style={styles.carouselImage} />
          </Swiper>
        </View>

        <Image source={require('../../assets/pizza1.png')} style={styles.imagen1} resizeMode="stretch" />
        <Text style={styles.subTitle}>Selecciona el restaurante mike yidwar mike</Text>
      </View>
      <ScrollView>
      <View style={styles.cardContainer}>
        {restaurante.map((item) => (
        <TouchableOpacity style={styles.card} key={item.id} onPress={()=>goToFifteen(item.id)}>
        <Image source={{ uri: item.foto_baner }} style={styles.cardImage} />
        <Text style={styles.cardText}>{item.nombre_restaurante}</Text>
        <Text style={styles.cardText}>Horario: {item.horario}</Text>
        <Text style={styles.cardText}>{item.descripcion}</Text>
        </TouchableOpacity>
        ))}
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
    marginTop: 150,
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