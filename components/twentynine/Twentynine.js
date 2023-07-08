import React from 'react';
import { StyleSheet, StatusBar, View, TouchableOpacity, Text, Button } from 'react-native';
import Header from '../../components/header/Header';
import Busqueda from '../../components/busqueda/Busqueda';
import Radiobutton from '../../components/Radio/Radiobutton';

export default function Twentynine({ navigation }) {
    const handleButtonPress = () => {
        console.log('Botón presionado');
    };

    const goToThirty = () => {
        navigation.navigate('Treinta');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#E26800" barStyle="light-content" />
            <Header />
            <Busqueda />
            <Radiobutton />
            <View style={styles.container}>
                <TouchableOpacity style={styles.bulis} onPress={handleButtonPress}>
                    <Text style={styles.bulisto}>Guardar</Text>
                </TouchableOpacity>
            </View>

            <View style={{marginTop: -90}}>
                <View style={{ marginTop: -50, marginLeft: 280, marginRight: 40 }}>
                    <Button title="Siguiente" onPress={goToThirty} />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    bulis: {
        backgroundColor: '#C4CC00',
        borderRadius: 30,
        padding: 10,
        marginTop: 85,
        width: '50%',
        marginLeft: 100,
    },
    bulisto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

























