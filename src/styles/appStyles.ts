import { StyleSheet } from "react-native";
import AppColors from "./color";

const appStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 26,
    // fontWeight: 'bold',
    color: "#CE0033",
    marginVertical: 5,
    fontFamily: "NunitoSans_700Bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#212529",
    fontFamily: "NunitoSans_700Bold",
  },
  textBlack: {
    color: "#000000",
  },
  textRed: {
    color: "#CE0033",
  },
  textWhite: {
    color: "#FFFFFF",
  },
  smallText: {
    fontFamily: "NunitoSans_400Regular",
    fontSize: 12
  },
  smallImportantTextLight: {
    fontFamily: "NunitoSans_600SemiBold",
    fontSize: 12,
    color: AppColors.light
  },
  profilePicture: {
    width: 60,
    height: 60,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: AppColors.primary,
  },
  filterContainer: {
    paddingHorizontal: 15,
  },
  categoryFilter: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  categoryIcon: {
    backgroundColor: AppColors.light,
    padding:4,
    borderRadius: 30,

  },
  categorySeparator: {
    width: 20,
    height: 8,
    backgroundColor: AppColors.light
  },
  categoryFilterName: {
    backgroundColor: AppColors.light,
    padding:4,
    borderRadius: 30,
    
  },
coursesListContainer: {
padding: 5,
width: '100%',
},
  courseCard: {
    flexDirection: 'column',
    padding: 15,
    width: '100%',
    borderRadius: 10,
    marginVertical:4,
  },

  courseCardTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    marginBottom: 15
  },
  courseCardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems:'flex-end'
  },
  courseCardButton: {
    backgroundColor: AppColors.primary,
    paddingHorizontal:10,
    paddingVertical: 4,
    borderRadius: 5
  },
  courseCardTitle:{
    fontSize: 20,
    width: '65%',
    color: AppColors.dark,
    marginVertical: 5,
    fontFamily: "NunitoSans_700Bold",
  },
  courseCardStudentList:{
flexDirection: 'row',

  },
  courseCardAvatar:{
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: AppColors.primary,
    marginLeft: -8
  },
  courseCardStudentNumber:{
    flexDirection:'column',
    justifyContent: 'center',
    alignItems: 'center',
    width: 30,
    height: 30,
    borderRadius: 30,
    borderWidth: 1,
    borderColor: AppColors.primary,
    backgroundColor: AppColors.dark,
    marginLeft: -8
  }
});

export default appStyles;
