import { View, Text, FlatList } from 'react-native'
import React from 'react'
import appStyles from '../../../styles/appStyles'
import Course from '../../../types/course'
import CourseCard from '../CourseCard'

export default function CourseList({courses}:any) {
  return (
    <View style={appStyles.coursesListContainer}>
       <FlatList
       data={courses}
       keyExtractor={(item:Course) => item.id}
       renderItem={({item}:any) =>
        <CourseCard course={item}/>
       }
       />
      </View>
  )
}