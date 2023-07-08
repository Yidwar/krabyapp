import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Fifth({ navigation }) {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };
  const goToSixth = () => {
    navigation.navigate('Sexta');
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <Image source={require('../../assets/logo.png')} style={[styles.logo, { marginTop: -200 }]} />
        <Text style={styles.subTitle}>Ingresa tu numero yidwar  mike de telefono o con tu correo electronico</Text>
        <TextInput
          placeholder='Ingresa con tu numero o correo'
          style={styles.textInput}
        />

        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>
        <View style={styles.checkboxContainer}>
          <CheckBox
          />
          <Text style={styles.checkboxLabel}>Acepto términos y condiciones</Text>
        </View>
        <View>
          <View style={{ marginTop: -80, marginBottom: -220  }}>
            <View style={{ marginTop: 240, marginLeft: 250}}>
              <Button title="Siguiente" onPress={goToSixth} />
            </View>
          </View>
        </View>

        <StatusBar style="auto" />
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
    marginTop: 20,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',

  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#fff',
  },

});