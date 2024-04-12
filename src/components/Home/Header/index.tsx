import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from '../../../screens/HomeScreen/style'
import appStyles from '../../../styles/appStyles'
import { useNavigation } from '@react-navigation/native'

export default function Header({navigation}:any) {
    
  return (
    <View testID="home-header" style={styles.header}>
    {/* Title */}
    <View >
      <Text style={[appStyles.subtitle, styles.subtitle]}>
        {`Apprenez avec`}
      </Text>
      <Text style={appStyles.title}>Simplon Learn!</Text>
    </View>
    {/* profile pic */}
    <TouchableOpacity
    onPress={() => navigation.navigate('Account')}
    >
    <Image 
    // source={{uri: 'https://thispersondoesnotexist.com'}}
    source={require('../../../../assets/images/onizuka.png')}
    style={appStyles.profilePicture}
  />
    </TouchableOpacity>
  </View>
  )
}