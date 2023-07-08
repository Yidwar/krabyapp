import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, CheckBox, StatusBar, Button } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function Twelve({ navigation }) {

  const [menu, setMenu] = useState([]);

    useEffect(() => {
     async function api() {
        try {
          const menu1 = await axios.get('http://10.0.2.2:8000/api/comercial');
          console.log("hola");
         setMenu(menu1.data);
         console.log(menu);
          
        } catch (error) {
          console.error(error);
        }
      }
      api()
      
    }, []);

  const handleButtonPress = () => {

    console.log('Botón presionado');
  };
  const goToThirteen = () => {
    navigation.navigate('Trece');
  }

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fc4b08" barStyle="light-content" />
      <View style={styles.header}>

        <View style={styles.iconsContainer}>
          <Icon name="notifications-outline" size={30} color="white" style={styles.icon} />
          <Icon name="cart-outline" size={30} color="white" style={styles.icon} />

        </View>
        <Image source={require('../../assets/logo.png')} style={styles.logo} />
        <View style={styles.iconsContainer}>
          <Icon name="location-outline" size={30} color="white" style={styles.icon} />
          <Icon name="ellipsis-vertical" size={30} color="white" style={styles.icon} />
        </View>
      </View>
      <View style={styles.imagenmikeContainer}>
        <Image source={require('../../assets/cocacola.png')} style={styles.imagen} resizeMode="stretch" />
        <Text style={styles.subTitle}>Selecciona tu combo preferido</Text>
        <Image source={require('../../assets/corral1.png')} style={styles.imagen1} resizeMode="stretch" />
        <Text style={styles.subTitle}>Conoce los mejores centros comerciales de Barranquilla</Text>
        <View style={styles.container}>
    <View style={styles.table}>
        
        <View style={styles.headerRow}>
          <Text style={styles.headerCell}>Nombre Centro Comercial</Text>
          <Text style={styles.headerCell}>Direccion</Text>
          <Text style={styles.headerCell}>Telefono</Text>
          <Text style={styles.headerCell}>Correo</Text>
          <Text style={styles.headerCell}>Ubicacion</Text>
          
        </View>

       
        {menu.map((item) => (
          <View style={styles.row} key={item.id}>
            <Text style={styles.cell}>{item.nombre_centro_comercial}</Text>
            <Text style={styles.cell}>{item.direccion}</Text>
            <Text style={styles.cell}>{item.telefono}</Text>
            <Text style={styles.cell}>{item.correo}</Text>
            <Text style={styles.cell}>{item.ubicacion}</Text>
           
          </View>
        ))}
        <TouchableOpacity style={styles.bucancelar} onPress={handleButtonPress}>
        <Text style={styles.butextcancelar}>Ver mas centros comerciales</Text>
      </TouchableOpacity>
      </View>
      
      </View>
    </View>

      <View style={{ marginTop: 220, marginLeft: 280, marginRight: 40}}>
        <Button title="Siguiente" onPress={goToThirteen} />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#fc4b08',
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
    height: '28%',
    resizeMode: 'contain',
  },
  imagen1: {
    width: '100%',
    height: '15%',
    resizeMode: 'contain',
  },
  imagen2: {
    width: '100%',
    height: '40%',
    resizeMode: 'contain',
  },

  bucancelar: {
    backgroundColor: 'orange',
    borderRadius: 30,
    padding: 10,
    marginTop: 30,
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
  container: {
    flex: 1,
  },
 
  table: {
    flex: 1,
    marginTop: 60,
  },
  headerRow: {
    flexDirection: 'row',
    backgroundColor: '#f2f2f2',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  headerCell: {
    flex: 1,
    textAlign: 'center',
    fontWeight: 'bold',
  },  
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    paddingVertical: 10,
  },
  cell: {
    flex: 1,
    textAlign: 'center',
  },
});