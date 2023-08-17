import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, Image, TouchableOpacity, Button} from 'react-native';
import Swiper from 'react-native-swiper';

export default function Second({ navigation }) {
  const handleSkip = () => {
  };
  const goToThird = () => {
    navigation.navigate('Tercero');
  }
  return (
    <View style={styles.container}>
      <ImageBackground source={require("../../assets/fondo.jpeg")} style={styles.imageBackground}>
        <View style={styles.overlay}>
          <Image source={require("../../assets/logo.png")} style={styles.imageLogo} />

          <View style={styles.carouselContainer}>
            <Swiper style={styles.carousel} autoplay={true} autoplayTimeout={3} paginationStyle={styles.paginationStyle}>
              <Image source={require("../../assets/registro.png")} style={styles.carouselImage} />
              <Image source={require("../../assets/plato.png")} style={styles.carouselImage} />
              <Image source={require("../../assets/pedido.png")} style={styles.carouselImage} />
              <Image source={require("../../assets/retiropedido.png")} style={styles.carouselImage} />
            </Swiper>
          </View>

          <View style={styles.textContainer}>
            <Text style={styles.text}>Escoge el plato que desees de algún restaurante de tu preferencia.</Text>
          </View>

          <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
            <Text style={styles.skipButtonText} onPress={goToThird}>Omitir</Text>
          </TouchableOpacity>

          {/* <View style={{ marginTop: 180, marginLeft: 250 }}>
            <Button title="Siguiente" onPress={goToThird} />
          </View> */}

        </View>
      </ImageBackground>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageBackground: {
    flex: 1,
    width: "100%",
    height: "100%",
    resizeMode: 'cover',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 30,
  },
  imageLogo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  carouselContainer: {
    width: 200,
    height: 200,
    alignItems: 'flex-end',
    marginLeft: 30,
  },
  carouselImage: {
    width: '80%',
    height: '80%',
    resizeMode: 'cover',
  },
  paginationStyle: {
    bottom: -150,
    marginLeft: -25,
  },
  textContainer: {
    paddingHorizontal: 110,
  },
  text: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: 'center',
    paddingVertical: 10,
    borderRadius: 10,
  },
  skipButton: {
    position: 'absolute',
    top: 30,
    backgroundColor: 'transparent',
    alignItems: 'center',
    paddingVertical: 0,
    paddingHorizontal: 10,
    marginTop: 525,
    marginRight: 140,
  },
  skipButtonText: {
    fontSize: 16,
    color: "white",

  },
});
