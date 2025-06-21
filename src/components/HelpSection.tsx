import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface HelpSectionProps {
  style?: object;
}

const HelpSection: React.FC<HelpSectionProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Ajuda</Text>
      <TouchableOpacity style={styles.helpItem}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/air-cont.png' }}
          style={styles.icon}
        />
        <Text style={styles.helpText}>Central de Atendimento</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.helpItem}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/call-254.png' }}
          style={[styles.icon, styles.callIcon]}
        />
        <Text style={styles.helpText}>Fale conosco</Text>
      </TouchableOpacity>
      
      <TouchableOpacity style={styles.helpItem}>
        <Image 
          source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/question.png' }}
          style={styles.icon}
        />
        <Text style={styles.helpText}>Dúvidas Frequentes</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minWidth: 300,
    backgroundColor: '#ffffff',
    padding: 10,
  },
  title: {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontSize: 13,
    letterSpacing: 0.3,
    color: '#434344',
    marginBottom: 15,
    textAlign: 'left',
  },
  helpItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    cursor: 'pointer',
  },
  icon: {
    width: 21,
    height: 21,
    marginRight: 8,
  },
  callIcon: {
    width: 18,
    height: 18,
  },
  helpText: {
    fontFamily: 'Open Sans',
    fontSize: 12,
    letterSpacing: 0.3,
    color: '#5f5f63',
    lineHeight: 18,
  },
});

export default HelpSection;

