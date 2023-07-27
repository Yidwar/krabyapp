
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Eighteen({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToNineteen = () => {
    navigation.navigate('Diecinueve');
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
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/pizzacont.png')} style={styles.image} resizeMode="stretch" />
        <View style={styles.productContainer}>
          <Image source={require('../../assets/filetepescado.png')} style={styles.productImage} resizeMode="contain" />
          <View style={styles.productInfo}>
            <Text style={styles.productPrice}>Pescado asado</Text>
            <Text style={styles.productPrice2}>Pago de compra online</Text>
            <Text style={styles.productName}>$ 10.000 COP</Text>
          </View>

        </View>
      </View>

      <View style={styles.inputContainer}>
        <View style={styles.inputmike2}>
        <Image source={require('../../assets/colombia.png')} style={{ width: 20, height: 20 }} />
          <TextInput style={styles.inputdos} placeholder="Colombia" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bumike} onPress={() => console.log('Editar')}>
              <Text style={styles.buttonText}>ES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <Text style={styles.buttonText}>EN</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.inputmike2}>
          <TextInput style={styles.input} placeholder="lucia@gmail.com" />
          <TouchableOpacity style={styles.button} onPress={() => console.log('Editar')}>
            <Text style={styles.buttonText1}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textomikeContainer}>
          <View style={styles.parrafo1}>
            <Text style={styles.titulomike}>Paso 1</Text>
          </View>
          <Text style={styles.subtitulo}>Seleccione el medio de pago</Text>
        </View>

        <View style={styles.space}>

          <View style={styles.inputmike}>
            <Image source={require('../../assets/davivienda.png')}
              style={{ width: 20, height: 20 }}
            />
            <TextInput style={styles.input1} placeholder="Productos Davivienda" />
          </View>

          <View style={styles.inputmike}>
            <Image source={require('../../assets/credito.png')}
              style={{ width: 20, height: 20 }}
            />
            <TextInput style={styles.input1} placeholder="Tarjeta de Crédito y Débito" />
          </View>

          <View style={styles.inputmike}>
            <Image source={require('../../assets/pse.png')}
              style={{ width: 20, height: 20 }}
            />
            <TextInput style={styles.input1} placeholder="Cuentas de ahorro y corriente" />
          </View>

          <View style={styles.inputmike}>
            <Image source={require('../../assets/daviplata.png')}
              style={{ width: 20, height: 20 }}
            />
            <TextInput style={styles.input1} placeholder="Daviplata" />
          </View>

          <View style={styles.inputmike}>
            <Image source={require('../../assets/safety.png')}
              style={{ width: 20, height: 20 }}
            />
            <TextInput style={styles.input1} placeholder="Safetypay" />
          </View>
        </View>

      </View>
      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Cancelar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: -18, marginLeft: 280, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToNineteen} />
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 70,
    marginLeft: 40,
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

  image: {
    width: '100%',
    height: '28%',
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
    borderColor: 'grey',
    borderRadius: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
    backgroundColor: 'white',
  },
  inputmike2: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'grey',
    borderRadius: 1,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
    backgroundColor: '#E1E1E1',
  },
  space:{
    marginTop: 17,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
  },
  input1: {
    marginLeft: 12,
  },
  inputdos:{
    marginLeft: 8,
  },
  button: {
    backgroundColor: 'transparent',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 5,
    marginRight: -5,
  },
  bumike: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginRight: -1,
  },
  bumike1: {
    backgroundColor: '#D3D3D3',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginRight: -9,
  },
  buttonText: {
    color: '#FFF',
  },
  buttonText1: {
    color: '#FFA500',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginLeft: 185,
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
    backgroundColor: 'orange',
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
    marginLeft: -18,
    marginTop: 8,
  },
  subtitulo: {
    marginLeft: -18,
    marginTop: -5,
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
  productPrice2: {
    fontSize: 14,
    color: 'gray',
  },
});