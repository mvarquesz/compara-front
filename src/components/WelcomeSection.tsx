import React from 'react';
import { View, Text, StyleSheet, ViewStyle } from 'react-native';

interface WelcomeSectionProps {
  style?: ViewStyle;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Seja bem-vindo!</Text>
      <Text style={styles.subtitle}>
        Preencha para receber recomendações próximas
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    minWidth: 370,
    paddingHorizontal: 24,
    paddingVertical: 10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 60,
    letterSpacing: -0.72,
    color: '#121212',
    marginBottom: 5,
  },
  subtitle: {
    fontFamily: 'Open Sans',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 23,
    color: '#5F5F63',
  },
});

export default WelcomeSection;

