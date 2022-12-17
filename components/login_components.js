import React from 'react';
import { View, Image, Text, StyleSheet, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>My App</Text>
      <Image style={styles.image} source={require('./my-app-logo.png')} />
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('./username-icon.png')} />
        <TextInput
          style={styles.input}
          placeholder="Usuario"
          placeholderTextColor="#999"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          returnKeyType="next"
        />
      </View>
      <View style={styles.inputContainer}>
        <Image style={styles.icon} source={require('./password-icon.png')} />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          placeholderTextColor="#999"
          secureTextEntry={true}
          returnKeyType="go"
        />
      </View>
      <Button title="Iniciar sesión" onPress={() => {}} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10
  },
  input: {
    height: 40,
    width: 300,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 10,
    borderColor: '#333',
    borderWidth: 1
  }
});

export default LoginScreen;
