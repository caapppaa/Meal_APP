import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategoryItem(itemData) {
    return (
        <CategoryGridTile title={itemData.item.title}></CategoryGridTile>
    )
}

function CategoriesScreen() {
    return (
        <FlatList data={CATEGORIES} keyExtractor={(item) => {item.id}} renderItem={renderCategoryItem}>
        </FlatList>
    )
}

export default CategoriesScreen;