import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GlobalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  return (
    <View style={GlobalStyles.container}>
      <Text>{navigation.getParam("title")}</Text>
      <Text>{navigation.getParam("body")}</Text>
      <Text>{navigation.getParam("rating")}</Text>
    </View>
  );
}
