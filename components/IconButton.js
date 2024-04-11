import { Pressable } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

function IconButton({onPress}) {
  return (
    <Pressable onPress={onPress}>
      <Ionicans name="" size={24} color="white" />
    </Pressable>
  );
}

export default IconButton;
