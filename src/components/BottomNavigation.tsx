import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  TeladeLista: undefined;
  TeladeMenu: undefined;
  TelaHome: undefined;
  TeladeHistorico: undefined;
  BottomNavigation: undefined;
};

// Corrigindo a tipagem para que aceite navegar para qualquer uma das telas
type NavigationProps = StackNavigationProp<RootStackParamList>;

const BottomNavigation: React.FC = () => {
  const navigation = useNavigation<NavigationProps>();

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TelaHome')}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/2948/2948025.png' }}
          style={styles.icon}
        />
        <Text style={[styles.label, styles.activeLabel]}>Início</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TeladeLista')}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-SViQggqYBhYb20/list-158.png' }}
          style={styles.icon}
        />
        <Text style={styles.label}>Listas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TeladeMenu')}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/256/55/55003.png' }}
          style={styles.icon}
        />
        <Text style={styles.label}>Menu</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navItem} onPress={() => navigation.navigate('TeladeHistorico')}>
        <Image 
          source={{ uri: 'https://cdn-icons-png.flaticon.com/512/1243/1243557.png' }}
          style={styles.icon}
        />
        <Text style={styles.label}>Histórico</Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 96,
    backgroundColor: '#c0dfc5',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    paddingBottom: 20,
    minWidth: 375,
    top: 20,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
  label: {
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#121212',
    textAlign: 'center',
    fontWeight: 'bold',
  },
  activeLabel: {
    color: '#467a59',
  },
});

export default BottomNavigation;
