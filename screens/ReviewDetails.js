import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { GlobalStyles } from "../styles/Global";

export default function ReviewDetails({ navigation }) {
  const pressHandler = () => {
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Text>ReviewDetails Screen</Text>
      <Button title="back to home screen" onPress={pressHandler} />
    </View>
  );
}
