import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import appStyles from '../../../styles/appStyles'
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppColors from '../../../styles/color';
import CourseDetailsModal from '../CourseDetailsModal';
import CourseStudents from '../CourseStudents';

export default function CourseCard({course}:any) {
    const [modalVisible, setModalVisible] = useState(false);

  const handlePress = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };
  return (
    <View style={[appStyles.courseCard, {backgroundColor: 'rgba(255, 0, 0, 0.05)'}]}>
    <View
    style={appStyles.courseCardTop}
    >
      <Text style={appStyles.smallText}>
        {`Onizuka`}
      </Text>
      <TouchableOpacity 
      onPress={handlePress}
      style={appStyles.courseCardButton}>
      <MaterialIcons name="school" size={24} color={AppColors.light} />
      </TouchableOpacity>
    </View>

    <View style={appStyles.courseCardContent}>
      <Text style={appStyles.courseCardTitle}>
        {course.title}
      </Text>
     <CourseStudents />
    </View>
    <CourseDetailsModal visible={modalVisible} onClose={handleCloseModal} 
    course={course} 
    />
  </View>
  )
}