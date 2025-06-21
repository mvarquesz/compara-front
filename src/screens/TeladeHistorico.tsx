import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import BottomNavigation from '../components/BottomNavigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';

// Tipagem da navegação (você pode expandir seu RootStackParamList conforme necessário)
type RootStackParamList = {
  TeladeHistorico: undefined;
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;
type RouteProps = RouteProp<RootStackParamList, 'TeladeHistorico'>;

const TeladeHistorico: React.FC = () => {

  // Dados mockados (posteriormente você pode buscar via API ou state global)
  const historicoCompras = [
    { data: '10 de maio, 2025', valor: 'R$132,50', categorias: 'Alimentos, Higiene' },
    { data: '2 de maio, 2025', valor: 'R$78,90', categorias: 'Alimentos, Limpeza' },
    { data: '23 de abril, 2025', valor: 'R$220,00', categorias: 'Higiene, Bebidas' },
    { data: '15 de abril, 2025', valor: 'R$146,70', categorias: 'Alimentos' },
  ];

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.headerText}>Histórico de compras</Text>

        {historicoCompras.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Text style={styles.dateText}>{item.data}</Text>
            <Text style={styles.amountText}>{item.valor}</Text>
            <Text style={styles.categoryText}>{item.categorias}</Text>
          </TouchableOpacity>
        ))}

      </ScrollView>
      <BottomNavigation />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 16,
    paddingBottom: 96,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  amountText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 4,
  },
  categoryText: {
    fontSize: 14,
    color: '#777',
  },
});

export default TeladeHistorico;
