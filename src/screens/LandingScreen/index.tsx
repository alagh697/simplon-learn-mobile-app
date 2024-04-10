import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import AppColors from '../../styles/color'
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function LandingScreen({navigation}:any) {
   

  const handleNavigate = () => {
    navigation.navigate('Register'); 
  };
  return (
    <View style={styles.container}>
        <View style={styles.imageContainer}>
        <Image 
        // source={{uri: 'https://thispersondoesnotexist.com'}}
        source={require('../../../assets/images/simplon.png')}
        style={styles.image}
      />
        </View>
        <View style={styles.landingContent}>
          
          <Text style={styles.title}>Prêt à apprendre avec Simplon Learn?</Text>
          <Text style={[styles.subtitle, styles.subtitle]}>
            {`Simplon Learn vise à fournir une expérience d'apprentissage flexible, accessible et engageante pour les débutants et les professionnels du développement informatique, les aidant ainsi à développer leurs compétences et à réussir dans leur carrière.`}
          </Text>

          <TouchableOpacity 
          onPress={handleNavigate}
          style={styles.button}>
            <Text style={styles.buttonText}>
                {`Explorer les cours`}
            </Text>
            <MaterialIcons name="navigate-next" size={24} color={AppColors.primary} />
          </TouchableOpacity>
        </View>
    </View>
  )
}