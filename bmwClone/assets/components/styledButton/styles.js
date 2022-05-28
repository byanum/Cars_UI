import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: 10,
  },
  button: {
    backgroundColor: "yellow",
    height: 40,
    justifyContent: "center", //vertically center
    alignItems: "center", //horizontally center
    borderRadius: 20,
  },
  text: {
    fontSize: 12,
    fontWeight: "500",
    textTransform: "uppercase",
    color: "black",
  },
});

export default styles;
