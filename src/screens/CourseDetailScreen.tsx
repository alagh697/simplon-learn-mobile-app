import { View, Text } from 'react-native'
import React from 'react'

export default function CourseDetailScreen({route}:any) {
    const {course} = route.params
  return (
    <View>
      <Text>{course?.title}</Text>
      <Text>{course?.description}</Text>
    </View>
  )
}