import React from 'react';
import { View, Text, Image, StyleSheet, ViewStyle } from 'react-native';

interface CategoryCardProps {
  style?: ViewStyle;
  title?: string;
  imageUrl?: string;
}

const CategoryCard2: React.FC<CategoryCardProps> = ({
  style,
  title = "Higiene pessoal",
  imageUrl = "https://dashboard.codeparrot.ai/api/image/Z-Sf5h_Ow-G566nQ/higiene.png"
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image 
        source={{ uri: imageUrl }}
        style={styles.image}
        resizeMode="contain"
      />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '90%',
    maxWidth: 218,
    height: 94,
    backgroundColor: '#faf9fd',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#828282',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
  },
  image: {
    width: 40,
    height: 78,
  },
  title: {
    marginLeft: 13,
    fontFamily: 'Poppins',
    fontSize: 14,
    fontWeight: '500',
    letterSpacing: 0.5,
    lineHeight: 24,
    color: '#000000',
  },
});

export default CategoryCard2;

