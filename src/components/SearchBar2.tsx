import React from 'react';
import { View, TextInput, Image, StyleSheet, ViewStyle } from 'react-native';

interface SearchBarProps {
  style?: ViewStyle;
}

const SearchBar2: React.FC<SearchBarProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#5f5f63"
      />
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-Sf5h_Ow-G566nQ/search.png' }}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    paddingHorizontal: 16,
    minWidth: 261,
    height: 40,
    marginVertical: 10,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#5f5f63',
    paddingRight: 8,
  },
  searchIcon: {
    width: 17,
    height: 17,
    resizeMode: 'contain',
  },
});

export default SearchBar2;

