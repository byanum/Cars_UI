import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  return (
    <View style={styles.container}>
      <Pressable
        style={styles.button}
        onPress={() => console.warn("Button Pressed!")}
      >
        <Text style={styles.text}>custom order</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
