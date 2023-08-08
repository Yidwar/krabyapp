import React, { useState } from 'react';
import { StyleSheet, ImageBackground, View, TouchableOpacity, StatusBar, Text, TextInput, Image, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Header from '../../components/header/Header';

export default function Twentytwo({ navigation }) {
  const handleButtonPress = (label) => {
    console.log('Boton presionado');
  };

  const handleIconPress = () => {
    console.log('Icono presionado');
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

  const renderStars = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);

    const handleStarPress = (starIndex) => {
      setSelectedStars(starIndex + 1);
    };

    return (
      <View style={styles.starContainer}>
        {[...Array(filledStars)].map((_, index) => (
          <Ionicons name="star" size={20} color='#e4ac04' key={index} style={styles.star} />
        ))}
        {halfStar && <Ionicons name="star-half" size={20} color='#e4ac04' style={styles.star} />}
        {[...Array(emptyStars)].map((_, index) => (
          <Ionicons name="star-outline" size={20} color='#e4ac04' key={index} style={styles.star} />
        ))}
      </View>
    );
  };

  //ESTRELLA UNO

  const Stars = (rating) => {
    const filledStars = Math.floor(rating);
    return (
      <View style={styles.starContainerUno}>
        {[...Array(filledStars)].map((_, index) => (
          <Ionicons name="star" size={15} color='#c4cc04' key={index} style={styles.staruno} />
        ))}
      </View>
    );
  };

  //ESTRELLA DOS

  const Starsdos = (rating) => {
    const filledStars = Math.floor(rating);
    return (
      <View style={styles.starContainerDos}>
        {[...Array(filledStars)].map((_, index) => (
          <Ionicons name="star" size={15} color='#c4cc04' key={index} style={styles.stardos} />
        ))}
      </View>
    );
  };

  //ESTRELLA TRES

  const Starstres = (rating) => {
    const filledStars = Math.floor(rating);
    const halfStar = rating - filledStars >= 0.5;
    return (
      <View style={styles.starContainerTres}>
        {[...Array(filledStars)].map((_, index) => (
          <Ionicons name="star" size={15} color='#c4cc04' key={index} style={styles.startres} />
        ))}
        {halfStar && <Ionicons name="star-half" size={15} color='#c4cc04' style={styles.startres} />}
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#E26800" barStyle="light-content" />
      <Header />
      <View style={styles.contenido}>
        <View style={styles.imagenContainer}>
          <ImageBackground
            source={require('../../assets/pizzacont.png')}
            style={styles.imagen}>
            <ImageBackground
              source={require('../../assets/fiorella.png')}
              style={styles.imagen1}
            />

            <TouchableOpacity onPress={handleIconPress}>
              <Image
                source={require('../../assets/izquierda.png')}
                style={styles.icon2} />
            </TouchableOpacity>

            <View style={styles.buttonContainer}>
              <TouchableOpacity
                style={[styles.button, { height: 35 }]}
                onPress={() => handleButtonPress('Boton 1')}>
                <Text style={styles.buttonLabel} onPress={goToTwentyone}>Descripción</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.button2]}
                onPress={() => handleButtonPress('Boton 2')} >
                <Text style={styles.buttonLabel} onPress={goToTwentytwo}>Calificación</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[styles.button, styles.button3]}
                onPress={() => handleButtonPress('Boton 3')}>
                <Text style={styles.buttonLabel} onPress={goToTwentythree}>Politicas</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
          <View style={styles.containerCircle}>
            <View style={styles.circleBackground}></View>
            <View style={styles.circle}>
              <Text style={styles.label}>4.5</Text>
            </View>
            <View style={styles.ratingContainer}>
              {renderStars(4.5)}
            </View>
          </View>
          <Text style={styles.texto}>Lo que dicen de nosotros</Text>

          {/* PRIMER CONTENEDOR */}
          <View style={styles.contenidoendos}>
            <View style={styles.userContainer}>
              <Ionicons name="person-circle-outline" size={60} color="#7C7C7C" />
              <View style={styles.userInfo}>
                <Text style={styles.userName}>Lucía Fernández</Text>
                <Text style={styles.userRole}>¡Muy buena comida! Lo recomiendo 100%</Text>
              </View>
              <View style={{ marginBottom: 5, marginTop: -4 }}>
                <View style={[styles.ratingContaineruno, { marginHorizontal: -10 }]}>
                  {Stars(5)}
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.line, styles.longLine]} />
          {/* SEGUNDO CONTENEDOR */}
          <View style={styles.contdos}>
            <View style={styles.usersegundo}>
              <Ionicons name="person-circle-outline" size={60} color="#7C7C7C" marginBottom={3} />
              <View style={styles.userInfoSegundo}>
                <Text style={styles.userNameSegundo}>Carla Ramirez</Text>
                <Text style={styles.userRoleSegundo}>Excelente comida, mucha variedad de platos</Text>
              </View>
              <View style={{ marginBottom: 5, marginTop: -5 }}>
                <View style={[styles.ratingContainerdos, { marginHorizontal: -10 }]}>
                  {Starsdos(5)}
                </View>
              </View>
            </View>
          </View>

          <View style={[styles.linedos, styles.longLine]} />
          {/* TERCER CONTENEDOR */}
          <View style={styles.conttres}>
            <View style={styles.usertercero}>
              <Ionicons name="person-circle-outline" size={60} color="#7C7C7C" marginBottom={3} />
              <View style={styles.userInfoTercero}>
                <Text style={styles.userNameTercero}>Lucas Salcedo</Text>
                <Text style={styles.userRoleTercero}>¡Todo excelente!</Text>
              </View>
              <View style={{ marginBottom: 5, marginTop: -5 }}>
                <View style={[styles.ratingContainertres, { marginHorizontal: -10 }]}>
                  {Starstres(4.5)}
                </View>
              </View>
              <View style={styles.containerTexto}>
                <TouchableOpacity onPress={() => handleButtonPress('Ver más comentarios')}>
                  <Text style={styles.textodos}>Ver más comentarios</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.containerTextodos}>
                <Text style={styles.textotres}>Tu opinión nos interesa</Text>
                <View style={styles.inputContainer}>
                  <TextInput
                    style={styles.input}
                    placeholder="Escribe tu comentario" />
                  <TouchableOpacity onPress={handleIconPress}>
                    <Image
                      source={require('../../assets/envio.png')}
                      style={styles.icon} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={{ marginTop: -15, marginLeft: 280, marginRight: 20, marginBottom: 2 }}>
        <Button title="Siguiente" onPress={goToTwentythree} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contenido: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contenidoendos: {
    marginTop: 236,
  },
  contdos: {
    marginTop: 5,
  },
  usersegundo: {
    alignItems: 'center',
    marginBottom: -215,
    marginLeft: -329,
    marginTop: -232,
  },
  userInfoSegundo: {
    marginLeft: 150,
    marginTop: -50,
    marginRight: -205,
  },
  userNameSegundo: {
    color: '#7C7C7C',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userRoleSegundo: {
    color: '#7C7C7C',
    fontSize: 14,
  },
  conttres: {
    marginTop: 6,
  },
  usertercero: {
    alignItems: 'center',
    marginBottom: -215,
    marginLeft: -329,
    marginTop: -232,
  },
  userInfoTercero: {
    marginLeft: 150,
    marginTop: -50,
    marginRight: -36,
  },
  userNameTercero: {
    color: '#7C7C7C',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userRoleTercero: {
    color: '#7C7C7C',
    fontSize: 14,
  },
  imagenContainer: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    marginBottom: 80,
  },
  imagen: {
    width: '105%',
    height: '50%',
    resizeMode: 'cover',
  },
  imagen1: {
    position: 'absolute',
    bottom: 60,
    width: '50%',
    height: '60%',
    resizeMode: 'cover',
    marginLeft: 15,
  },
  imagen2: {
    position: 'absolute',
    bottom: 65,
    width: '50%',
    height: '50%',
    resizeMode: 'cover',
    marginLeft: 15,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 10,
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
  containerCircle: {
    alignItems: 'center',
    marginTop: -118,
    marginRight: 50,
    marginRight: -21,
  },
  circleBackground: {
    width: 290,
    height: 35,
    borderRadius: 80,
    backgroundColor: '#E3E3E3',
    marginTop: 14,
    position: 'absolute',
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 75,
    backgroundColor: '#E26800',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: -300,
    marginTop: 5,
  },
  label: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 7,
  },
  ratingContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginLeft: 15,
  },
  ratingContaineruno: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 425,
  },
  ratingContainerdos: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 390,
  },
  ratingContainertres: {
    flexDirection: 'row',
    marginTop: 2,
    marginLeft: 400,
  },
  starContainer: {
    flexDirection: 'row',
    marginTop: -41,
  },
  starContainerUno: {
    flexDirection: 'row',
    marginTop: -41,
  },
  starContainerDos: {
    flexDirection: 'row',
    marginTop: -61,
  },
  starContainerTres: {
    flexDirection: 'row',
    marginTop: -61,
  },
  star: {
    marginRight: 25,
  },
  staruno: {
    marginRight: 5,
    marginTop: 4,
  },
  stardos: {
    marginRight: 5,
    marginTop: 25,
  },
  startres: {
    marginRight: 5,
    marginTop: 25,
  },
  texto: {
    color: '#7C7C7C',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 12,
    marginRight: 150,
  },
  userContainer: {
    alignItems: 'center',
    marginBottom: -215,
    marginLeft: -330,
    marginTop: -238,
  },
  userInfo: {
    marginLeft: 150,
    marginTop: -50,
    marginRight: -190,
  },
  userName: {
    color: '#7C7C7C',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
  },
  userRole: {
    color: '#7C7C7C',
    fontSize: 14,
  },
  line: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
    marginVertical: 5,
    width: '20%',
    marginLeft: -6,
    marginTop: -167,
    marginBottom: 230,
  },
  linedos: {
    borderBottomWidth: 0.4,
    borderBottomColor: 'gray',
    marginVertical: 5,
    width: '20%',
    marginLeft: -6,
    marginTop: -167,
    marginBottom: 230,
  },
  longLine: {
    width: '90%',
  },
  containerTexto: {
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 320,
  },
  textodos: {
    color: '#e4ac04',
  },
  containerTextodos: {
    marginTop: 20,
    alignItems: 'center',
    marginLeft: 320,
  },
  textotres: {
    color: 'gray',
    marginRight: 185,
    fontSize: 16,
    width: 180,
    fontWeight: 'bold',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 9,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: -8,
    paddingHorizontal: 10,
    borderRadius: 5,
    backgroundColor: '#FFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 1,
    elevation: 1,
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: -9,
  },
  icon2: {
    position: 'absolute',
    left: 12,
    top: -2,
  },
});
