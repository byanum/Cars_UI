import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row", //elements on same row
    position: "absolute",
    top: 50,
    flexWrap: "wrap",
    zIndex: 100,
    width: 100,
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  logo: {
    height: 100,
    width: 20,
    resizeMode: "contain",
  },
  menu: {
    width: 25,
    height: 25,
    resizeMode: "contain",
  },
});

export default styles;
