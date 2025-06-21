import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import { useNavigation } from '@react-navigation/native';

const TeladeLista: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        
        {/* Botão + para adicionar nova lista */}
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => navigation.navigate('NovaLista' as never)}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Listas</Text>

        {/* Lista de categorias */}
        <View style={styles.listCard}>
          <Image
            source={{ uri: 'https://product-data.raiadrogasil.io/images/3490390.webp' }}
            style={styles.listImage}
          />
          <Text style={styles.listText}>Higiene pessoal</Text>
        </View>

        <TouchableOpacity>
          <Text style={styles.seeAll}>Ver todas as listas</Text>
        </TouchableOpacity>

        {/* Filtros de listas */}
        <Text style={styles.subtitle}>Todos salvos</Text>
        <View style={styles.filterRow}>
          <FilterItem
            uri="https://images.unsplash.com/photo-1615484477739-d9b0bdbd5e0a?auto=format&fit=crop&w=200"
            label="Tudo"
          />
          <FilterItem
            uri="https://images.unsplash.com/photo-1510626176961-4bfb7c88edcb?auto=format&fit=crop&w=200"
            label="O preço caiu"
          />
        </View>

        {/* Itens salvos */}
        <SavedItem
          uri="https://mercafefaststore.vtexassets.com/arquivos/ids/554739/3C-TORRADO-MOIDO-TRADICIONAL.png?v=638666755937630000"
          name="3 corações Café torrado e Moído, 500g"
          store="de Atacadão"
          price="R$12,99"
        />

        <SavedItem
          uri="https://josapar.vteximg.com.br/arquivos/ids/157478/50315_1.jpg?v=638545905974700000"
          name="MEU BIJU Feijão Preto, 1kg"
          store="de Super Nova"
          price="R$5,99"
        />

      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

// Componente de filtro rápido
const FilterItem = ({ uri, label }: { uri: string; label: string }) => (
  <View style={styles.filterItem}>
    <Image source={{ uri }} style={styles.filterImage} />
    <Text>{label}</Text>
  </View>
);

// Componente de itens salvos
const SavedItem = ({ uri, name, store, price }: { uri: string; name: string; store: string; price: string }) => (
  <View style={styles.savedItemCard}>
    <Image source={{ uri }} style={styles.savedItemImage} />
    <View style={styles.savedItemInfo}>
      <Text style={styles.savedItemTitle}>{name}</Text>
      <Text style={styles.savedItemStore}>{store}</Text>
      <Text style={styles.savedItemPrice}>{price}</Text>
      <Text style={styles.savedItemList}>Salvo em lista</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContainer: { flexGrow: 1, paddingBottom: 96, paddingHorizontal: 16 },
  addButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    backgroundColor: '#fff',
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#aaa',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },
  addButtonText: { fontSize: 24, fontWeight: 'bold' },
  title: { fontSize: 24, fontWeight: 'bold', marginTop: 70, marginBottom: 16 },
  listCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  listImage: { width: 50, height: 80, resizeMode: 'contain', marginRight: 10 },
  listText: { fontSize: 18 },
  seeAll: { color: '#2E7D32', marginBottom: 10 },
  subtitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  filterRow: { flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 20 },
  filterItem: { alignItems: 'center', marginRight: 16 },
  filterImage: { width: 70, height: 70, borderRadius: 10, marginBottom: 5 },
  savedItemCard: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 10,
    marginBottom: 16,
  },
  savedItemImage: { width: 80, height: 80, borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
  savedItemInfo: { flex: 1, padding: 10 },
  savedItemTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  savedItemStore: { fontSize: 12, color: '#666', marginBottom: 4 },
  savedItemPrice: { fontSize: 16, fontWeight: 'bold', marginBottom: 4 },
  savedItemList: { fontSize: 12, color: '#666' },
});

export default TeladeLista;
