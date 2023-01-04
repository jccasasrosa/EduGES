import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, PixelRatio, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, TouchableOpacity, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const fontScale = PixelRatio.getPixelSizeForLayoutSize(6.5);
const fontScaleTitle = PixelRatio.getPixelSizeForLayoutSize(9.5);

export default function LoginScreen(props) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const login = props.route.params.login;
  const actualizaLogin = props.route.params.actualizaLogin;
  const actualizaTitulo = props.route.params.cambiaTitulo;
  const actualizaVistaNum = props.route.params.cambiaVista;

  const vistaHome = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Home' }],
    });

    actualizaLogin(false);
    actualizaTitulo('Centro Jabalcuz');
    actualizaVistaNum('Home');
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView style={styles.container} keyboardVerticalOffset = {100} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled>
        <Text style={styles.title}>EduGES</Text>
        <Image style={styles.image} source={require('../assets/principal_logo.png')} />
        <View style={styles.contenedor}>
          <View style={styles.inputContainer}>
            <Image style={styles.icon} source={require('../assets/persona.png')} />
            <TextInput
              style={styles.input}
              placeholder="Usuario"
              placeholderTextColor="#999"
              keyboardType="email-address"
              autoCapitalize="none"
              autoCorrect={false}
              returnKeyType="next"
              value={username}
              onChangeText={(text) => setUsername(text)}
            />
          </View>
          <View style={styles.inputContainer}>
            <Image style={styles.icon} source={require('../assets/lock_black.png')} />
            <TextInput
              style={styles.input}
              placeholder="Contraseña"
              placeholderTextColor="#999"
              secureTextEntry={true}
              returnKeyType="go"
              value={password}
              onChangeText={(text) => setPassword(text)}
            />
          </View>
          <TouchableOpacity style={styles.boton}  onPress={vistaHome}>
            <Text style={styles.textBoton}>Entrar</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //backgroundColor: 'blue',
  },
  title: {
    fontSize: fontScaleTitle,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  contenedor: {
    justifyContent: 'center',
    //paddingHorizontal: 25,
  },
  boton: {
    borderRadius: 20,
    borderWidth: 1,
    marginTop: '3%',
    padding: '5%',
    backgroundColor: '#072838'
  },
  textBoton: {
    textAlign: "center",
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontScale,
  },
  image: {
    height: '30%',
    width: '100%',
    resizeMode: 'contain',
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: '3%',
    width: '90%',
  },
  icon: {
    height: '5%',
    width: '8%',
    resizeMode: 'contain',
    aspectRatio: 1,
    marginRight: 10,
    paddingBottom: 60,
  },
  input: {
    height: '90%',
    width: '85%',
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1,
    fontSize: fontScale,
    paddingLeft: 10,
  }
});