import React from "react";
import {
  Text,
  View,
  Image,
  TextInput
} from 'react-native';

import Logo from "../../assets/logo.png";

import { style } from "./styles";

export default function Login() {
  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
        />
        <Text>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMiddle}>
        <Text>Endereço de e-mail</Text>
        <TextInput />
        <Text>Palavra-passe</Text>
        <TextInput />
      </View>
      <View style={style.boxBottom}>
        <Text>Baixo</Text>
      </View>
    </View >
  );
}