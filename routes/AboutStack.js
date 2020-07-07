import { createStackNavigator } from "react-navigation-stack";
import { Image } from "react-native";
import About from "../screens/About";
import Header from "../shared/Header";
import React from "react";

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => (
          <Header navigation={navigation} title="About GameZone" />
        ),
      };
    },
  },
};

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: "#444",
    headerStyle: { backgroundColor: "#ddd", height: 70 },
    headerBackground: () => (
      <Image
        source={require("../assets/game_bg.png")}
        style={{ height: "100%" }}
      />
    ),
  },
});

export default AboutStack;
