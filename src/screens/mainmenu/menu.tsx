import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export const MenuScreen: React.FC = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Menu</Text>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Option 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Option 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Option 3</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1a1a1a',
        justifyContent: 'center',
        alignItems: 'center',
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
});

export default MenuScreen;