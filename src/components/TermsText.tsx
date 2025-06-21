import React from 'react';
import { Text, StyleSheet, TextStyle } from 'react-native';

interface TermsTextProps {
  style?: TextStyle;
}

const TermsText: React.FC<TermsTextProps> = ({ style }) => {
  return (
    <Text style={[styles.text, style]}>
      Ao se inscrever, você aceita nossos <Text style={styles.link}>Termos de Uso.</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Roboto',
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
    color: '#A6A6A6',
    textAlign: 'center',
    minWidth: 243,
    minHeight: 40,
  },
  link: {
    color: '#4CAF50',
    fontWeight: '500',
  },
});

export default TermsText;

