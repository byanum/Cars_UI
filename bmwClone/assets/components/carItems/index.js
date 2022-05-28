import { View, Text, ImageBackground } from "react-native";
import React from "react";
import styles from "./styles";
import StyledButton from "../styledButton";

const CarItem = (props) => {
  const { name, tagline, image, subTagline } = props;

  return (
    <View>
      {/* header container */}
      <View style={styles.headerContainer}>
        {/* title container */}

        <ImageBackground
          source={require("../../images/bmw6.jpg")}
          style={styles.image}
        />

        <View style={styles.titleContainer}>
          {/* texts */}
          <Text style={styles.heading}>{name}</Text>
          <Text style={styles.subheading}>
            {tagline}&nbsp;
            <Text style={styles.doubleSubHeading}>{subTagline}</Text>
          </Text>
        </View>

        {/* button */}
        <View style={styles.styledButton}>
          <StyledButton
            type="primary"
            content={"custom order"}
            onPress={() => {
              console.warn("custom order was pressed.");
            }}
          />
          <StyledButton
            type="secondary"
            content={"Exisiting inventory"}
            onPress={() => {
              console.warn("existing inventory was pressed.");
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default CarItem;
