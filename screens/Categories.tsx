import React, { useState, useEffect } from "react";
import { StyleSheet, FlatList, View } from "react-native";

import { CategoryListItem } from "../components/CategoryListItem";

type categoryItem = {
  id: string;
  title: String;
};

interface IProps {
  navigation: any;
}

const Category = (props: IProps) => {
  const { navigation } = props;
  const [CategoryList, setCategoryList]: [categoryItem[], Function] = useState(
    []
  );
  const [count, setCount]: [number, Function] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCategoryList((CategoryList: categoryItem[]) => [
        { id: "1", title: "Ski freezing" },
        { id: "2", title: "Store cookie Sell" },
        { id: "3", title: "Laptop beautiful" },
      ]);
    }, 1000);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.categoryList}>
        <FlatList
          data={CategoryList}
          renderItem={({ item }) => (
            <CategoryListItem
              title={item.title}
              key={item.id}
              onPress={() => {
                setCount((count: number) => count + 1);
                return navigation.navigate("Category", {
                  count: count,
                  name: item.title,
                });
              }}
            />
          )}
          keyExtractor={(item: categoryItem) => item.id}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },

  categoryList: {
    marginTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
});

export default Category;
