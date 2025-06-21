import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

interface SectionHeaderProps {
  title: string;
  onSeeMorePress?: () => void;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ 
  title = 'Section Title', 
  onSeeMorePress = () => {} 
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={onSeeMorePress}>
        <Text style={styles.seeMore}>Ver mais</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 320,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 15,
    marginVertical: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
  },
  seeMore: {
    fontFamily: 'Poppins',
    fontSize: 11,
    fontWeight: '400',
    color: '#5F5F63',
  },
});

export default SectionHeader;
