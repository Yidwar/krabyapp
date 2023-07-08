import React from 'react';
import { TextInput, View, Platform, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Busqueda = () => {
  const shadowStyle = Platform.OS === 'ios' ? styles.shadowIOS : styles.shadowAndroid;

  return (
    <View style={[styles.container, shadowStyle]}>
      <Icon name="search" size={20} color="#C6CA41" style={styles.icon} />
      <TextInput
        placeholder="Buscar"
        style={styles.textInput}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 7,
    backgroundColor: '#fff',
    margin: 20,
    marginTop: 40,
    width: "90%",
    alignSelf: 'flex-start',
  },
  shadowIOS: {
    shadowOffset: { width: 0, height: 2 },
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  shadowAndroid: {
    elevation: 2,
  },
  icon: {
    marginLeft: 18,
  },
  textInput: {
    color: '#7C7C7C',
    flex: 1,
    marginLeft: 10,
    height: 40,
  },
});

export default Busqueda;