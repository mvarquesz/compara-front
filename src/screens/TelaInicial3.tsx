import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definição da tipagem para a navegação
type RootStackParamList = {
  TelaInicial4: undefined;
  TeladeLogin: undefined;
  TeladeCadastro1: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface OnboardingScreenProps {
  onContinue?: () => void;
  onLogin?: () => void;
  onSkip?: () => void;
}

const TelaInicial3: React.FC<OnboardingScreenProps> = ({
  onContinue = () => {},
  onLogin = () => {},
  onSkip = () => {},
}) => {
  // Aqui chamamos `useNavigation()` dentro do componente, não fora dele
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      {/* Botão para pular a introdução */}
      <TouchableOpacity onPress={() => navigation.navigate('TeladeCadastro1')} style={styles.skipButton}>
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>

      {/* Imagem principal */}
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99g3v8PKu40N2JP/image-25.png' }}
        style={styles.mainImage}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Histórico de compras e relatórios detalhados!</Text>

      {/* Descrição */}
      <Text style={styles.description}>
        Registre suas compras, acompanhe sua economia e receba relatórios para um melhor controle financeiro.
      </Text>

      {/* Indicador de progresso */}
      <View style={styles.paginationDots}>
        <Image
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99g3v8PKu40N2JP/auto-lay.png' }}
          style={styles.dots}
          resizeMode="contain"
        />
      </View>

      {/* Botões de ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.continueButton}
          onPress={() => navigation.navigate('TelaInicial4')} // Navegando para a próxima tela
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('TeladeLogin')}>
          <Text style={styles.loginButtonText}>Login</Text>
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
    padding: 24,
  },
  skipButton: {
    position: 'absolute', // Fixa o botão no canto superior esquerdo
    top: 60,
    left: 24,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  skipText: {
    fontFamily: 'OpenSans-SemiBold',
    fontSize: 14,
    lineHeight: 20,
    color: '#467A59',
    top: -55,
    right: 20,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginTop: 32,
  },
  title: {
    width: 291,
    marginTop: 18,
    fontFamily: 'Poppins-Bold',
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    letterSpacing: -0.72,
    fontWeight: 'bold', 
    color: '#121212',
  },
  description: {
    width: 285,
    marginTop: 12,
    fontFamily: 'OpenSans-Regular',
    fontSize: 14,
    lineHeight: 24,
    textAlign: 'center',
    color: '#A6A6A6',
    top: -10,
  },
  paginationDots: {
    marginTop: 28,
    height: 8,
    width: 24,
  },
  dots: {
    width: '100%',
    height: '100%',
    top: -15,
  },
  buttonContainer: {
    width: '100%',
    gap: 8,
    marginTop: 32,
    alignItems: 'center', // Garante que os botões fiquem centralizados
  },
  continueButton: {
    width: '100%', // Ajuste do tamanho do botão para caber na tela
    height: 56,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
  continueButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.3,
    color: '#121212',
  },
  loginButton: {
    width: '100%', // Ajuste do tamanho do botão para caber na tela
    height: 56,
    backgroundColor: '#FAF9FD',
    borderRadius: 48,
    borderWidth: 1,
    borderColor: '#C1DFC5',
    justifyContent: 'center',
    alignItems: 'center',
    top: -20,
  },
  loginButtonText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.3,
    color: '#467A59',
  },
});

export default TelaInicial3;
