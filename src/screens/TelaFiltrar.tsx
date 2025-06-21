import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Picker } from '@react-native-picker/picker';
import { RadioButton } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';
import { Ionicons } from '@expo/vector-icons';

const TelaFiltrar: React.FC = () => {
  const navigation = useNavigation();

  const [estado, setEstado] = useState('');
  const [cidade, setCidade] = useState('');
  const [bairro, setBairro] = useState('');
  const [aberta, setAberta] = useState(false);
  const [fechada, setFechada] = useState(false);
  const [ordenarLojas, setOrdenarLojas] = useState('');

  const [categoria, setCategoria] = useState('');
  const [ordenarProdutos, setOrdenarProdutos] = useState('');

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Filtro</Text>
      </View>

      {/* Buscar lojas */}
      <Text style={styles.sectionTitle}>Buscar lojas</Text>
      <Text style={styles.subTitle}>Filtrar por</Text>

      <View style={styles.row}>
        <View style={styles.inputWrapper}>
          <Picker
            selectedValue={estado}
            onValueChange={(itemValue) => setEstado(itemValue)}>
            <Picker.Item label="Estado" value="" />
            <Picker.Item label="SP" value="SP" />
            <Picker.Item label="RJ" value="RJ" />
          </Picker>
        </View>

        <View style={styles.inputWrapper}>
          <Picker
            selectedValue={cidade}
            onValueChange={(itemValue) => setCidade(itemValue)}>
            <Picker.Item label="Cidade" value="" />
            <Picker.Item label="São Paulo" value="São Paulo" />
            <Picker.Item label="Rio de Janeiro" value="Rio de Janeiro" />
          </Picker>
        </View>
      </View>

      <View style={styles.inputWrapper}>
        <Picker
          selectedValue={bairro}
          onValueChange={(itemValue) => setBairro(itemValue)}>
          <Picker.Item label="Bairro" value="" />
          <Picker.Item label="Centro" value="Centro" />
          <Picker.Item label="Jardins" value="Jardins" />
        </Picker>
      </View>

      <View style={styles.checkboxRow}>
        <View style={styles.checkboxItem}>
          <CheckBox value={aberta} onValueChange={setAberta} />
          <Text>Aberta</Text>
        </View>
        <View style={styles.checkboxItem}>
          <CheckBox value={fechada} onValueChange={setFechada} />
          <Text>Fechada</Text>
        </View>
      </View>

      <Text style={styles.subTitle}>Ordenar por</Text>
      <RadioButton.Group
        onValueChange={(value) => setOrdenarLojas(value)}
        value={ordenarLojas}>
        <View style={styles.radioRow}>
          <View style={styles.radioItem}>
            <RadioButton value="proximidade" />
            <Text>Proximidade</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="recentes" />
            <Text>Lojas recentes</Text>
          </View>
        </View>
      </RadioButton.Group>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aplicar filtros</Text>
      </TouchableOpacity>

      {/* Buscar produtos */}
      <Text style={styles.sectionTitle}>Buscar produtos</Text>
      <Text style={styles.subTitle}>Filtrar por</Text>

      <View style={styles.inputWrapper}>
        <Picker
          selectedValue={categoria}
          onValueChange={(itemValue) => setCategoria(itemValue)}>
          <Picker.Item label="Categorias" value="" />
          <Picker.Item label="Alimentos" value="Alimentos" />
          <Picker.Item label="Bebidas" value="Bebidas" />
        </Picker>
      </View>

      <Text style={styles.subTitle}>Ordenar por</Text>
      <RadioButton.Group
        onValueChange={(value) => setOrdenarProdutos(value)}
        value={ordenarProdutos}>
        <View style={styles.radioColumn}>
          <View style={styles.radioItem}>
            <RadioButton value="lojas_proximas" />
            <Text>Lojas próximas</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="precos_baixos" />
            <Text>Preços mais baixos</Text>
          </View>
          <View style={styles.radioItem}>
            <RadioButton value="recentes" />
            <Text>Recentes</Text>
          </View>
        </View>
      </RadioButton.Group>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Aplicar filtros</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 24,
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 12,
  },
  inputWrapper: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 24,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 10,
  },
  checkboxRow: {
    flexDirection: 'row',
    marginTop: 12,
    gap: 20,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  radioRow: {
    flexDirection: 'row',
    gap: 20,
    marginTop: 8,
  },
  radioColumn: {
    flexDirection: 'column',
    gap: 10,
    marginTop: 8,
  },
  radioItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  button: {
    marginTop: 16,
    backgroundColor: '#C1DFC5',
    paddingVertical: 12,
    borderRadius: 24,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#121212',
  },
});

export default TelaFiltrar;
