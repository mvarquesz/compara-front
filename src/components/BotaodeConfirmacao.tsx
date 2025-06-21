import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TeladeConfirmacao: undefined; // Defina a tela de destino no seu Stack Navigator
};

type NavigationProps = StackNavigationProp<RootStackParamList, 'TeladeConfirmacao'>;

interface SubmitButtonProps {
  style?: object;
}

const BotaodeConfirmacao: React.FC<SubmitButtonProps> = ({ style }) => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableOpacity 
      style={[styles.button, style]} 
      onPress={() => navigation.navigate('TeladeConfirmacao')}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>Inscrever-se</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c1dfc5',
    width: 200, // Define uma largura menor
    height: 40, // Aumentei um pouco para manter proporção
    paddingHorizontal: 20, // Reduzi o padding para evitar expansão
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center', // Centraliza dentro do container pai
    borderRadius: 20, // Para bordas arredondadas, opcional
  },
  
  buttonText: {
    color: '#121212',
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    lineHeight: 24,
    textAlign: 'center',
  }
});

export default BotaodeConfirmacao;
