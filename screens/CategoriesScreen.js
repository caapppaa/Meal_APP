import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";
import { StyleSheet } from "react-native";
import Category from "../models/category";

function CategoriesScreen({ navigation }) {
  function renderCategoryItem(itemData) {
    function pressHandler() {
      navigation.navigate('MealsOverview', {
        categoryId: itemData.item.id,
      });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        colour={itemData.item.color}
        onPress={pressHandler}
      ></CategoryGridTile>
    );
  }

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
