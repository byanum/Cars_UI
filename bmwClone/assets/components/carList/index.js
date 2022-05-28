import { View, Text, FlatList, Dimensions } from "react-native";
import React from "react";
import styles from "./style";
import CarItem from "../carItems";
import cars from "./cars";

const CarList = (props) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CarItem car={item} />}
        showsVerticalScrollIndicator={false} //to hide the scrollbar from the screen
        snapToAlignment={"start"} //not to stuck between 1 and 2 component
        decelerationRate={"fast"} //speed to go up & down
        snapToInterval={Dimensions.get("window").height} //to display full on screen (anytype phone)
      />
    </View>
  );
};

export default CarList;
