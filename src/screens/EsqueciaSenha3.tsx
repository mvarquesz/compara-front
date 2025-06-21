import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Pressable } from 'react-native';

interface NewPasswordScreenProps {
  onBack?: () => void;
  onConfirm?: (password: string, confirmPassword: string) => void;
  navigation?: any; 
}

export const EsqueciaSenha3: React.FC<NewPasswordScreenProps> = ({
  onBack = () => {},
  onConfirm = () => {},
  navigation,
}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable style={styles.backButton} onPress={() => navigation.navigate('EsqueciaSenha2')}>
          <Image 
            source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NTogzgNnZiU9gG/icon-a.png' }}
            style={styles.backIcon}
          />
        </Pressable>
      </View>

      {/* Title Section */}
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Nova Senha</Text>
        <Text style={styles.subtitle}>
          Insira uma nova senha para fazer login
        </Text>
      </View>

      {/* Password Fields */}
      <View style={styles.inputContainer}>
        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Nova Senha</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              placeholder="Digite sua senha"
              placeholderTextColor="#5F5F63"
            />
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              <Image
                source={{ uri: showPassword ? 'https://dashboard.codeparrot.ai/api/image/Z-NTogzgNnZiU9gG/eye-slas.png' : 'https://dashboard.codeparrot.ai/api/image/Z-NTogzgNnZiU9gG/eye-slas-2.png' }}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.inputWrapper}>
          <Text style={styles.inputLabel}>Confirmar Nova Senha</Text>
          <View style={styles.inputField}>
            <TextInput
              style={styles.input}
              secureTextEntry={!showConfirmPassword}
              value={confirmPassword}
              onChangeText={setConfirmPassword}
              placeholder="Confirme sua senha"
              placeholderTextColor="#5F5F63"
            />
            <TouchableOpacity onPress={() => setShowConfirmPassword(!showConfirmPassword)}>
              <Image
                source={{ uri: showConfirmPassword ? 'https://dashboard.codeparrot.ai/api/image/Z-NTogzgNnZiU9gG/eye-slas.png' : 'https://dashboard.codeparrot.ai/api/image/Z-NTogzgNnZiU9gG/eye-slas-2.png' }}
                style={styles.eyeIcon}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Confirm Button */}
      <TouchableOpacity 
        style={styles.confirmButton}
        onPress={() => onConfirm(password, confirmPassword)}
      >
        <Text style={styles.confirmButtonText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 24,
  },
  header: {
    height: 70,
    justifyContent: 'center',
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.1)',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 1,
    marginLeft: -10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  titleContainer: {
    marginTop: 16,
    gap: 8,
    paddingHorizontal: 24,
  },
  title: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 24,
    letterSpacing: -0.72,
    lineHeight: 32,
    fontWeight: 'bold',
    top: -15,
    color: '#121212',
  },
  subtitle: {
    fontFamily: 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    color: '#5F5F63',
    top: -15,
  },
  inputContainer: {
    marginTop: 40,
    gap: 16,
    paddingHorizontal: 24,
    top: -40,
  },
  inputWrapper: {
    gap: 6,
  },
  inputLabel: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#121212',
  },
  inputField: {
    height: 48,
    width: `100%`,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#467A59',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  input: {
    flex: 1,
    fontFamily: 'Roboto',
    fontSize: 14,
    color: '#121212',
  },
  eyeIcon: {
    width: 24,
    height: 24,
  },
  confirmButton: {
    height: 48,
    backgroundColor: '#C1DFC5',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginHorizontal: 24,
    top: -40,
  },
  confirmButtonText: {
    fontFamily: 'OpenSans-Bold',
    fontSize: 16,
    letterSpacing: 0.3,
    color: '#121212',
    lineHeight: 24,
  },
});

export default EsqueciaSenha3;
