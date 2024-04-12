import React from "react";
import { View, Text, TouchableOpacity, Image, Button } from "react-native";
import styles from "./style";
import appStyles from "../../styles/appStyles";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppColors from "../../styles/color";
import CourseCard from "../../components/Course/CourseCard";
import { courses } from "../../../assets/data/data";
import CourseList from "../../components/Course/CourseList";
import Header from "../../components/Home/Header";

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View testID="home-screen" style={styles.container}>
      {/* HomeScreen Header */}
      <Header  navigation={navigation}/>

      {/* Categories filter */}
      <View testID="category-filter" style={appStyles.filterContainer}>
        <View style={appStyles.categoryFilter}>
          <View
          style={appStyles.categoryIcon}>
        <MaterialIcons name="web" size={24} color={AppColors.dark} />
        </View>
        <View style={appStyles.categorySeparator}></View>
        <View style={appStyles.categoryFilterName}>
          <Text style={appStyles.smallText}>{`Web dev`}</Text>
        </View>
        </View>
       
      </View>

      {/* Courses List */}

      {/* <CourseList courses={courses}/> */}

      <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('MyCourses')}
      />
    </View>
  );
};

export default HomeScreen;
