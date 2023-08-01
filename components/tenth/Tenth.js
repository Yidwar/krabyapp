
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, useState, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Tenth({ navigation }) {

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };

  const goToEleven = () => {
    navigation.navigate('Once');
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
      <View style={styles.imageContainer}>
        <Image source={require('../../assets/restaurante.png')} style={styles.image} resizeMode="stretch" />
        <Image source={require('../../assets/callejera.png')} style={styles.image} resizeMode="stretch" />
      </View>

      <View style={styles.inputContainer}>

        <View style={styles.inputmike}>
          <TextInput style={styles.input} placeholder="Colombia" />
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.bumike} onPress={() => console.log('Editar')}>
              <Text style={styles.buttonText}>ES</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.bumike1} onPress={() => console.log('Editar')}>
              <Text style={styles.buttonText}>EN</Text>
            </TouchableOpacity>
          </View>
        </View>


        <View style={styles.inputmike}>
          <TextInput style={styles.input} placeholder="lucia@gmail.com" />
          <TouchableOpacity style={styles.button} onPress={() => console.log('Editar')}>
            <Text style={styles.buttonText1}>Editar</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textomikeContainer}>
          <View style={styles.parrafo1}>
            <Text style={styles.titulomike}>Paso 1</Text>
          </View>
          <Text style={styles.subtitulo}>Seleccione el medio de pago</Text>
        </View>

        <View style={styles.inputmike}>
          <Image source={require('../../assets/davivienda.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput style={styles.input1} placeholder="Productos Davivienda" />
        </View>

        <View style={styles.inputmike}>
          <Image source={require('../../assets/credito.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput style={styles.input1} placeholder="Tarjeta de Crédito y Débito" />
        </View>

        <View style={styles.inputmike}>
          <Image source={require('../../assets/pse.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput style={styles.input1} placeholder="Cuenta de ahorro y corriente" />
        </View>

        <View style={styles.inputmike}>
          <Image source={require('../../assets/daviplata.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput style={styles.input1} placeholder="Daviplata" />
        </View>

        <View style={styles.inputmike}>
          <Image source={require('../../assets/safety.png')}
            style={{ width: 20, height: 20 }}
          />
          <TextInput style={styles.input1} placeholder="Safetypay" />
        </View>

      </View>
      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Cancelar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 1, marginLeft: 250, marginRight: 60 }}>
        <Button title="Siguiente" onPress={goToEleven} />
      </View>

    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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

  input1: {
    marginLeft: 12,
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
});