import React from 'react';
import { StyleSheet, StatusBar, View, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

export default function Twentyfour({ navigation }) {
  const goToTwentyfive = () => {
    navigation.navigate('Veinte cinco');
  };

  const goToTwentyeight = () => {
    navigation.navigate('Veinte ocho');
  };

  const goToFifth = () => {
    navigation.navigate('Quinta');
  };

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="white" barStyle="light-content" style={styles.statusBar} />
      <View style={styles.iconoIzquierdaContainer}>
        <TouchableOpacity style={styles.iconoIzquierdaButton}>
          <Ionicons name="md-arrow-back" size={30} color="white" />
        </TouchableOpacity>
        <Text style={styles.texto}>Menú</Text>
      </View>

      <View style={styles.contenedorElementos}>
        <View style={styles.elementoContainer}>
          <Ionicons name="person-circle-outline" size={30} color="white" />
          <TouchableOpacity>
            <Text style={styles.elementoTexto} onPress={goToTwentyfive}>Mi perfil</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.line, styles.longLine]} />

        <View style={[styles.elementoContainer, styles.derechaContainer, styles.bajarContainer]}>
          <FontAwesome name="shopping-bag" size={20} color="white" style={styles.icon} />
          <TouchableOpacity>
            <Text style={styles.elementoTexto}>Mis pedidos</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.line, styles.longLine]} />

        <View style={[styles.elementoContainer, styles.bajarContainer]}>
          <Ionicons name="help-circle" size={30} color="white" />
          <TouchableOpacity>
            <Text style={styles.elementoTexto} onPress={goToTwentyeight}>Soporte</Text>
          </TouchableOpacity>
        </View>

        <View style={[styles.line, styles.longLine]} />

        <View style={[styles.elementoContainer, styles.bajarContainer]}>
          <Ionicons name="log-out-outline" size={30} color="white" />
          <TouchableOpacity>
            <Text style={styles.elementoTexto} onPress={goToFifth}>Cerrar sesión</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.line, styles.longLine]} />
      </View>

      <View style={{ marginTop: -70, marginLeft: 270, marginRight: 52 }}>
        <Button title="Siguiente" onPress={goToTwentyfive}/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 70,
  },
  iconoIzquierdaContainer: {
    backgroundColor: '#E2AE00',
    height: StatusBar.currentHeight + 55,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  texto: {
    color: 'white',
    marginLeft: 10,
    marginTop: 28,
    marginBottom: 35,
    fontSize: 14,
  },
  contenedorElementos: {
    backgroundColor: '#E26800',
    paddingHorizontal: 16,
    paddingVertical: 25,
    width: '100%',
    height: '100%',
  },
  elementoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 37,
  },
  elementoTexto: {
    marginLeft: 10,
    fontSize: 18,
    color: 'white',
  },
  line: {
    borderBottomWidth: 2,
    borderBottomColor: 'white',
    marginVertical: 5,
    width: '20%',
    marginLeft: 5,
    marginTop: -15,
  },
  longLine: {
    width: '98%',
  },
  icon: {
    marginLeft: 5,
    marginRight: 10,
  },
  derechaContainer: {
    justifyContent: 'flex-start',
  },
  bajarContainer: {
    marginBottom: 40, // Ajustar el valor según tus necesidades
    marginVertical: 10,
  },
});