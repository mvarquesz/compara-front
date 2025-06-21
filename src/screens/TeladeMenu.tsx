import React from 'react';
import { View, StyleSheet } from 'react-native';
import SearchBar from '../components/SearchBar3';
import MenuSection from '../components/MenuSection';
import LogoutButton from '../components/LogoutButton';
import BottomNavigation from '../components/BottomNavigation';

const TeladeMenu: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <SearchBar />
      </View>
      <View style={styles.menuSection}>
        <MenuSection />
      </View>
      <View style={styles.logoutButton}>
        <LogoutButton />
      </View>
      <View style={styles.bottomNavigation}>
        <BottomNavigation />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  searchBar: {
    width: '90%',
    height: 40,
    marginVertical: 10,
    right: 5,
  },
  menuSection: {
    width: '90%',
    marginVertical: 10,
    top: -20,
    right: 15,
  },
  logoutButton: {
    width: '90%',
    height: 46,
    marginVertical: 10,
    top: -30,
  
  },
  bottomNavigation: {
    width: '100%',
    height: 80,
    top: -25,
  
  },
});

export default TeladeMenu;
