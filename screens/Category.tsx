import React from "react";
import { View, Text } from "react-native";

interface IProps {
  route: any;
}

const Category = (props: IProps) => {
  const { count, name } = props.route.params;

  return (
    <View>
      <Text>
        {name} Click Time {count}
      </Text>
    </View>
  );
};

export default Category;
