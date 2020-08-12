import React from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

interface IProps {
  title?: String;
  onPress: any;
}
type Props = IProps;

export const CategoryListItem = (props: Props) => {
  return (
    <TouchableOpacity activeOpacity={0.5} onPress={props.onPress}>
      <View style={Style.categoryListItem}>
        <Text style={Style.title}>{props.title}</Text>
        <Image
          style={Style.categoryImage}
          source={require("../assets/char.png")}
        ></Image>
      </View>
    </TouchableOpacity>
  );
};

const Style = StyleSheet.create({
  categoryListItem: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "#dbdbdb",
    padding: 15,
    width: "100%",
    borderRadius: 10,
    shadowOpacity: 0.1,
    shadowColor: "#DDDDDD",
    shadowOffset: { width: 0, height: 0 },
    shadowRadius: 10,
    marginBottom: 15,
  },
  categoryImage: {
    width: 60,
    height: 60,
    marginTop: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: "700",
  },
});
