import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
import { StyleSheet, Text, View, TextInput, ImageBackground, Image, TouchableOpacity, Button } from 'react-native';
import { CheckBox } from 'react-native-elements';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

export default function Sixth({ navigation }) {
  const [nombreApellido, setNombreApellido] = useState('');
  const [telefono, setTelefono] = useState('');
  const [tipoCedula, setTipoCedula] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [Correo, setCorreo] = useState('');
  const [Direccion, setDireccion] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const handleButtonPress = () => {
   // console.log('Botón presionado');
    //console.log('Nombre y Apellido:', nombreApellido);
   // console.log('Teléfono:', telefono);
   // console.log('Tipo de Cédula:', tipoCedula);
    //console.log('Ciudad:', ciudad);
    //console.log('Acepto términos y condiciones:', isChecked);
    const data={
      "Nombre":nombreApellido,
      "Telefono":telefono,
      "Correo":Correo,
      "Direccion":Direccion,
      "Tipo_documento":tipoCedula,
      "Ciudad":ciudad



    };
    const url="http://10.0.2.2:8000/api/usuarios";
    axios.post(url, data)
    .then(response => {
      // Manejar la respuesta del servidor si es necesario
      console.log("Respuesta del servidor:", response.data);
    })
    .catch(error => {
      // Manejo de errores en caso de que la petición falle
      console.error("Error en la petición Axios:", error);
    });
    navigation.navigate('Octava');
  };

  const tipoCedulaMike = [
    { value: 'Documento De Identidad', label: 'Documento De Identidad' },
    { value: 'Cedula Extrangera', label: 'Cedula Extrangera' },
    { value: 'Cédula Colombiana', label: 'Cédula Colombiana' },
    
  ];

  
  const ciudadMike = [
    { value: 'Escoge Tu Ciudad ', label: 'Escoge Tu Ciudad ' },
    { value: 'Barranquilla', label: 'Barranquilla' },
    { value: 'Medellin', label: 'Medellin' },
    { value: 'Pasto', label: 'Pasto' },

    
  ];



  return (

    <View style={styles.container}>
      <ImageBackground source={require('../../assets/imagen.png')} style={styles.backgroundImage}>
        <View style={styles.overlay}>
          <Image source={require('../../assets/logo.png')} style={[styles.logo, { marginTop: -80 }]} />
          <Text style={styles.subTitle}>Completa con tus datos los {"\n"} siguientes campos:</Text>
          <TextInput
            placeholder='Nombre y Apellido' style={[styles.textInput, { paddingLeft: 20 }]}  value={nombreApellido}
            onChangeText={setNombreApellido} />
          <TextInput
            placeholder='Telefono' style={[styles.textInput, { paddingLeft: 20 }]} value={telefono}
            onChangeText={setTelefono} />
            <TextInput
            placeholder='Correo' style={[styles.textInput, { paddingLeft: 20 }]} value={Correo}
            onChangeText={setCorreo} />
            <TextInput
            placeholder='Direccion' style={[styles.textInput, { paddingLeft: 20 }]} value={Direccion}
            onChangeText={setDireccion} />
            <View style={styles.pickerContainer}>
           
          <Picker
            selectedValue={tipoCedula}
            onValueChange={(itemValue) => setTipoCedula(itemValue)}
            prompt="Escoge tipo de cédula"
            style={styles.picker}
          >
            {tipoCedulaMike.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
          </View>
          <View style={styles.pickerContainer}>
          
          <Picker
            selectedValue={ciudad}
            onValueChange={(itemValue) => setCiudad(itemValue)}
            prompt="Escoge tu ciudad"
            style={styles.picker}
          >
            {ciudadMike.map((option) => (
              <Picker.Item key={option.value} label={option.label} value={option.value} />
            ))}
          </Picker>
          </View>
          <View style={styles.checkboxContainer}>
            <CheckBox
              checked={isChecked}
              onPress={handleCheckboxChange}
              containerStyle={styles.checkBox}
            />
            <Text style={styles.checkboxLabel}>Acepto términos y condiciones.</Text>
          </View>
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Text style={styles.buttonText} >Siguiente</Text>
          </TouchableOpacity>

          <StatusBar style="auto" />
        </View>
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
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    alignItems: 'center',
    paddingVertical: 80,
    paddingHorizontal: 75,
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
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#fff',
    padding: 10,
    width: 300,
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
    width: 300,

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
    marginTop: 5,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: '#fff',
    marginLeft: -12,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    width: 300,
    height: 50,
    marginTop: 20,
    backgroundColor: '#fff',
    overflow: 'hidden', 
  },
  picker: {
    flex: 1,
    color: 'gray',
  },
});
