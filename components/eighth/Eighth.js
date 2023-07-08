import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, Button } from 'react-native';

export default function Eighth({navigation}) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToTenth = () => {
    navigation.navigate('Decima');
  }
  
  return (
    
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
      <Image source={require('../../assets/ubi.png')} style={[styles.logo, { marginTop: -200 }]} />
      <Text style={styles.subTitle}>Necesitamos de tu permiso para localizar tu movil y brindarte una mejor experiencia</Text>
      
      
      
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Aceptar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button1} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Cancelar</Text>
      </TouchableOpacity>
      
      <View style={{marginTop: 110, marginLeft: 250, marginBottom: -250 }}>
          <Button title="Siguiente" onPress={goToTenth} />
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
subTitle:{
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
button1: {
  backgroundColor: 'grey',
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

});
