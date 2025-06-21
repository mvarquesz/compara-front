import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type RootStackParamList = {
  TelaInicial2: undefined; // Defina a tela de destino no seu Stack Navigator
};

type NavigationProps = NativeStackNavigationProp<RootStackParamList>;

interface TelaInicial1Props {
  width?: number;
  height?: number;
  navigation: NavigationProps; // Tipagem correta para a navegação
}

const TelaInicial1: React.FC<TelaInicial1Props> = ({ 
  width = 307,
  height = 307,
  navigation
}) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('TelaInicial2'); // Navega para a tela "TelaInicial2"
    }, 3000);

    return () => clearTimeout(timer); // Limpa o timer quando o componente for desmontado
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z99fsf8PKu40N2JO/image-3.png' }}
        style={[styles.logo, { width, height }]}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c1dfc5',
    alignItems: 'center',
    justifyContent: 'center',
  
  },
  logo: {
    marginTop: 36,
  },
});

export default TelaInicial1;
