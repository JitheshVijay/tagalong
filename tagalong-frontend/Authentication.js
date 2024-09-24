import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';

const Authentication = ({ navigation, setIsAuthenticated }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in both fields');
      return;
    }
    if (email === 'test@example.com' && password === 'password123') {
      setIsAuthenticated(true);
      navigation.replace('Dashboard');
    } else {
      Alert.alert('Error', 'Invalid login credentials');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Tagalong</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        secureTextEntry
        onChangeText={setPassword}
      />
      <Button title="Log In" onPress={handleLogin} />
      <Text style={styles.signUpText}>Don't have an account? Sign up now!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  signUpText: {
    marginTop: 20,
    textAlign: 'center',
    color: '#007AFF',
  },
});

export default Authentication;
