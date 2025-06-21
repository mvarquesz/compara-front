import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

interface CategoryIconProps {
  categories?: Array<{
    icon: string;
    label: string;
  }>;
}

const defaultCategories = [
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/oferta-1.png',
    label: 'Ofertas'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/capturar.png',
    label: 'Hortifruti'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/acougue.png',
    label: 'Açougue'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/bebida-1.png',
    label: 'Bebidas'
  },
  {
    icon: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/produtos.png',
    label: 'Limpeza'
  }
];

const CategoryIcons: React.FC<CategoryIconProps> = ({ categories = defaultCategories }) => {
  return (
    <View style={styles.container}>
      {categories.map((category, index) => (
        <TouchableOpacity 
          key={index}
          style={styles.categoryItem}
          onPress={() => console.log(`Selected category: ${category.label}`)}
        >
          <View style={styles.iconContainer}>
            <Image
              source={{ uri: category.icon }}
              style={styles.icon}
              resizeMode="contain"
            />
          </View>
          <Text style={styles.label}>{category.label}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
    backgroundColor: '#ffffff',
    minWidth: 320,
  },
  categoryItem: {
    alignItems: 'center',
    width: 64,
  },
  iconContainer: {
    width: 58,
    height: 58,
    borderRadius: 29,
    borderWidth: 1,
    borderColor: '#467a59',
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 38,
    height: 38,
  },
  label: {
    marginTop: 5,
    fontSize: 11,
    fontFamily: 'Poppins',
    color: '#000000',
    textAlign: 'center',
  },
});

export default CategoryIcons;

