import { View, Text, Modal, Button, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from './style'
import CourseStudents from '../CourseStudents'
import { MaterialIcons } from '@expo/vector-icons';
import AppColors from '../../../styles/color';

export default function CourseDetailsModal({visible, onClose, course}:any) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}>{course.title}</Text>
          <Text style={styles.description}>{course.description}</Text>
          <Text style={styles.description}>{course.chapterCount}{` chapitres`}</Text>
          <CourseStudents/>
          <TouchableOpacity 
          onPress={onClose}
          style={styles.button}>
            <Text style={styles.buttonText}>
                {`Rejoindre le cours`}
            </Text>
            <MaterialIcons name="navigate-next" size={24} color={AppColors.primary} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onClose} >
            <Text style={styles.close}>{`Fermer`}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  )
}