import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

interface SavedItemsSectionProps {
  style?: ViewStyle;
}

const SavedItemsSection: React.FC<SavedItemsSectionProps> = ({ style }) => {
  const savedItems = [
    {
      id: 1,
      image: 'https://dashboard.codeparrot.ai/api/image/Z-Sf5h_Ow-G566nQ/cafe-1.png',
      title: '3 corações Café torrado e Moído, 500g',
      store: 'de Atacadão',
      price: '',
    },
    {
      id: 2,
      image: 'https://dashboard.codeparrot.ai/api/image/Z-Sf5h_Ow-G566nQ/51-f-hml-uy.png',
      title: 'MEU BIJU Feijão Preto, 1kg',
      store: 'de Super Nova',
      price: 'R$5,99',
    }
  ];

  return (
    <View style={[styles.container, style]}>
      {savedItems.map((item) => (
        <View key={item.id} style={styles.itemCard}>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: item.image }}
              style={styles.itemImage}
              resizeMode="contain"
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.store}>{item.store}</Text>
            {item.price && <Text style={styles.price}>{item.price}</Text>}
            <Text style={styles.savedText}>Salvo em lista</Text>
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 320,
    flexDirection: 'column',
    gap: 10,
  },
  itemCard: {
    width: '100%',
    height: 114,
    backgroundColor: '#faf9fd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    flexDirection: 'row',
    padding: 8,
    alignItems: 'center',
  },
  imageContainer: {
    width: 53,
    height: 98,
    marginRight: 10,
    justifyContent: 'center',
  },
  itemImage: {
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    height: '100%',
    justifyContent: 'space-between',
    paddingVertical: 6,
  },
  title: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    letterSpacing: 0.5,
    lineHeight: 24,
    color: '#000000',
  },
  store: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    letterSpacing: 0.5,
    lineHeight: 24,
    color: '#828282',
  },
  price: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    letterSpacing: 0.5,
    lineHeight: 24,
    color: '#000000',
  },
  savedText: {
    fontFamily: 'Open Sans',
    fontSize: 10,
    fontWeight: '600',
    letterSpacing: 0.5,
    lineHeight: 24,
    color: '#7a86ae',
  },
});

export default SavedItemsSection;
