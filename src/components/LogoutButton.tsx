import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle } from 'react-native';

interface LogoutButtonProps {
  style?: ViewStyle;
  onPress?: () => void;
}

const LogoutButton: React.FC<LogoutButtonProps> = ({ 
  style,
  onPress = () => console.log('Logout pressed')
}) => {
  return (
    <TouchableOpacity 
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.text}>Sair</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#c1dfc5',
    borderRadius: 26,
    height: 46,
    minWidth: 287,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'OpenSans',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    color: '#000000',
    textAlign: 'center',
    lineHeight: 24, // 150% of fontSize
  }
});

export default LogoutButton;

