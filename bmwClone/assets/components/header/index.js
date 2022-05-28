import { View, Text, Image, Dimensions } from "react-native";
import React from "react";
import styles from "./style";

const Header = (props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../../images/logo.jpg")} />
      <Image style={styles.menu} source={require("../../images/menu.png")} />
    </View>
  );
};

export default Header;
