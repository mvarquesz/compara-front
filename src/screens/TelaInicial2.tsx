import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Definição dos tipos da navegação
type RootStackParamList = {
  TelaInicial3: undefined;
  TeladeCadastro1: undefined;
  TeladeLogin: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

const TelaInicial2: React.FC = () => {
  // Hook useNavigation deve ser chamado dentro do componente
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      {/* Botão para pular a introdução */}
      <TouchableOpacity style={styles.skipButton} onPress={() => navigation.navigate('TeladeCadastro1')} >
        <Text style={styles.skipText}>Pular</Text>
      </TouchableOpacity>

      {/* Imagem principal */}
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99gP2s0ZhD5c3Y6/image-24.png' }}
        style={styles.mainImage}
        resizeMode="contain"
      />

      {/* Título */}
      <Text style={styles.title}>Compare preços e economize mais!</Text>
      
      {/* Descrição */}
      <Text style={styles.description}>
        O Compara+ lhe ajudará a reduzir gastos desnecessários e encontrar as melhores ofertas pertinho de você.
      </Text>

      {/* Indicador de progresso */}
      <View style={styles.paginationDots}>
        <Image
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99gP2s0ZhD5c3Y6/auto-lay.png' }}
          style={styles.dots}
          resizeMode="contain"
        />
      </View>

      {/* Botões de ação */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.continueButton}
          onPress={() => navigation.navigate('TelaInicial3')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.loginButton}
          onPress={() => navigation.navigate('TeladeLogin')}
        >
          <Text style={styles.loginButtonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Garante que o contêiner ocupe toda a tela
    backgroundColor: '#FFFFFF',
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
    paddingHorizontal: 24,
  },
  skipButton: {
    position: 'absolute', // Fixa o botão no canto superior esquerdo
    top: 60,
    left: 24,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  skipText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#467A59',
    top: -55,
    right: 20,
  },
  mainImage: {
    width: 300,
    height: 300,
    marginTop: 20,
  },
  title: {
    fontSize: 24,
    lineHeight: 32,
    textAlign: 'center',
    color: '#121212',
    letterSpacing: -0.72,
    fontWeight: 'bold', 
    marginTop: 14,
    maxWidth: 243,
  },
  description: {
    fontSize: 14,
    lineHeight: 20,
    textAlign: 'center',
    color: '#A6A6A6',
    marginTop: 20,
    maxWidth: 290,
    top: -10,
  },
  paginationDots: {
    marginTop: 28,
  },
  dots: {
    width: 24,
    height: 8,
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
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#C1DFC5',
    top: -20,
  },
  loginButtonText: {
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    letterSpacing: 0.3,
    color: '#467A59',
  },
});

export default TelaInicial2;
