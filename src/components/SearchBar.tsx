import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

const SearchBar: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Pesquisar"
          placeholderTextColor="#5f5f63"
        />
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/search.png' }}
          style={styles.searchIcon}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 13,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
  },
  searchContainer: {
    width: '100%',
    maxWidth: 354,
    height: 40,
    backgroundColor: '#fafafa',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#467a59cc',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  input: {
    flex: 1,
    height: '100%',
    fontFamily: 'Poppins',
    fontSize: 13,
    fontWeight: '600',
    letterSpacing: 0.5,
    color: '#5f5f63',
    paddingVertical: 0,
  },
  searchIcon: {
    width: 17,
    height: 17,
    marginLeft: 10,
  },
});

export default SearchBar;

