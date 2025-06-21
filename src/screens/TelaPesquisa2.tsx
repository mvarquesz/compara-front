import React from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  TelaFiltrar: undefined; // ajuste esse nome conforme sua rota
};

const products = [
  {
    id: '1',
    name: 'Café Torrado e Moído Tradicional\n3 corações pacote 500g',
    price: 'R$12,99',
    image: require('../assets/produtos/cafe3.png'),
  },
  {
    id: '2',
    name: 'Café Pilão tradicional 200g',
    price: 'R$8,00',
    image: require('../assets/produtos/cafe-pilao.png'),
  },
  {
    id: '3',
    name: '3 Corações Café Expresso Atento\n- 10 UNIDADES',
    price: 'R$17,90',
    image: require('../assets/produtos/cafe-tres-expresso.png'),
  },
  {
    id: '4',
    name: 'Café Mellita Tradicional 500g',
    price: 'R$16,90',
    image: require('../assets/produtos/cafe-melitta.png'),
  },
  {
    id: '5',
    name: 'Café Caboclo Tradicional',
    price: 'R$6,99',
    image: require('../assets/produtos/cafe-caboclo.png'),
  },
  {
    id: '6',
    name: 'Café Pelé Extra forte 500g',
    price: 'R$17,50',
    image: require('../assets/produtos/cafe-pele.png'),
  },
];

const TelaPesquisa2: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const handleFilterPress = () => {
    navigation.navigate('TelaFiltrar'); // substitua por sua rota real
  };

  return (
    <View style={styles.container}>
      {/* Barra de pesquisa */}
      <View style={styles.searchContainer}>
        <View style={styles.inputWrapper}>
          <TextInput
            style={styles.input}
            placeholder="Café"
            placeholderTextColor="#444"
          />
          <Ionicons name="search-outline" size={20} color="#888" />
        </View>
        <TouchableOpacity style={styles.filterButton} onPress={handleFilterPress}>
          <Ionicons name="options-outline" size={22} color="#000" />
        </TouchableOpacity>
      </View>

      {/* Lista de produtos */}
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 16 }}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={item.image} style={styles.productImage} />
            <View style={styles.cardContent}>
              <Text style={styles.productName}>{item.name}</Text>
              <Text style={styles.productPrice}>{item.price}</Text>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'center',
  },
  inputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#A0D9AC',
    borderWidth: 1,
    borderRadius: 24,
    paddingHorizontal: 12,
    height: 40,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  filterButton: {
    marginLeft: 12,
  },
  card: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    alignItems: 'center',
  },
  productImage: {
    width: 60,
    height: 90,
    resizeMode: 'contain',
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productName: {
    fontSize: 14,
    color: '#333',
    marginBottom: 6,
  },
  productPrice: {
    fontSize: 16,
    fontWeight: '600',
    alignSelf: 'flex-end',
  },
});

export default TelaPesquisa2;
