import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';


type RootStackParamList = {
  TeladeCadastro1: undefined;
  TeladeCadastro2: { userId: number };
  TeladeLogin: undefined;
  EsqueciaSenha2: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const EsqueciaSenha = () => {
  const navigation = useNavigation<NavigationProps>();
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    console.log('Email enviado:', email);
    navigation.navigate('EsqueciaSenha2');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.navigate('TeladeLogin')}
        >
          <Image
            source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NHX94gt92eP1Wu/icon-a.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>

      {/* Title */}
      <Text style={styles.title}>Esqueceu sua senha?</Text>

      {/* Illustration */}
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NHX94gt92eP1Wu/image-27.png' }}
        style={styles.illustration}
      />

      {/* Form */}
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite seu email"
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity 
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.buttonText}>Enviar código</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
  },
  header: {
    height: 20,
    justifyContent: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
  },
  backIcon: {
    width: 24,
    height: 24,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#121212',
    marginTop: 32,
    textAlign: 'center',
  },
  illustration: {
    width: 320,
    height: 280,
    alignSelf: 'center',
    marginVertical: 20,
  },
  formContainer: {
    marginTop: 20,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
  },
  input: {
    height: 48,
    borderWidth: 1,
    borderColor: '#467A59',
    borderRadius: 8,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 16,
    marginTop: 6,
  },
  submitButton: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#121212',
    textAlign: 'center',
  },
});

export default EsqueciaSenha;
