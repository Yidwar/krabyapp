
import { StyleSheet, Text, View, Image, TouchableOpacity, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Header from '../../components/header/Header';

export default function Thirty({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToThirtythree = () => {
    navigation.navigate('Treinta tres');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />
      <View style={styles.imageContainer}>
        <Text style={styles.productName1}>Notificaciones</Text>
        <View style={styles.productContainer}>
          <Image source={require('../../assets/filetepescado.png')} style={styles.productImage} resizeMode="contain" />
          <View style={styles.productInfo}>
            <View style={styles.cont}>
              <Text style={styles.productName}>!Tu pedido ya esta en proceso¡</Text>
            </View>
          </View>
        </View>
        <View style={[styles.line, styles.longLine]} />
      </View>

      <View style={{ marginTop: 350 }}>
        <View style={{ marginTop: -50, marginLeft: 280, marginRight: 40 }}>
          <Button title="Siguiente" onPress={goToThirtythree} />
        </View>
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
    marginLeft: 14,
    marginTop: 25,
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
    fontWeight: 'bold',
  },
  subtitulo: {
    textAlign: 'left',
  },
  productImage: {
    width: 80,
    height: 80,
    top: -3,
  },
  productInfo: {
    marginLeft: 16,
  },
  productName1: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4B4B4B',
    marginLeft: 18,
    marginTop: 30,
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#B9B9B7',
    top: 20,
    right: -10,
  },
  productPrice: {
    fontSize: 14,
    color: '#888',
    fontWeight: 'bold',
  },
  line: {
    borderBottomWidth: 0.3,
    borderBottomColor: 'black',
    marginVertical: 5,
    width: '20%',
    marginLeft: 20,
    marginTop: -40,
  },
  longLine: {
    width: '90%',
  },
  cont: {
    borderWidth: 0.2,
    width: 299,
    height: 69,
    right: 21,
    borderColor: '#B5B2B2',
    top: -2,
  },
});