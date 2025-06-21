import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import axios from 'axios';

// Tipagem do stack com o parâmetro userId
type RootStackParamList = {
  TeladeCadastro1: undefined;
  TeladeCadastro2: { userId: number };
  TeladeLogin: undefined;
  TeladeConfirmacao: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'TeladeCadastro2'>;

const TeladeCadastro2: React.FC = () => {
  const [cep, setCep] = useState('');
  const [endereco, setEndereco] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUf] = useState('');

  const navigation = useNavigation<NavigationProps>();
  const route = useRoute<RouteProps>();
  const { userId } = route.params; // ← recebendo o ID da navegação

  const handleCadastro = async () => {
    if (!cep || !endereco || !bairro || !cidade || !uf) {
      Alert.alert("Erro", "Preencha todos os campos");
      return;
    }

    try {
      // Faz um PUT no usuário existente, enviando os dados adicionais
      await axios.put(`http://103.199.184.26:3020/users/${userId}`, {
        cep,
        endereco,
        bairro,
        cidade,
        uf,
      });

      Alert.alert("Sucesso", "Cadastro finalizado com sucesso!");
      navigation.navigate('TeladeLogin'); // Ou tela de boas-vindas, etc.

    } catch (error) {
      console.error("Erro ao atualizar cadastro:", error);
      Alert.alert("Erro", "Não foi possível concluir o cadastro");
    }
  };

  return (
    <View style={styles.container}>
      {/* Botão de Voltar */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-NRUgzgNnZiU9gE/icon-a.png' }} 
          style={styles.backIcon} 
        />
      </TouchableOpacity>

      <View style={styles.formContainer}>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>CEP</Text>
          <TextInput
            style={styles.input}
            value={cep}
            onChangeText={setCep}
            placeholder="Digite seu CEP"
            keyboardType="numeric"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Endereço</Text>
          <TextInput
            style={styles.input}
            value={endereco}
            onChangeText={setEndereco}
            placeholder="Digite seu endereço"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Bairro</Text>
          <TextInput
            style={styles.input}
            value={bairro}
            onChangeText={setBairro}
            placeholder="Digite seu bairro"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>Cidade</Text>
          <TextInput
            style={styles.input}
            value={cidade}
            onChangeText={setCidade}
            placeholder="Digite sua cidade"
          />
        </View>

        <View style={styles.inputGroup}>
          <Text style={styles.label}>UF</Text>
          <TextInput
            style={styles.input}
            value={uf}
            onChangeText={setUf}
            placeholder="Digite seu estado (UF)"
            maxLength={2}
            autoCapitalize="characters"
          />
        </View>
      </View>

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TeladeConfirmacao')}>    
          <Text style={styles.buttonText}>Próximo</Text>
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
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.1)',
    position: 'absolute',
    top: 60,
    left: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
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
  },
  input: {
    height: 48,
    backgroundColor: '#FAFAFA',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontFamily: 'Open Sans',
  },
  bottomContainer: {
    marginTop: 32,
    alignItems: 'center',
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
});

export default TeladeCadastro2;

