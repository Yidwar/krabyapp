
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar } from 'react-native';
import Header from '../../components/header/Header';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Fifteen({ navigation }) {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const handleIconPress = () => {
    console.log('Icono presionado');
  };

  const goToSeventeen = () => {
    navigation.navigate('Diecisiete');
  };

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
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />
      <ImageBackground
        source={require('../../assets/pizzacont.png')}
        style={styles.imagen}>
        <ImageBackground
          source={require('../../assets/fiorella.png')}
          style={styles.imagen1}
        />

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
      </ImageBackground>

      {/* OTRA SECCION */}
      <View style={styles.productContainer}>
        <Image source={require('../../assets/fiorella.png')} style={styles.productImage} resizeMode="contain" />
        <View style={styles.cont}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza a la napolitana</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
            <Icon name="cart-outline" size={30} color="white" style={styles.inputIcon} />
            <Text style={styles.subtitulo}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image source={require('../../assets/fiorella.png')} style={styles.productImage} resizeMode="contain" />
        <View style={styles.cont}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza con champiñones</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
            <Icon name="cart-outline" size={30} color="white" style={styles.inputIcon} />
            <Text style={styles.subtitulo}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image source={require('../../assets/fiorella.png')} style={styles.productImage} resizeMode="contain" />
        <View style={styles.cont}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza con pasas de uva</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
            <Icon name="cart-outline" size={30} color="white" style={styles.inputIcon} />
            <Text style={styles.subtitulo}>Agregar</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.productContainer}>
        <Image source={require('../../assets/fiorella.png')} style={styles.productImage} resizeMode="contain" />
        <View style={styles.cont}>
          <View style={styles.productInfo}>
            <Text style={styles.productName}>Pizza de jamón y queso</Text>
            <Text style={styles.productPrice}>$ 10.000 c/u</Text>
          </View>
          <TouchableOpacity style={styles.bumike1} onPress={() => console.log()}>
            <Icon name="cart-outline" size={30} color="white" style={styles.inputIcon} />
            <Text style={styles.subtitulo}>Agregar</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar} onPress={goToSeventeen}>Añade tu pedido</Text>
      </TouchableOpacity>
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
    bottom: 53,
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
  inputIcon: {
    marginRight: -90,
    marginTop: 10,
    marginLeft: 20,
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
});