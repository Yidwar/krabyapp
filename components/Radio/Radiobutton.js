import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { CheckBox } from 'react-native-elements';

const Radiobutton = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const handleCheckboxToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleCheckboxToggle('Opción 1')} style={styles.checkboxContainer}>
        <CheckBox
          checked={checkedItems.includes('Opción 1')}
          onPress={() => handleCheckboxToggle('Opción 1')}
          checkedColor="#C4CC00"
          uncheckedColor="#7B7B7B"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          iconType="font-awesome"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Barranquilla</Text>
      </TouchableOpacity>

      <View style={[styles.line, styles.longLine]} />

      <TouchableOpacity onPress={() => handleCheckboxToggle('Opción 2')} style={styles.checkboxContainer}>
        <CheckBox
          checked={checkedItems.includes('Opción 2')}
          onPress={() => handleCheckboxToggle('Opción 2')}
          checkedColor="#C4CC00"
          uncheckedColor="#7B7B7B"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          iconType="font-awesome"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Soledad</Text>
      </TouchableOpacity>

      <View style={[styles.line, styles.longLine]} />

      <TouchableOpacity onPress={() => handleCheckboxToggle('Opción 3')} style={styles.checkboxContainer}>
        <CheckBox
          checked={checkedItems.includes('Opción 3')}
          onPress={() => handleCheckboxToggle('Opción 3')}
          checkedColor="#C4CC00"
          uncheckedColor="#7B7B7B"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          iconType="font-awesome"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Santa Marta</Text>
      </TouchableOpacity>

      <View style={[styles.line, styles.longLine]} />

      <TouchableOpacity onPress={() => handleCheckboxToggle('Opción 4')} style={styles.checkboxContainer}>
        <CheckBox
          checked={checkedItems.includes('Opción 4')}
          onPress={() => handleCheckboxToggle('Opción 4')}
          checkedColor="#C4CC00"
          uncheckedColor="#7B7B7B"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          iconType="font-awesome"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Cartagena</Text>
      </TouchableOpacity>

      <View style={[styles.line, styles.longLine]} />

      <TouchableOpacity onPress={() => handleCheckboxToggle('Opción 5')} style={styles.checkboxContainer}>
        <CheckBox
          checked={checkedItems.includes('Opción 5')}
          onPress={() => handleCheckboxToggle('Opción 5')}
          checkedColor="#C4CC00"
          uncheckedColor="#7B7B7B"
          checkedIcon="dot-circle-o"
          uncheckedIcon="circle-o"
          iconType="font-awesome"
          containerStyle={styles.checkbox}
        />
        <Text style={styles.checkboxLabel}>Cali</Text>
      </TouchableOpacity>

      <View style={[styles.line, styles.longLine]} />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'center',
    marginLeft: 15,
    marginTop: -10,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkboxLabel: {
    marginLeft: 8,
    fontSize: 16,
    color: '#7C7C7C',
  },
  checkbox: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    padding: 0,
    margin: 0,
  },
  line: {
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
    marginVertical: 5,
    width: '20%',
    marginLeft: 50,
  },
  longLine: {
    width: '80%',
  },
});

export default Radiobutton;