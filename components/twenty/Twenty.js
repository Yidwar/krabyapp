
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Twenty({navigation}) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToTwentyone = () => {
    navigation.navigate('Veinte uno');
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

      <View style={styles.inputContainer}>
        <View style={styles.inputmike}>
          <Text style={styles.subTitle}>¿Dese eliminar su pedido?</Text>
        </View>
        <View style={styles.inputmike}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <View style={styles.parrafo1}>
                <Text style={styles.titulomike}>Familiar{"\n"}24 Porciones
                </Text>
              </View>

            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.productContainer}>
          <Image source={require('../../assets/pizza2.png')} style={styles.productImage} resizeMode="contain" />
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza con champiñones</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button}>
              <Icon name="remove-circle" size={30} color="#b7bf04" />
            </TouchableOpacity>
            <Text style={styles.quantity}>1</Text>
            <TouchableOpacity style={styles.button}>
              <Icon name="add-circle" size={30} color="#b7bf04" />
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}>Subtotal</Text>
          <Text style={styles.priceText}>$10,000</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>No</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bucancelar1} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Si</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 25, marginLeft: 280, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToTwentyone} />
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
    height: '45%',
    resizeMode: 'contain',
  },
  inputContainer: {

    marginTop: 150,
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
  },
  inputIcon: {
    marginRight: 10,
    color: '#888',
  },
  subTitle: {
    flex: 1,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 20,
    marginLeft: 75,
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
    backgroundColor: '#e4b408',
    paddingHorizontal: 3,
    paddingVertical: 6,
    borderRadius: 1,
    marginVertical: -10,
    marginHorizontal: 20,
    borderRadius: 5,
    marginLeft: 100,
    width: 120,
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
    backgroundColor: '#b7bf04',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    width: '50%',
    marginLeft: 100,
  },
  bucancelar1: {
    backgroundColor: '#cccccc',
    borderRadius: 30,
    padding: 10,
    marginTop: 20,
    width: '50%',
    marginLeft: 100,
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
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginLeft: 13,
  },
  subtitulo: {
    color: 'white',
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
    backgroundColor: '#e4b408',
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
});