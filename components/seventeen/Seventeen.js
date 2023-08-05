
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Header from '../../components/header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Seventeen({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToEighteen = () => {
    navigation.navigate('Dieciocho');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/pizzacont.png')} style={styles.image} resizeMode="stretch" />
        <ImageBackground source={require('../../assets/fiorella.png')}
          style={styles.imagen1}
        />
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputmike}>
          <Text style={styles.subTitle}>Conoce tu orden</Text>
          <TouchableOpacity>
            <Icon name="trash-outline" size={20} color="#000" style={styles.inputIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.productContainer}>
          <Image source={require('../../assets/pizza2.png')} style={styles.productImage} resizeMode="contain" />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza con champiñones</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="remove-circle" size={30} color="#C2D177" />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity style={styles.button}>
              <Icon name="add-circle" size={30} color="#C2D177" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputmike}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Pequeña</Text>
              </View>
              <Text style={styles.subtitulo}>6 porciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike2} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Mediana</Text>
              </View>
              <Text style={styles.subtitulo}>12 porciones</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike2} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Familiar</Text>
              </View>
              <Text style={styles.subtitulo}>24 porciones</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}>Sub total</Text>
          <Text style={styles.priceText}>$10,000</Text>
        </View>

        <Text style={styles.texto}>Si deseas que tengamos en cuenta tus comentarios para{"\n"}la preparación, escríbenos.</Text>
        <TextInput placeholder='Quiero mi filete con mas salsa' style={styles.textInput} />
      </View>
      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar} onPress={goToEighteen}>Pagar</Text>
      </TouchableOpacity>
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
  textInput: {
    borderColor: '#fff',
    padding: 10,
    width: '100%',
    height: 50,
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: '#E3E1E1',
    elevation: 5,
  },
  logo: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignItems: 'center',
  },
  image: {
    width: '110%',
    height: '52%',
    resizeMode: 'contain',
    marginLeft: -10,
    marginTop: -7,
  },
  imagen1: {
    position: 'absolute',
    bottom: 95,
    width: '45%',
    height: '45%',
    resizeMode: 'cover',
    marginLeft: 158,
  },
  inputContainer: {
    marginTop: -150,
    paddingHorizontal: 20,
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
    marginRight: -90,
    color: '#888',
    marginBottom: -5,
    marginTop: -20,
    marginLeft: 22,
  },
  subTitle: {
    flex: 1,
    color: 'gray',
    fontWeight: 'bold',
    marginLeft: -28,
    marginTop: -15,
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
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: -34,
    width: 120,
    elevation: 5,
  },
  bumike2: {
    backgroundColor: '#ADD8E6',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginVertical: -10,
    marginHorizontal: 20,
    backgroundColor: 'white',
    borderRadius: 5,
    marginLeft: -10,
    width: 120,
    elevation: 5,
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
    backgroundColor: '#bcc404',
    borderRadius: 30,
    padding: 10,
    marginTop: 30,
    width: '60%',
    marginLeft: 90,
  },
  butextcancelar: {
    color: 'white',
    fontSize: 14,
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
    marginLeft: 30,
  },
  subtitulo: {
    color: '#888',
    textAlign: 'center',
    marginTop: -7,
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
    color: 'black',
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
    backgroundColor: '#e4b414',
    padding: 10,
    marginVertical: 18,
    width: '111%',
    marginLeft: -20,
    marginTop: 30,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginRight: 5,
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
  texto: {
    paddingHorizontal: 12,
    fontSize: 14,
    color: 'gray',
    marginLeft: -12,
  },
});