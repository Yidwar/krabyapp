import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';
import Cabezera from '../cabezera.js/Cabezera';



export default function Seventeen({ navigation, route }) {
 
  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToEighteen = () => {
    navigation.navigate('Veinte uno');
  }
  
  const [cartProductos, setCartProductos] = useState([]);
  const [productCounts, setProductCounts] = useState({});
  //const [total, setTotal] = useState(0); // Estado para almacenar el total actual
  const [cartCount, setCartCount] = useState(0); // Inicializa el estado con 0
  useEffect(() => {
    // Actualiza el estado con el valor recibido desde el componente anterior
    if (route.params && route.params.cartCount) {
      setCartCount(route.params.cartCount);
    }
    //loadCartProducts();
  }, [route.params]);
  

  

  useEffect(() => {
  
   async function api() {
    console.log("hola carrito");
    }

    const loadCartProducts = async () => {
      try {
        const jsonCart = await AsyncStorage.getItem('cartProducts');
        if (jsonCart !== null) {
          const cart = JSON.parse(jsonCart);
          setCartProductos(cart);
          const counts = cart.reduce((countsObj, product) => {
            countsObj[product.id] = 1;
            return countsObj;
          }, {});
          setProductCounts(counts);
         
        }
      } catch (error) {
        console.error('Error al cargar los productos desde AsyncStorage:', error);
      }
    };
    api()
    loadCartProducts()
    
  }, []);
  
  

  const incrementProduct = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: (prevCounts[productId] || 0) + 1,
    }));
  };

  // Función para restar la cantidad de un producto específico
  const decrementProduct = (productId) => {
    setProductCounts((prevCounts) => ({
      ...prevCounts,
      [productId]: Math.max((prevCounts[productId] || 0) - 1, 0),
    }));
  };



  const calcularSubtotal = () => {
    const subtotal = cartProductos.reduce(
      
      (total, product) => total + product.precio * (productCounts[product.id] || 0),
      0
    );
    
    return subtotal;
  };
  const total = calcularSubtotal();

  const removeProduct = (productId) => {
    const updatedCart = cartProductos.filter((product) => product.id !== productId);
    setCartProductos(updatedCart);
    setProductCounts((prevCounts) => {
      const countsCopy = { ...prevCounts };
      delete countsCopy[productId];
      return countsCopy;
    });
  };
  

 
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      {/* CENTROS COMERCIALES 
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <View style={styles.cartContainer}>
            <Icon name="cart-outline" size={30} color="white" style={styles.icon} />
            {cartCount > 0 && <View style={styles.cartBadge}><Text style={styles.cartBadgeText}></Text></View>}
          </View>

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
        </View>
      </View>
      */}
        <Cabezera navigation={navigation} cartCount={cartCount} />
        <Image source={require('../../assets/pizzacont.png')} style={styles.image} resizeMode="stretch" />

      


      <ScrollView>
      
      <View style={styles.inputContainer}>

        <View style={styles.inputmike}>

          <Text style={styles.subTitle}>Conoce tu orden mike</Text>
          <Icon name="trash-outline" size={20} color="#000" style={styles.inputIcon} />
        </View>

        
        {cartProductos.map((product, index) => (
          
          <View key={index} style={styles.productContainer}>
           
            <Image source={{uri:product.imagen_menu}} style={styles.productImage} resizeMode="contain" />
            <View style={styles.productInfo}>
              <Text style={styles.productName}>{product.producto}</Text>
              <Text style={styles.productPrice}>$ {product.precio} c/u</Text>
            </View>
            <View style={styles.buttonsContainer}>
              {/* Botón restar cantidad
              onPress={() => removeProduct(product.id)}
               */}
              <TouchableOpacity style={styles.button} onPress={() => decrementProduct(product.id)}>
                <Icon name="remove-circle" size={30} color="#C2D177" />
              </TouchableOpacity>
              <Text style={styles.quantity}>{productCounts[product.id] || 0}</Text>
              {/* Botón incrementar cantidad */}
              <TouchableOpacity style={styles.button} onPress={() => incrementProduct(product.id)}>
                <Icon name="add-circle" size={30} color="#C2D177" />
              </TouchableOpacity>
              <TouchableOpacity >
              <Icon name="trash-outline" size={20} color="#000" style={styles.inputIcon} onPress={goToEighteen}  />
            </TouchableOpacity>
            </View>
          </View>
        ))}
        
        <View style={styles.inputmike}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Pequeña</Text>
              </View>
              <Text style={styles.subtitulo}>6 porciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Mediana</Text>
              </View>
              <Text style={styles.subtitulo}>12 porciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Familiar</Text>
              </View>
              <Text style={styles.subtitulo}>24 porciones</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.priceText}>${total}</Text>
        </View>
        
        <Text>
          Si deseas que tengamos en cuenta tus comentarios para{"\n"}
          la preparación, escríbenos.
        </Text>
        <TextInput
          placeholder='Quiero mi filete con mas salsas'
          style={styles.textInput}
        />
      </View>
      </ScrollView>
      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Pagar</Text>
      </TouchableOpacity>
      <View style={{ marginTop: 10, marginLeft: 280, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToEighteen} />
      </View>
      
    </View>
    
  );
  
};

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

  imageContainer: {
    backgroundColor: 'red',
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
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: '80%',
    height: 50,
    marginTop: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
  },
  logo: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
  },

  image: {
    width: '100%',
    height: '15%',
    resizeMode: 'contain',
  },
  inputContainer: {
    
    marginTop: -150,
    paddingHorizontal: 20,
  },
  inputmike: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
  },
  inputIcon: {
    marginRight: 10,
    color: '#888',
  },
  subTitle: {
    flex: 1,
    color: '#888',
  },

  button: {
    backgroundColor: '#FFf',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 5,
  },
  bumike: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
  },
  bumike1: {
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginVertical: -10,
    marginHorizontal: 20,
    backgroundColor: '#E9E9E9',
    borderRadius: 5,
    marginLeft: 5,

  },
  buttonText: {
    color: 'orange',
    fontWeight: 'bold',
  },
  buttonText1: {
    color: '#FFA500',
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  inputContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  inputIcon3: {
    marginRight: 10,
  },
  input3: {
    flex: 1,
  },
  bucancelar: {
    backgroundColor: '#C2D177',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    width: '80%',
    marginLeft: 40,
  },
  butextcancelar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  textomikeContainer: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginLeft: 40,
  },
  parrafo1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  titulomike: {

    color: '#fc4b08',
    textAlign: 'center',
  },
  subtitulo: {
    color: '#888',
    textAlign: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  productImage: {
    width: 80,
    height: 80,
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
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    marginHorizontal: 8,
  },
  quantity: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  orangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    marginVertical: 18,
    width: '100%',
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
  },
  orangeRowText: {
    color: 'orange',
    fontSize: 16,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
  cartIconContainer: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadge: {
    position: 'absolute',
    top: -8,
    right: -8,
    backgroundColor: 'black', // Puedes cambiar el color de la bolita aquí
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cartBadgeText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 12,
  },
  cartContainer: {
    position: 'relative',
  },
});