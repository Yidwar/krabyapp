import React from 'react';
import { StyleSheet, View, Image, StatusBar } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Header() {
    return (
        <View style={styles.head}>
            <View style={styles.iconsContainer}>
                <Icon style={styles.icon} name="notifications-outline" size={30} color="white" />
                <Icon style={styles.icon} name="cart-outline" size={30} color="white" />
            </View>
            <Image style={styles.logo} source={require('../../assets/logo.png')} />
            <View style={styles.iconsContainer}>
                <Icon style={styles.icon} name="location-outline" size={30} color="white" />
                <Icon style={styles.icon} name="ellipsis-vertical" size={30} color="white" />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    head: {
        height: '10%',
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
});