import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  EsqueciaSenha: undefined;
  TeladeCadastro1: undefined;
  TelaHome: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface TeladeLoginProps {
  onLogin?: () => void;
  onSignUp?: () => void;
  onForgotPassword?: () => void;
}

const TeladeLogin: React.FC<TeladeLoginProps> = ({ 
  onLogin = () => {}, 
  onSignUp = () => {}, 
  onForgotPassword = () => {} 
}) => {
  const navigation = useNavigation<NavigationProps>();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Bem-vindo de volta!</Text>
        <Text style={styles.subtitle}>Entre na sua conta</Text>
      </View>

      <View style={styles.inputContainer}>
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

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Senha</Text>
        <View style={styles.passwordContainer}>
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Digite sua senha"
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity 
            style={styles.eyeIcon}
            onPress={() => setShowPassword(!showPassword)}
          >
            <Image 
              source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99rg_8PKu40N2JS/eye-slas.png' }}
              style={styles.icon}
            />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('EsqueciaSenha')} style={styles.forgotPasswordButton}>
        <Text style={styles.forgotPassword}>Esqueceu sua senha?</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('TelaHome')}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.exitButton} onPress={() => {}}>
        <Text style={styles.exitButtonText}>Sair</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.signUpContainer} 
        onPress={() => navigation.navigate('TeladeCadastro1')}
      >
        <Text style={styles.signUpText}>Não tem uma conta? Inscreva-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
    paddingTop: 10,
    justifyContent: 'center',
  },
  headerContainer: {
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.72,
    lineHeight: 32,
    color: '#121212',
    marginBottom: 8,
    top: -50,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 24,
    color: '#5F5F63',
    top: -55,
  },
  inputContainer: {
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#121212',
    marginBottom: 6,
    top: -65,
  },
  input: {
    height: 48,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    top: -65,
  },
  passwordContainer: {
    position: 'relative',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
    top: -53,
  },
  icon: {
    width: 24,
    height: 24,
  },
  forgotPasswordButton: {
    marginTop: 10,
    top: -75,
  },
  forgotPassword: {
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 20,
    color: '#467A59',
    textAlign: 'center',
  },
  loginButton: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
    top: -70,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
  },
  exitButton: {
    height: 48,
    backgroundColor: '#FAF9FD',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    borderWidth: 1,
    borderColor: '#C1DFC5',
    top: -70,
  },
  exitButtonText: {
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#3E6B4E',
  },
  signUpContainer: {
    marginTop: 16,
    alignItems: 'center',
    top: -70,
  },
  signUpText: {
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 24,
    color: '#A6A6A6',
  },
});

export default TeladeLogin;
