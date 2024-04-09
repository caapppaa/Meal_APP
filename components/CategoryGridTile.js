import { Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";

function CategoryGridTile({title, colour}) {
    return (
        <View>
            <Pressable>
                <View>
                    <Text>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;