import { StyleSheet } from "react-native";
import AppColors from "../../../styles/color";

const styles = StyleSheet.create({
    modalContainer: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.5)', // semi-transparent background
    },
    modalContent: {
      backgroundColor: AppColors.primary,
      padding: 20,
      borderRadius: 10,
      width: '100%',
      // height:'85%',
      color: AppColors.light,
      flexDirection: 'column',
      alignItems: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      color: AppColors.light,
      fontFamily: 'NunitoSans_900Black'
    },
    description: {
      fontSize: 16,
      marginBottom: 20,
      color: AppColors.light,
      fontFamily: 'NunitoSans_400Regular'
    },
    button: {
      marginVertical: 20,
      backgroundColor: AppColors.light,
      paddingHorizontal: 15,
      paddingVertical: 6,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "75%",
    },
    buttonText: {
      color: AppColors.primary,
      textTransform: "uppercase",
      fontFamily: "NunitoSans_800ExtraBold",
    },
    close: {
      fontSize: 14,
      marginVertical: 20,
      textDecorationLine: 'underline',
      color: AppColors.light,
      fontFamily: 'NunitoSans_400Regular'
    }
  });

  export default styles;
  