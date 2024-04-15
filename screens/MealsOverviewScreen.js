import { useLayoutEffect } from "react";
import MealItem from "../components/MealsList/MealItem";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import { View, FlatList, StyleSheet, Text } from "react-native";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ route, navigation }) {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [catId, navigation]);

  return (
    <MealsList items={displayedMeals}></MealsList>
  )
}

  


export default MealsOverviewScreen;
