import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';

export default function Sixth({navigation}) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToEighth = () => {
    navigation.navigate('Octava');
  }

  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <Image source={require('../../assets/logo.png')} style={[styles.logo, { marginTop: -200 }]} />
        <Text style={styles.subTitle}>Completa con tus datos los siguientes campos:</Text>
        <TextInput
          placeholder='Nombre y Apellido'
          style={styles.textInput}
        />
        <TextInput
          placeholder='Telefono'
          style={styles.textInput}
        />
        <TextInput
          placeholder='Tipo de Cedula'
          style={styles.textInput}
        />
        <TextInput
          placeholder='Ciudad'
          style={styles.textInput}
        />
        <View style={styles.checkboxContainer}>
          <CheckBox
          />
          <Text style={styles.checkboxLabel}>Acepto términos y condiciones</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Siguiente</Text>
        </TouchableOpacity>

        <View style={{height: 50, marginBottom: -170, marginTop: 20, marginRight: -260 }}>
          <View style={{ marginTop: 15, marginLeft: 5, marginRight: 5 }}>
            <Button title="Siguiente" onPress={goToEighth} />
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
