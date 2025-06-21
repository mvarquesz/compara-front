import React from 'react';
import { View, Text, TextInput, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

// Tipo da pilha de navegação — personalize conforme seu projeto
type RootStackParamList = {
  TelaFiltrar: undefined; // substitua 'Filtro' pelo nome da tela de filtro
};

const recentItems = ['Leite em pó', 'Café', 'Arroz', 'Sabão em Barra'];

const TelaPesquisa1: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFilterPress = () => {
    navigation.navigate('TelaFiltrar'); // substitua 'Filtro' pelo nome exato da sua tela de filtro
  };

  return (
    <View style={styles.container}>
      {/* Barra de busca com ícone de filtro */}
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <Ionicons name="search-outline" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            style={styles.input}
            placeholder="Pesquisar"
            placeholderTextColor="#888"
          />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <Ionicons name="options-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Lista de recentes */}
      <Text style={styles.sectionTitle}>Mais recentes</Text>
      <FlatList
        data={recentItems}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Ionicons name="time-outline" size={20} color="#444" />
            <Text style={styles.itemText}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 40,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#A0D9AC',
    borderRadius: 24,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    marginLeft: 8,
  },
  searchIcon: {
    marginLeft: 4,
  },
  filterButton: {
    marginLeft: 12,
    padding: 4,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  itemText: {
    marginLeft: 8,
    fontSize: 15,
    color: '#333',
  },
});

export default TelaPesquisa1;
