
import {StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {saveCartProducts} from "../funcioncarrito/funcioncarri"
import Cabezera from '../cabezera.js/Cabezera';

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

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      <Cabezera navigation={navigation} cartCount={cartCount}/>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/fiorella1.png')} style={styles.imagen} resizeMode="stretch" />
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
              <TouchableOpacity style={styles.button}>
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
  icon2: {
    marginRight: 30,
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
    height: '15%',
    resizeMode: 'contain',
  },
  imagen2: {
    width: '100%',
    height: '60%',
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
    color: '#9DBA0C',
    marginLeft: 20,
  },
  imagenmikeContainer: {
    width: '100%',
    height: 200, // Ajusta la altura deseada para la imagen
  },
  menuInfoContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  menuCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    width: '80%',
    alignItems: 'center',
  },
  menuImage: {
    width: '100%',
    height: 100, // Ajusta la altura deseada para la imagen
    resizeMode: 'cover',
    marginBottom: 10,
  },
  menuName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  menuFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  menuPrice: {
    fontSize: 16,
  },
  menuCartIcon: {
    marginLeft: 10,
  },
  cartContainer: {
    position: 'relative',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'black',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
  },

  menuContainer: {
    paddingHorizontal: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    marginVertical: 5,
  },
  menuItemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
    marginRight: 10,
  },
  menuItemInfo: {
    flex: 1,
    marginRight: 10,
  },
  menuItemName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  menuItemPrice: {
    fontSize: 16,
  },
  menuItemCart: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 120,
    height: 80,
    borderRadius: 10,
  },
  productInfo: {
    marginLeft: 16,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fc4b08',
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
  },
  productPrice1: {
    fontSize: 16,
    color: '#fc4b08',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
  inputmike: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
    marginTop: 6,
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