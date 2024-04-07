import { View, Text, Image } from 'react-native'
import React from 'react'
import appStyles from '../../../styles/appStyles'

export default function CourseStudents() {
  return (
    <View style={appStyles.courseCardStudentList}>
    <Image 
// source={{uri: 'https://thispersondoesnotexist.com'}}
source={require('../../../../assets/images/onizuka.png')}
style={appStyles.courseCardAvatar}
/>
<Image 
// source={{uri: 'https://thispersondoesnotexist.com'}}
source={require('../../../../assets/images/onizuka.png')}
style={appStyles.courseCardAvatar}
/>
<Image 
// source={{uri: 'https://thispersondoesnotexist.com'}}
source={require('../../../../assets/images/onizuka.png')}
style={appStyles.courseCardAvatar}
/>
<View style={appStyles.courseCardStudentNumber}>
<Text style={appStyles.smallImportantTextLight}>
  {`10+`}
</Text>
</View>
    </View>
  )
}