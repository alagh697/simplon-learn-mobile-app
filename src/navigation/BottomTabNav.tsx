import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import MyCoursesScreen from '../screens/MyCourses';
import TabBarIcon from '../components/TabBar/TabBarIcon';
import AppColors from '../styles/color';

const Tab = createBottomTabNavigator();

export default function BottomTabNav() {
  return (
    <Tab.Navigator
    screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: AppColors.primary,
    }}
    >
        <Tab.Screen name="Home" component={HomeScreen} 
        options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='home' iconColor={color} title='Accueil'/>,
        }}
        />
        <Tab.Screen name="MyCourses" component={MyCoursesScreen} 
        options={{
            tabBarIcon: ({ color }) => 
            <TabBarIcon iconName='school' iconColor={color} title='Mes cours'/>,
        }}
        />
        {/* <Tab.Screen name="Search" component={SearchScreen} /> */}
        
      </Tab.Navigator>
  )
}