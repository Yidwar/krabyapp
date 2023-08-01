import { StyleSheet, Text, View, Image, StatusBar, Button, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MapView, { Marker } from 'react-native-maps';

export default function Twentyone({ navigation }) {

  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const goToTwentytwo = () => {
    navigation.navigate('Veinte dos');
  };

  const region = {
    latitude: 1.2136,
    longitude: -77.2811,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
    name: 'Pasto, Nariño'
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <Icon name="cart-outline" size={30} color="white" style={styles.icon} />

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <TouchableOpacity>
            <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/fiorella1.png')} style={styles.imagen} resizeMode="stretch" />
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

          <View style={{ flex: 1 }}>
            <MapView
              style={styles.map}
              region={region}
              zoomEnabled={false}
              scrollEnabled={false}
              provider="google"
            >
              <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} title={region.name} />
            </MapView>
          </View>
        </View>
      </View>
      <View style={{ marginTop: 165, marginLeft: 300, marginRight: 20 }}>
        <Button title="Siguiente" onPress={goToTwentytwo} />
      </View>
    </View> //CIERRA
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
    width: '100%',
    height: '32%',
    resizeMode: 'contain',
  },
  imagen1: {
    width: '95%',
    height: '15%',
    resizeMode: 'contain'
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
    width: 375,
    height: 180,
    marginTop: 15,
  },
});