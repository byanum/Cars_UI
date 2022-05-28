import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import CarList from "./assets/components/carList";
import Header from "./assets/components/header";

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Header /> */}
      {/* 
      Old way
      <CarItem
        image={require("./assets/images/bmw6.jpg")}
        name={"Model S"}
        tagline={"Starting At $65,000"}
        subTagline={"Touchless Delivery"}
      /> */}

      {/* new way */}
      <CarList />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({});
