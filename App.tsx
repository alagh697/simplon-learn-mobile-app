import React from 'react';
import MainNavigator from './src/navigation/MainNavigator';
import AppLoading from './src/components/Loading/AppLoading';
import { NunitoSans_200ExtraLight, NunitoSans_200ExtraLight_Italic, NunitoSans_300Light, NunitoSans_300Light_Italic, NunitoSans_400Regular, NunitoSans_400Regular_Italic, NunitoSans_600SemiBold, NunitoSans_600SemiBold_Italic, NunitoSans_700Bold, NunitoSans_700Bold_Italic, NunitoSans_800ExtraBold, NunitoSans_800ExtraBold_Italic, NunitoSans_900Black, NunitoSans_900Black_Italic, useFonts } from '@expo-google-fonts/nunito-sans';
import Navigation from './src/navigation';

export default function App() {
  const [fontsLoaded] = useFonts({
    NunitoSans_200ExtraLight,
    NunitoSans_200ExtraLight_Italic,
    NunitoSans_300Light,
    NunitoSans_300Light_Italic,
    NunitoSans_400Regular,
    NunitoSans_400Regular_Italic,
    NunitoSans_600SemiBold,
    NunitoSans_600SemiBold_Italic,
    NunitoSans_700Bold,
    NunitoSans_700Bold_Italic,
    NunitoSans_800ExtraBold,
    NunitoSans_800ExtraBold_Italic,
    NunitoSans_900Black,
    NunitoSans_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }
  return (
    <Navigation/>
  )
}


