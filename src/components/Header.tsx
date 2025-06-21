import React from 'react';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TeladeCadastro1: undefined;
  TeladeLogin: undefined;
};

interface HeaderProps {
  style?: object;
}

type NavigationProps = StackNavigationProp<RootStackParamList>;

const Header: React.FC<HeaderProps> = ({ style }) => {
  const navigation = useNavigation<NavigationProps>(); // Definir a navegação corretamente

  return (
    <View style={[styles.container, style]}>
      <View style={styles.statusBar} />
      <View style={styles.headerContent}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Image 
            source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-INCWs0ZhD5c3g2/icon-a.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 100,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
  },
  statusBar: {
    width: '100%',
    height: 1,
    backgroundColor: '#FFFFFF',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 9,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
  },
  backIcon: {
    width: 24,
    height: 24,
  },
});

export default Header;
