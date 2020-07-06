import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../styles/Global";

export default function Home() {
  return (
    <View style={GlobalStyles.container}>
      <Text style={GlobalStyles.titleText}>Home Screen</Text>
    </View>
  );
}
