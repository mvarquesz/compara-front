import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface ProductCardProps {
  image: string;
  price: string;
  name: string;
  onMoreInfo: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image = 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/pao-1.png',
  price = 'R$4,49',
  name = 'Pão de forma Baud..',
  onMoreInfo = () => {},
}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{ uri: image }} style={styles.productImage} />
      <Text style={styles.priceText}>{price}</Text>
      <Text style={styles.nameText}>{name}</Text>
      <TouchableOpacity style={styles.moreInfoButton} onPress={onMoreInfo}>
        <Text style={styles.moreInfoText}>Ver mais sobre</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: 95,
    height: 133,
    backgroundColor: '#faf9fd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#b8b8b8',
    alignItems: 'center',
    padding: 5,
    margin: 5,
  },
  productImage: {
    width: 65,
    height: 72,
    resizeMode: 'contain',
    marginVertical: 5,
  },
  priceText: {
    fontSize: 11,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#000000',
    marginVertical: 2,
  },
  nameText: {
    fontSize: 8,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#828282',
    textAlign: 'center',
    marginVertical: 2,
  },
  moreInfoButton: {
    backgroundColor: '#f0bb22a1',
    borderRadius: 5,
    paddingVertical: 2,
    paddingHorizontal: 10,
    marginTop: 5,
    top: 10,
  },
  moreInfoText: {
    fontSize: 7,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#000000',
    textAlign: 'center',
  },
});

export default ProductCard;

