import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import styles from "./style";
import appStyles from "../../styles/appStyles";
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import AppColors from "../../styles/color";
import CourseCard from "../../components/Course/CourseCard";
import { courses } from "../../../assets/data/data";
import CourseList from "../../components/Course/CourseList";

const HomeScreen: React.FC = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* HomeScreen Header */}
      <View style={styles.header}>
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
        source={require('../../../assets/images/onizuka.png')}
        style={appStyles.profilePicture}
      />
        </TouchableOpacity>
      </View>

      {/* Categories filter */}
      <View style={appStyles.filterContainer}>
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

      <CourseList courses={courses}/>

      {/* <Button
        title="Go to Courses"
        onPress={() => navigation.navigate('Courses')}
      /> */}
    </View>
  );
};

export default HomeScreen;
