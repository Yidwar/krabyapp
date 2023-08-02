
import { StyleSheet, Text, View, Image, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Nine({ navigation }) {
  const handleButtonPress = () => {
    console.log('Botón presionado');
  };

  const goToTenth = () => {
    navigation.navigate('Decima');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/corral1.png')} style={styles.imagen1} resizeMode="stretch" />
      </View>

      <View style={styles.box}>
        <Text style={styles.boxText}>Combo de Callejeras</Text>
        <Text style={styles.paragraph}>
          Con papas fritas y dos gaseosas personales
        </Text>

        <View style={styles.orangeRow}>
          <Text style={styles.subtotalText}>Sub total</Text>
          <Text style={styles.priceText}>$20,000</Text>
        </View>
      </View>

      <Text style={styles.subtitulo}>Si deseas que tengamos en cuenta tus comentarios para la preparación, escribenos.</Text>

      <TextInput placeholder='Quiero mi hamburguesa mas cocida' style={styles.textInput} />


      <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Hacer pedido</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.bucancelar2} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar2}>Cancelar</Text>
      </TouchableOpacity>

      <View style={{ marginTop: 10, marginLeft: 250, marginRight: 60 }}>
        <Button title="Siguiente" onPress={goToTenth} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imagen1: {
    width: '95%',
    height: '45%',
    resizeMode: 'contain',
    alignSelf: 'center',
    marginTop: 40,
  },
  bucancelar: {
    backgroundColor: '#bcc404',
    borderRadius: 30,
    padding: 14,
    marginTop: 10,
    width: '80%',
    marginLeft: 40,
  },
  bucancelar2: {
    backgroundColor: '#CCCACA',
    borderRadius: 30,
    padding: 14,
    marginTop: 20,
    width: '80%',
    marginLeft: 40,
  },
  box: {
    borderWidth: 0.5,
    borderColor: 'gray',
    padding: 20,
    alignItems: 'flex-start',
    borderRadius: 5,
    marginTop: -160,
    alignSelf: 'center',
    width: '95%',
  },
  boxText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'tomato',
  },
  paragraph: {
    borderColor: '#B0AFAE',
    marginBottom: 10,
    fontSize: 14,
    lineHeight: 24,
    marginTop: -12,
  },
  orangeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#e4b414',
    padding: 10,
    marginVertical: 18,
    width: '111.5%',
    marginLeft: -20,
    marginTop: 5,
  },
  subtotalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: 5,
  },
  priceText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'right',
    marginRight: 5,
  },
  subtitulo: {
    textAlign: 'left',
    color: 'gray',
    marginLeft: 12,
    marginTop: 22,
    fontSize: 14.5,
  },
  textInput: {
    borderColor: '#fff',
    padding: 10,
    width: '95%',
    height: 90,
    marginTop: 10,
    borderRadius: 7,
    backgroundColor: '#E3E1E1',
    elevation: 5,
    alignSelf: 'center',
    paddingTop: -15,
  },
  butextcancelar: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  butextcancelar2: {
    color: 'gray',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});