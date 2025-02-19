import { Input, Button, Image } from "@rneui/base";
import React from "react";
import {ImageBackground, StyleSheet, Switch, Text, TextInput, View } from "react-native";


export interface RegisterScreenProps {

}

export function Registerscreen (props: RegisterScreenProps) {
  return (
    <ImageBackground source={require('./../../../assets/img/ultimatum.jpg')} style={styles.background}>
        <View style={styles.container}>
        <Image source={require('./../../../assets/img/poe2logo.png')} style={styles.logo}/>

            <Input placeholder="Digite seu Usuario"
            leftIcon={{ name:'person', color:'white' }}
            inputStyle={{color:'white'}}
            inputContainerStyle={styles.containerImput}
            />

            <Input placeholder="Digite seu Email"
            leftIcon={{ name:'email', color:'white' }}
            inputStyle={{color:'white'}}
            inputContainerStyle={styles.containerImput}
            />
           
            <Input placeholder="Digite sua Senha"
            secureTextEntry={true}
            leftIcon={{ name:'lock', color:'white' }}
            inputContainerStyle={styles.containerImput}
            inputStyle={{color:'white'}}
            />

            <Input placeholder="Confirme sua Senha"
            secureTextEntry={true}
            leftIcon={{ name:'lock', color:'white' }}
            inputContainerStyle={styles.containerImput}
            inputStyle={{color:'white'}}
            />

            <Button title='Registrar'
            buttonStyle={styles.btnLogin}
            />
            
            
            
        
        </View>
    </ImageBackground>
  );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        padding: 10,
        justifyContent: 'center',
    },
    loginText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 50,
        fontFamily: 'Fontin-SmallCaps',
    },
    background: {
        width: '100%',
        height: '100%',
    },
    btnLogin: {
        backgroundColor: 'red',
        color: 'white',
        padding: 10,
        borderRadius: 5,
        margin: 10,
    },
    containerImput: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        borderRadius: 30,
        padding: 5,
        marginBottom:5,
    },
    logo: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,
        resizeMode: 'contain',
        marginBottom: 0,
    },
    });