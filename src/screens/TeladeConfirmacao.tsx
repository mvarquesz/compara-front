import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  TelaHome: undefined;
  TeladeCadastro2: { userId: number };
  TeladeConfirmacao: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'TeladeCadastro2'>;

// ✅ Adicionando a interface que estava ausente
interface EmailConfirmationProps {
  email?: string;
  onConfirm?: () => void;
  onResend?: () => void;
  onBack?: () => void;
}

const TeladeConfirmacao: React.FC<EmailConfirmationProps> = ({
  email = 'nome@gmail.com',
  onConfirm = () => {},
  onResend = () => {},
  onBack = () => {},
}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const [focusedIndex, setFocusedIndex] = useState(0);
  
  // ✅ Corrigido: Definindo a variável navigation
  const navigation = useNavigation<NavigationProps>();

  const handleCodeChange = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={onBack}>
          <Text style={styles.backIcon}>←</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>Confirmação de Email</Text>
        <Text style={styles.subtitle}>
          Por favor, insira o código que enviamos para {email}
        </Text>

        <View style={styles.codeContainer}>
          {code.map((digit, index) => (
            <TextInput
              key={index}
              style={[
                styles.codeInput,
                focusedIndex === index && styles.codeInputFocused,
              ]}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              onFocus={() => setFocusedIndex(index)}
            />
          ))}
        </View>

        <TouchableOpacity onPress={onResend}>
          <Text style={styles.resendText}>
            Não recebeu o código? <Text style={styles.resendLink}>Reenviar</Text>
          </Text>
        </TouchableOpacity>

        {/* ✅ Corrigido: Removido '>' extra e adicionado navigation */}
        <TouchableOpacity 
          style={styles.confirmButton}
          onPress={() => navigation.navigate('TelaHome')}> 
          <Text style={styles.confirmButtonText}>Confirmar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
  },
  header: {
    height: 20,
    paddingHorizontal: 10,
    justifyContent: 'flex-end',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  backIcon: {
    fontSize: 24,
    color: '#121212',
  },
  content: {
    paddingHorizontal: 16,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    letterSpacing: -0.72,
    color: '#121212',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#A6A6A6',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 70,
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginBottom: 150,
  },
  codeInput: {
    width: 52,
    height: 52,
    backgroundColor: '#C1DFC5',
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 24,
    fontFamily: 'Open Sans',
    color: '#121212',
    padding: 10,
  },
  codeInputFocused: {
    borderWidth: 1,
    borderColor: '#467A59',
  },
  resendText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    color: '#A6A6A6',
    marginBottom: 50,
  },
  resendLink: {
    color: '#467A59',
    textDecorationLine: 'underline',
  },
  confirmButton: {
    width: '100%',
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  confirmButtonText: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#121212',
  },
});

export default TeladeConfirmacao;
