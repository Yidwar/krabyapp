import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';

export default function Eighth({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToNine = () => {
    navigation.navigate('Novena');
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image source={require('../../assets/ubi.png')} style={[styles.logo, { marginTop: -200 }]} />
          <Text style={styles.subTitle}>Necesitamos de tu permiso para localizar tu móvil y brindarte una mejor experiencia</Text>

          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} onPress={goToNine}>Aceptar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
            <Text style={styles.buttonText1}>Cancelar</Text>
          </TouchableOpacity>

          {/* <View style={{ marginTop: 110, marginLeft: 215, marginBottom: -250 }}>
            <Button title="Siguiente"  />
          </View> */}

          <StatusBar style="auto" />
        </View>
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    width: 500,
    height: 500,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
  },
  titulo: {
    fontSize: 80,
    color: '000',
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 15,
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 35,
    height: 60,
    paddingHorizontal: 10,
    textAlign: 'center',
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

  button: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 30,
    marginBottom: -3,
    width: '80%',
    height: 55,
    paddingHorizontal: 110,
  },
  button1: {
    backgroundColor: 'grey',
    borderRadius: 30,
    marginTop: 13,
    width: '80%',
    height: 55,
    paddingHorizontal: 105,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: -8,
    width: '90%',
    marginTop: 7,
  },
  buttonText1: {
    color: 'white',
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center',
    width: '90%',
    marginTop: 13,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 305,
    paddingHorizontal: 69,
  },
});
