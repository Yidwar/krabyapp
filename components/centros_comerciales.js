
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function App() {
  //const [isChecked, setIsChecked] = useState(false);
  const handleButtonPress = () => {
    // Manejar la acción del botón aquí
    console.log('Botón presionado');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <Icon name="cart-outline" size={30} color="white" style={styles.icon} />

        </View>
        <Image source={require('./assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
        </View>
      </View>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('./assets/cocacola.png')} style={styles.imagen} resizeMode="stretch" />
        <Text style={styles.subTitle}>Selecciona tu combo preferido</Text>
        <Image source={require('./assets/corral.png')} style={styles.imagen1} resizeMode="stretch" />
        <Text style={styles.subTitle}>Conoce los mejores centros comerciales de Barranquilla</Text>
        <Image source={require('./assets/centros.png')} style={styles.imagen2} resizeMode="stretch" />
      </View>

      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Ver mas centros comerciales</Text>
      </TouchableOpacity>

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
    height: '28%',
    resizeMode: 'contain',
  },
  imagen1: {
    width: '100%',
    height: '15%',
    resizeMode: 'contain',
  },
  imagen2: {
    width: '100%',
    height: '40%',
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
    borderRadius: 5,
    paddingHorizontal: 10,
    marginHorizontal: 20,
    marginVertical: 2,
  },
  inputIcon: {
    marginRight: 10,
  },
  input: {
    flex: 1,

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
  },
  buttonText: {
    color: '#FFF',
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
});