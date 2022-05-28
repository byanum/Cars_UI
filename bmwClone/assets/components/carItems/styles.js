import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    width: "100%",
    height: Dimensions.get("window").height,
  },
  titleContainer: {
    marginTop: "30%",
    width: "100%",
    alignItems: "center",
  },
  heading: {
    fontSize: 40,
    fontWeight: "500",
  },
  subheading: {
    fontSize: 16,
    color: "#191919",
  },
  image: {
    alignSelf: "center",
    height: "100%",
    width: "100%",
    resizeMode: "contain",
    position: "absolute", //to see text on the screen as well
  },
  styledButton: {
    position: "absolute",
    bottom: 50,
    width: "100%",
  },
  doubleSubHeading: {
    textDecorationLine: "underline",
  },
});

export default styles;
