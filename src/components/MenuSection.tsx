import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

interface MenuSectionProps {
  style?: object;
}

const MenuSection: React.FC<MenuSectionProps> = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.title}>Menu</Text>
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Compras</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/menu-1.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Departamentos</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Minha conta</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/profile.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Meus dados</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/star-173.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Minhas preferências</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/associat.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Registro e Histórico de compras</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Ajuda</Text>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/air-cont.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Central de Atendimento</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/call-254.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Fale conosco</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem}>
          <Image source={{ uri: 'https://dashboard.codeparrot.ai/api/image/Z-S1ax_Ow-G566nY/question.png' }} style={styles.icon} />
          <Text style={styles.menuText}>Dúvidas Frequentes</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    minWidth: 240,
    backgroundColor: 'transparent',
    padding: 20,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 24,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontFamily: 'Open Sans',
    fontSize: 13,
    fontWeight: 'bold',
    color: '#434344',
    letterSpacing: 0.3,
    marginBottom: 10,
    
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 15,
  },
  menuText: {
    fontFamily: 'Open Sans',
    fontSize: 15,
    fontWeight: '400',
    color: '#5F5F63',
    letterSpacing: 0.3,
  },
});

export default MenuSection;

