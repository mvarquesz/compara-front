import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput, Image } from 'react-native';

interface EsqueciaSenha2Props {
  onSubmit?: (code: string) => void;
  email?: string;
  navigation?: any; // Adicionando a tipagem para o navigation
}

const EsqueciaSenha2: React.FC<EsqueciaSenha2Props> = ({
  onSubmit = () => {},
  email = "your@email.com",
  navigation, // Recebendo navigation como uma prop
}) => {
  const [code, setCode] = useState(['', '', '', '']);
  const inputs = Array(4).fill(0);

  const handleCodeChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleContinue = () => {
    onSubmit(code.join(''));
    // Verificar se a navegação está disponível antes de tentar navegar
    if (navigation) {
      navigation.navigate('EsqueciaSenha3');
    }
  };

  const handleResend = () => {
    // Implement resend logic
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton}  onPress={() => navigation.navigate('EsqueciaSenha')}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NRUgzgNnZiU9gE/icon-a.png' }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      <View style={styles.headerContainer}>
        <Text style={styles.title}>Código de Verificação</Text>
        <Text style={styles.subtitle}>
          Insira o código de 4 dígitos que enviamos{'\n'}para o Email.
        </Text>
      </View>

      <View style={styles.inputContainer}>
        {inputs.map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
            onChangeText={(value) => handleCodeChange(value, index)}
            value={code[index]}
          />
        ))}
      </View>

      <TouchableOpacity onPress={handleResend}>
        <Text style={styles.resendText}>Reenviar</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.continueButton}
        onPress={handleContinue} // Corrigindo o onPress
      >
        <Text style={styles.continueText}>Continuar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    borderWidth: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    top: 15,
    left: 16,
  },
  backIcon: {
    width: 24,
    backgroundColor: '#FFFFFF',
    height: 24,
    
  },
  headerContainer: {
    alignItems: 'center',
    marginBottom: 50,
    height: 70,
    lineHeight: 100,
    top: -150,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    letterSpacing: -0.72,
    fontWeight: 'bold',
    color: '#121212',
    textAlign: 'center',
    lineHeight: 40,
    height: -20,
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    color: '#5F5F63',
    textAlign: 'center',
    lineHeight: 20,
    height: 70,
    top: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 10,
    top: -150,
    marginBottom: 20,
  },
  input: {
    width: 52,
    height: 52,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#000000',
    textAlign: 'center',
    fontSize: 16,
    padding: 10,
  },
  resendText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '600',
    color: '#5F5F63',
    textAlign: 'center',
    marginBottom: 39,
    lineHeight: 20,
    top: -150,
    left: 90,
  },
  continueButton: {
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    height: 48,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    top: -150,
  },
  continueText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    letterSpacing: 0.3,
    color: '#121212',
    lineHeight: 24,
  },
});

export default EsqueciaSenha2;
