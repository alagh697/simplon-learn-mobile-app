import { StyleSheet } from "react-native";
import AppColors from "../../styles/color";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    backgroundColor: AppColors.primary,
    paddingTop: 40,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 10,
    color: AppColors.light,
    textAlign: "center",
    fontFamily: "NunitoSans_800ExtraBold",
  },
  subtitle: {
    fontSize: 16,
    color: AppColors.light,
    textAlign: "center",
    fontFamily: "NunitoSans_700Bold",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    width: "100%",
    height: "45%",
  },
  image: {
    width: "100%",
    height: "100%",
    shadowColor: "#ffffff", // Shadow color
    shadowOffset: { width: 3, height: 2 }, // Shadow offset
    shadowOpacity: 0.25, // Shadow opacity
    shadowRadius: 4, // Shadow radius
  },
  landingContent: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 15,
    flex: 1,
    width: "100%",
  },
  button: {
    marginTop: "auto",
    marginBottom: 70,
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
});

export default styles;
