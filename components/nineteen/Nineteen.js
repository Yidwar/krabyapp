import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, StatusBar, Button } from 'react-native';
import Header from '../../components/header/Header';
import { CheckBox } from 'react-native-elements';

export default function Nineteen({ navigation }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };

    const handleButtonPress = () => {
        // Manejar la acción del botón aquí
        console.log('Botón presionado');
    };
    const goToTwenty = () => {
        navigation.navigate('Veinte');
    }

    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="#E26800" barStyle="light-content" />
            <Header />
            <View>
                <View style={styles.background}>
                    <ImageBackground source={require("../../assets/pizza.png")} style={styles.ImageBackground}>
                        <View style={styles.overlay}>
                            <View style={styles.imagen}>
                                <Image source={require('../../assets/nota.png')} />
                            </View>
                            <View style={styles.containertexto}>
                                <Text style={[styles.text, { marginTop: -160 }]}>
                                    '!Ya los cocineros están en marcha! Dentro de unos minutos, estará listo tu pedido'.
                                </Text>
                            </View>
                            <View style={styles.checkboxContainer}>
                                <View style={styles.checkboxTextContainer}>
                                    <CheckBox
                                        checked={isChecked}
                                        onPress={handleCheckboxChange}
                                        containerStyle={styles.checkBox}
                                    />
                                    <Text style={styles.checkboxText}>Notificarme cuando esté listo mi pedido.</Text>
                                </View>
                            </View>
                            <TouchableOpacity style={styles.bulis} onPress={handleButtonPress}>
                                <Text style={styles.bulisto}>¡Listo!</Text>
                            </TouchableOpacity>
                        </View>
                    </ImageBackground>
                </View>
            </View>
            <View style={{ marginTop: -130, marginLeft: 280, marginRight: 40 }}>
                <Button title="Siguiente" onPress={goToTwenty} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    head: {
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
    logo: {
        flex: 1,
        width: 30,
        height: 30,
        resizeMode: 'contain',
        alignItems: 'center',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
    },
    ImageBackground: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -7
    },
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingVertical: 30,
        paddingHorizontal: 100,
        marginTop: -1,
    },
    text: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    burea: {
        backgroundColor: '#C7F203',
        borderRadius: 30,
        padding: 10,
        marginTop: -50,
        width: '50%',
        marginLeft: 100,
    },
    butex: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    imagen: {
        width: '50%',
        height: '50%',
        alignItems: 'center',
        marginTop: 50,
        paddingVertical: -600,
    },
    bulis: {
        backgroundColor: '#C7F203',
        borderRadius: 30,
        padding: 10,
        marginTop: 30,
        width: 210,
        alignSelf: 'center',
    },
    bulisto: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -40,
        marginLeft: -16,
    },
    checkBox: {
        marginHorizontal: 12,
    },
    checkboxTextContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -20,
        marginTop: -160,
    },
    checkboxText: {
        fontSize: 12,
        color: 'white',
        marginLeft: -17,
        marginTop: -2,
    },
});
