import { View, Text, Pressable } from "react-native";
import React from "react";
import styles from "./styles";

const StyledButton = (props) => {
  // const type = props.type;
  // const content = props.content;
  // const onPress = props.onPress;
  // Alternative of upper (destructuring)
  const { type, content, onPress } = props;

  const backgroundColor = type === "primary" ? "black" : "#EEEEEE";
  const textcolor = type === "primary" ? "white" : "#222831";

  return (
    <View style={styles.container}>
      <Pressable
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={() => onPress}
        // console.warn("Button Pressed!")
      >
        <Text style={[styles.text, { color: textcolor }]}>{content}</Text>
      </Pressable>
    </View>
  );
};

export default StyledButton;
