
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import Header from '../../components/header/Header';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveCartProducts} from "../funcioncarrito/funcioncarri"
import Cabezera from '../cabezera.js/Cabezera';
import { Button } from 'react-native';

export default function Fifteen({route, navigation }) {
  const {claveidres} =route.params;
  //const { cartCountGlobal } = route.params;
  const [menu, setMenu] = useState([]);
  const [cartClicked, setCartClicked] = useState(false);
  const [cartCount, setCartCount] = useState([0]);
  //const [cartCountGlobal, setCartCountGlobal] = useState(0);
  const [cartProducts, setCartProducts] = useState([]);
  useEffect(() => {
   
   async function api() {
      try {
        const menu1 = await axios.get('http://10.0.2.2:8000/api/menurestaurante/'+ claveidres);
        console.log("hola mike");
       setMenu(menu1.data);
       console.log(menu);
        
      } catch (error) {
        console.error(error);
      }
    }
    api()
    
  }, []);

  /*
  const array_carrito_compras=[];
  const guardar_producto=(objeto)=>{
    array_carrito_compras.push(objeto)
    setCartClicked(true);
    setCartCount(array_carrito_compras.length); 
    setCartCountGlobal(array_carrito_compras.length);
    setCartClicked(false);

  };*/
  useEffect(() => {
   console.log(cartProducts); // aqui me trae el array con los productos 
  }, [cartProducts]);


  const guardar_producto = (objeto) => {
    
    const updatedCart = [...cartProducts, objeto];
    setCartProducts(updatedCart);

    
    setCartClicked(true);
    setCartCount(updatedCart.length);
    //setCartCountGlobal(updatedCart.length);este no

   
   saveCartProducts(updatedCart);
    //console.log(cartProducts);
  };

  // esta funcion es la que me guarda los productos en el carrito de compra en
  
  const removeAllProducts = async () => {
    try {
      await AsyncStorage.removeItem('cartProducts');
      setCartProducts([]); // Limpiamos el carrito en el estado
      setCartCount(0); // Reiniciamos el contador de productos a cero
      // setCartCountGlobal(0); // Reinicia el contador global si es necesario

      // Resto del código...
    } catch (error) {
      console.error('Error al eliminar los productos del AsyncStorage:', error);
    }
  };

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };
  //<Image source={require('../../assets/menu.png')} style={styles.imagen2} resizeMode="stretch" />
 const goToSeventeen = () => {
    navigation.navigate('Diecisiete', { cartCount });
  }

  const goToTwentyone = () => {
    navigation.navigate('Veinte uno');
  };

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos');
  };
  const goToTwentythree = () => {
    navigation.navigate('Veinte tres');
  };

  return (
    <View style={styles.container}>
    <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
    <Cabezera navigation={navigation} cartCount={cartCount}/>
    <View style={styles.imagenmikeContainer}>
      <Image source={require('../../assets/fiorella1.png')} style={styles.imagen} resizeMode="stretch" />
    </View>
      
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
        <View style={styles.inputmike}>
        <Text style={styles.subTitle}>Eliminar Todos Los Productos</Text>
        <TouchableOpacity onPress={removeAllProducts}>
          <Icon name="trash-outline" size={20} color="#000" style={styles.inputIcon} />
        </TouchableOpacity>
         
      </View>
      {menu.map((menuItem, index) => (
        <TouchableOpacity style={styles.productContainer} key={index}>
          <Image source={{ uri: menuItem.imagen_menu }} style={styles.productImage} resizeMode="contain" />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>{menuItem.producto}</Text>
            <Text style={styles.productPrice}>$ {menuItem.precio} c/u</Text>
            <Text style={styles.productPrice1}>{menuItem.descripcion}</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button10}>
            <Icon name="cart-outline" size={30} color="orange" style={styles.icon2} onPress={()=>guardar_producto(menuItem)} />
            {cartCount > 0 && <View><Text style={styles.cartBadgeText}>{cartCount}</Text></View>}
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
      ))}
    
    <View style={{ marginTop: 10, marginLeft: 280, marginRight: 20 }}>
      <Button title="Siguientemike" onPress={goToSeventeen} />
    </View>
    
  </View>
);
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  icon2: {
    marginRight: 30,
    left: 10,
    top:10,
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
  imagen2: {
    position: 'absolute',
    bottom: 200,
    width: '50%',
    height: '32%',
    resizeMode: 'cover',
    marginLeft: 10,
  },
  bucancelar: {
    backgroundColor: '#c4cc04',
    borderRadius: 30,
    padding: 10,
    width: '80%',
    marginLeft: -225,
    top: 70,
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
    bottom: 325,
    left: 92,
    flexDirection: 'column',
    alignItems: 'flex-start',
    margin: 20,
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
   button10: {
    backgroundColor: '#DCE1B2',
    borderRadius: 0,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginTop: 22,
    width: 100,
    textAlign: 'center',
    left:50,
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
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    top: -150,
    left: 11,
    borderWidth: 0,
    height: 80,
    width: 290,
  },
  productImage: {
    width: 100,
    height: 100,
    top: 3,
    left: -2,
  },
  productInfo: {
    marginLeft: 7,
    top: 10,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fc4b08',
  },
  productPrice: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  productPrice1: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  bumike1: {
    backgroundColor: '#B5B2B2',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginVertical: -10,
    marginHorizontal: 20,
    marginLeft: 198,
    width: 80,
    height: 80,
    top: -31,
  },
  subtitulo: {
    color: 'white',
    textAlign: 'center',
    marginTop: -2,
    fontSize: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cont: {
    borderWidth: 0.1,
    width: 200,
    height: 79,
    right: 12,
    borderColor: 'gray',
    elevation: 1,
    top: -2,
  },
  inputmike: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
    marginTop: 100,
  },
  inputIcon: {
    marginRight: -10,
    color: '#888',
    marginBottom: -5,
    marginTop: -20,
    marginLeft: -10,
  },
  subTitle: {
    flex: 1,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: -28,
    marginTop: -15,
  },
});