import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { ForgetPasswordForm, ForgetPasswordScreenProps, ForgetPasswordScreenState } from './ForgetPassword.types';

const ForgetPasswordScreen: React.FC<ForgetPasswordScreenProps> = ({ navigation }) => {
  const [form, setForm] = useState<ForgetPasswordForm>({ email: '' });
  const [state, setState] = useState<ForgetPasswordScreenState>({ isLoading: false });

  const handleLogin = () => {
    setState({ ...state, isLoading: true });
    navigation.navigate('Dashboard');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={form.email}
        onChangeText={(text) => setForm({ ...form, email: text })}
      />
      <Button title="Login" onPress={handleLogin} disabled={state.isLoading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 10,
  },
});

export default ForgetPasswordScreen;
