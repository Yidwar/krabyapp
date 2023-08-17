import { StyleSheet, Text, View, Image, StatusBar, Button, TouchableOpacity, ImageBackground, useState } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import Header from '../../components/header/Header';
export default function Twentyone({ navigation }) {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const goToTwentyone = () => {
    navigation.navigate('Veinte uno');
  };

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos');
  }
  const LATITUDE = 37.7749; // Definición de la propiedad LATITUDE
  const LONGITUDE = 122.4194; // Definición de la propiedad LONGITUDE

// Luego, podrías usar estas propiedades en tu código
  const location = {
  latitude: LATITUDE,
  longitude: LONGITUDE,
    };

// O directamente acceder a ellas
    console.log('Latitude:', LATITUDE);
    console.log('Longitude:', LONGITUDE);

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
      </ImageBackground>
      <View style={styles.imagenmikeContainer}>
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
        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}></Text>
          <Text style={styles.priceText}>ABIERTO AHORA</Text>
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.paragraph}>
            Horarios de atención {"\n"}
          </Text>
          <Text style={styles.texto1}>
            Lunes a Viernes de 10:00 am - 9:00 pm
          </Text>
          <Text style={styles.paragraph1}>
            Tipos de comida{"\n"}
          </Text>
          <Text style={styles.texto2}>
            Comida asada, frita, ahumada.
          </Text>
          <Text style={styles.paragraph2}>
            Ubicación
          </Text>
          <MapView
  style={styles.map}
  initialRegion={{
    latitude: LATITUDE, // Ingresa la latitud deseada
    longitude: LONGITUDE, // Ingresa la longitud deseada
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
>
  <Marker
    coordinate={{ latitude: LATITUDE, longitude: LONGITUDE }} // Mismo valor que initialRegion
    title="Ubicación del Restaurante"
    description="Descripción de la ubicación"
  />
</MapView>
        </View>
      </View>
      <View style={{ marginTop: 20, marginLeft: 300, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToTwentytwo} />
      </View>
    </View > //CIERRA
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
    marginLeft: 24,
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
  orangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#DAE22F',
    padding: 10,
    marginVertical: 18,
    width: '100%',
    top: -150,
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
  textContainer: {
    paddingHorizontal: 20,
    top: -150,
  },
  paragraph: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#696565',
  },
  texto1: {
    marginTop: -5,
    bottom: 13,
  },
  texto2: {
    marginTop: -5,
    bottom: 13,
  },
  paragraph1: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#696565',
  },
  paragraph2: {
    fontSize: 14,
    lineHeight: 24,
    fontWeight: 'bold',
    color: '#696565',
  },
  map: {
    flex: 1,
    width: '200%',
    height: 300, // Ajusta la altura del mapa según tus necesidades
  },
});