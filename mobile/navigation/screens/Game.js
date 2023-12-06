import { View, Text, TouchableOpacity } from "react-native";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import CustomHeader from "../components/header";
import { AntDesign } from "@expo/vector-icons";
import { gameStyle } from "../../assets/styles/game";
import { mainStyle } from "../../assets/styles/main";
import CustomModal from "./gameComponents/modal";

const Game = ({ navigation, mode }) => { 
  return (
    <View
      style={[defaultStyle.container, { backgroundColor: mode.background }]}
    >
      <TouchableOpacity
        style={{ position: "absolute", margin: 10, zIndex: 10 }}
        onPress={() => navigation.jumpTo("Home")}
      >
        <AntDesign name="left" size={28} color={mode.text} />
      </TouchableOpacity>
      <CustomHeader title={"O'yin orqali o'rganish"} />
      <View style={gameStyle.back}>
        <CustomModal/>
      </View>
    </View>
  );
};

export default Game;
