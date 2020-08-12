import React from "react";

import { createStackNavigator } from "@react-navigation/stack";

import Category from "./screens/Category";
import Categories from "./screens/Categories";

const Stack = createStackNavigator();

type Props = {
  route: any;
};

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name={"Home"}
        component={Categories}
        options={{ title: "Categories" }}
      />
      <Stack.Screen
        name={"Category"}
        component={Category}
        options={(props: Props) => ({ title: props.route.params.name })}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
