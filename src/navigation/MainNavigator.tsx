// MainNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import AccountScreen from '../screens/Account';
import LandingScreen from '../screens/LandingScreen';
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabNav from './BottomTabNav';


const Stack = createStackNavigator();

const MainNavigator: React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name="Landing" component={LandingScreen} options={{ headerShown: false }}/>
        
        <Stack.Screen name="BottomTabNav" component={BottomTabNav}  options={{ headerShown: false  }}/>
        
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
  );
};

export default MainNavigator;