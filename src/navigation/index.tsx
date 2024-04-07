import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigator from './MainNavigator';
import { SafeAreaView } from 'react-native';


const Navigation: React.FC = () => {
  return (
    // <SafeAreaView style={{ flex: 1 }}>
    <NavigationContainer>
      <MainNavigator/>
    </NavigationContainer>
    // </SafeAreaView>
  );
};

export default Navigation;