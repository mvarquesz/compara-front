import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definição do tipo de navegação
type RootStackParamList = {
  TelaInicial4: undefined;
  TeladeCadastro1: undefined;
  TeladeLogin: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface OnboardingScreenProps {
  onCadastroPress?: () => void;
  onLoginPress?: () => void;
}

export const TelaInicial4: React.FC<OnboardingScreenProps> = ({
  onCadastroPress = () => {},
  onLoginPress = () => {},
}) => {
  const navigation = useNavigation<NavigationProps>(); // Agora dentro do componente

  return (
    <View style={styles.container}>
      <Image 
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99hV_8PKu40N2JQ/image-23.png' }}
        style={styles.mainImage}
      />
      
      <Text style={styles.title}>
        Receba alertas de economia e promoções!
      </Text>
      
      <Text style={styles.subtitle}>
        Tudo para ajudar você a planejar melhor seu orçamento e evitar gastos desnecessários.
      </Text>

      <View style={styles.dotContainer}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99hV_8PKu40N2JQ/auto-lay.png' }}
          style={styles.dots}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.cadastroButton}
          onPress={() => navigation.navigate('TeladeCadastro1')}
        >
          <Text style={styles.cadastroText}>Cadastro</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('TeladeLogin')}
        >
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    paddingHorizontal: 24,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginTop: 40,
    top: -20,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.72,
    lineHeight: 25,
    textAlign: 'center',
    color: '#121212',
    marginTop: 10,
    maxWidth: 280,
    top: -15,
  },
  subtitle: {
    fontFamily: 'OpenSans',
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    color: '#A6A6A6',
    marginTop: 12,
    top: -10,
    maxWidth: 243,
  },
  dotContainer: {
    marginTop: 28,
    alignItems: 'center',
  },
  dots: {
    width: 24,
    height: 8,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
    marginTop: 32,
    alignItems: 'center', // Centraliza os botões
  },
  cadastroButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
  },
  cadastroText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
    lineHeight: 24,
  },
  loginButton: {
    width: '100%',
    height: 56,
    backgroundColor: '#FAF9FD',
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#C1DFC5',
    justifyContent: 'center',
    alignItems: 'center',
    top: -15,
  },
  loginText: {
    fontFamily: 'Poppins',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#467A59',
    lineHeight: 24,
  },
});

export default TelaInicial4;
