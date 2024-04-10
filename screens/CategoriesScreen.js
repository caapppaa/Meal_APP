import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { StyleSheet } from "react-native";

function renderCategoryItem(itemData) {
  return (
    <CategoryGridTile
      title={itemData.item.title}
      colour={itemData.item.color}
    ></CategoryGridTile>
  );
}

function CategoriesScreen() {
  return (
    <FlatList
      data={CATEGORIES}
      keyExtractor={(item) => {
        item.id;
      }}
      renderItem={renderCategoryItem}
      numColumns={2}
    ></FlatList>
  );
}


export default CategoriesScreen;
