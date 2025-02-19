import { Input, Button, Image } from "@rneui/base";
import React, { useState } from "react";
import { ImageBackground, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed"; // Para ícones adicionais

export interface LoginScreenProps {}

export function Loginscreen(props: LoginScreenProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <ImageBackground source={require('./../../../assets/img/ultimatum.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Image source={require('./../../../assets/img/poe2logo.png')} style={styles.logo} />

        <Input
          placeholder="Digite seu Email"
          leftIcon={{ name: 'email', color: 'white' }}
          inputStyle={{ color: 'white' }}
          inputContainerStyle={styles.containerImput}
        />

        <Input
          placeholder="Digite sua Senha"
          secureTextEntry={!showPassword}
          leftIcon={{ name: 'lock', color: 'white' }}
          rightIcon={
            <Icon
              name={showPassword ? 'eye-off' : 'eye'}
              type="feather"
              color="white"
              onPress={() => setShowPassword(!showPassword)}
            />
          }
          inputContainerStyle={styles.containerImput}
          inputStyle={{ color: 'white' }}
        />

        <Button title="Login" buttonStyle={styles.btnLogin} />
        <Button title="Registre-se" buttonStyle={styles.btnLogin} />
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
    marginBottom: 5,
  },
  logo: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    resizeMode: 'contain',
    marginBottom: 0,
  },
});
