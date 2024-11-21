import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import GraphScreen from "../screens/GraphScreen";
import RecommendationsScreen from "../screens/RecommendationsScreen";
import IoTControlScreen from "../screens/IoTControlScreen";

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="GraphScreen" component={GraphScreen} />
      <Stack.Screen
        name="RecommendationsScreen"
        component={RecommendationsScreen}
      />
      <Stack.Screen name="IoTControlScreen" component={IoTControlScreen} />
    </Stack.Navigator>
  );
};

export default AppNavigator;
