import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ActivityIndicator
} from 'react-native';

import {
  Mail,
  Eye
} from 'lucide-react-native';

import Logo from "../../assets/logo.png";

import { style } from "./styles";
import { themes } from "../../global/themes";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  async function getLogin() {
    setLoading(true);

    try {

      if (!email || !password) {

        setLoading(false);
        return Alert.alert('Atenção', 'Digite o Email e a Password!');
      }

      setTimeout(() => {
        setLoading(false);
        if (email !== 'benjamimrinel192@gmail.com' || password !== '1234') {
          return Alert.alert('Acesso não autorizado!', 'Palavra passe ou email incorreto!');
        } else {

          Alert.alert('Logado', 'Login realizado com sucesso');
        }

      }, 3000);

    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um erro inexperado');
    }
  }

  return (
    <View style={style.container}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Bem vindo de volta!</Text>
      </View>
      <View style={style.boxMiddle}>
        <Text style={style.inputText}>Endereço de e-mail</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={email}
            onChangeText={setEmail}
          />
          <Mail size={20} color={themes.colors.secondary} />
        </View>
        <Text style={style.inputText}>Palavra-passe</Text>
        <View style={style.boxInput}>
          <TextInput
            style={style.input}
            value={password}
            onChangeText={setPassword}
          />
          <Eye size={20} color={themes.colors.secondary} />
        </View>
      </View>
      <View style={style.boxBottom}>
        <TouchableOpacity
          style={style.button}
          onPress={() => getLogin()}
        >
          {
            loading ?
              <ActivityIndicator size="small" color={'white'} />
              :
              <Text style={style.textButton}>Entrar</Text>
          }

        </TouchableOpacity>
      </View>
      <Text style={style.TextBotton}>Não tem conta? <Text style={{ color: themes.colors.primary }}>Crie agora!</Text></Text>
    </View >
  );
}