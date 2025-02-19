import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';

export const MenuScreen: React.FC = () => {
    return (
        
    <ImageBackground source={require('../../../assets/img/ultimatum.jpg')} style={styles.background}>
        <View style={styles.container}>

            <Text style={styles.title}>Menu</Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Personagens</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Meta Builds</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>O Atlas</Text>
            </TouchableOpacity>
            
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        padding: 10,
        justifyContent: "center",
      },
    title: {
        fontSize: 32,
        color: '#ff4d4d',
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#ff4d4d',
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    background: {
        width: '100%',
        height: '100%',
    },
});



export default MenuScreen;