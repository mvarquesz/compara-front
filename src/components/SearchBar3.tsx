import React from 'react';
import { View, TextInput, Image, StyleSheet, ViewStyle } from 'react-native';

interface SearchBarProps {
  style?: ViewStyle;
}

const SearchBar3: React.FC<SearchBarProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar"
        placeholderTextColor="#5f5f63"
      />
      <Image 
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/search.png' }}
        style={styles.searchIcon}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    borderWidth: 1,
    borderColor: '#467a59cc',
    borderRadius: 5,
    minWidth: 354,
    height: 40,
    paddingHorizontal: 10,
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

export default SearchBar3;

