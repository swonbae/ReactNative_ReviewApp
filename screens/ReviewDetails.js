import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { GlobalStyles, Images } from "../styles/Global";
import Card from "../shared/Card";

export default function ReviewDetails({ navigation }) {
  const rating = navigation.getParam("rating");

  return (
    <View style={GlobalStyles.container}>
      <Card>
        <Text>{navigation.getParam("title")}</Text>
        <Text>{navigation.getParam("body")}</Text>
        <View style={styles.rating}>
          <Text>GameZone rating: </Text>
          <Image source={Images.ratings[rating]} />
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: "#eee",
  },
});
