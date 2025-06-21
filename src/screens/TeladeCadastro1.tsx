import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';

// Tipagem correta do RootStackParamList
type RootStackParamList = {
  TeladeCadastro1: undefined;
  TeladeCadastro2: { userId: number };
  TeladeLogin: undefined;
};

// Tipando a navegação
type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const TeladeCadastro1: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const navigation = useNavigation<NavigationProps>();

  const handleCadastro = async () => {
  
    if (!nome || !email || !senha) {
      Alert.alert('Erro', 'Preencha todos os campos');
      return;
    }

    try {
      const response = await axios.post('http://103.199.184.26:3020/users', {
        nome,
        email,
        senha,
      });

      const novoUsuario = response.data;

      if (response.status === 201 || response.status === 200) {
        Alert.alert('Sucesso', 'Cadastro realizado com sucesso!');
  
        // Navegamos para a próxima tela, enviando o ID do usuário
        navigation.navigate('TeladeCadastro2', {
          userId: novoUsuario.codigo,  // Supondo que seja "codigo"
        });
      } else {
        Alert.alert('Erro', 'Não foi possível realizar o cadastro');
      }
      
    } catch (error: any) {

      if (error.response) {
        if (error.response.status === 409) {
          Alert.alert('Erro', 'Este email já está em uso.');
        } else {
          Alert.alert('Erro', 'Não foi possível realizar o cadastro');
        }
      } else {
        Alert.alert(
          'Erro de conexão', 
          'Verifique sua internet e tente novamente.'
        );
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Seja bem-vindo!</Text>
        <Text style={styles.subtitle}>Crie sua conta</Text>
      </View>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Nome Completo</Text>
          <TextInput
            style={styles.input}
            value={nome}
            onChangeText={setNome}
            placeholder="Digite seu nome"
          />
        </View>

        <View style={styles.inputGroup}>
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

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Senha</Text>
          <View style={styles.passwordContainer}>
            <TextInput
              style={[styles.input, styles.passwordInput]}
              value={senha}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              secureTextEntry={!showPassword}
            />
            <TouchableOpacity 
              style={styles.eyeIcon}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99xDP8PKu40N2JY/eye-slas.png' }} style={styles.iconImage} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={handleCadastro}>  
          <Text style={styles.buttonText}>Próximo</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('TeladeLogin')}>  
          <Text style={styles.loginText}>
            Já tem uma conta? <Text style={styles.loginLink}>Faça login</Text>
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 32,
    gap: 20,
    top: -70,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.72,
    lineHeight: 27,
    color: '#121212',
    top:20,
  },
  subtitle: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 15,
    color: '#5F5F63',
    top: 15,
  },
  formContainer: {
    gap: 16,
  },
  inputGroup: {
    gap: 6,
  },
  label: {
    fontFamily: 'Open Sans',
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#121212',
    top: -65
  },
  input: {
    height: 48,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontFamily: 'Open Sans',
    top: -65,
  },
  passwordContainer: {
    position: 'relative',
  },
  passwordInput: {
    paddingRight: 48, // Espaço para o ícone de olho
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: -53,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  iconImage: {
    width: 24,
    height: 24,
  },
  bottomContainer: {
    marginTop: 32,
    gap: 24,
    alignItems: 'center',
    top: -70,
  },
  button: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
  },
  loginText: {
    fontFamily: 'Roboto',
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#A6A6A6',
    textAlign: 'center',
    top: -10,
  },
  loginLink: {
    color: '#2E7D32',
    fontWeight: '700',
  },
});

export default TeladeCadastro1;
