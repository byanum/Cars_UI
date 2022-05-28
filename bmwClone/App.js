import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import CarItem from "./assets/components/carItems";

export default function App() {
  return (
    <View style={styles.container}>
      <CarItem
        image={require("./assets/images/bmw6.jpg")}
        name={"Model S"}
        tagline={"Starting At $65,000"}
        subTagline={"Touchless Delivery"}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
