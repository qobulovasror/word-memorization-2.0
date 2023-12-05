import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity, TextInput } from "react-native";

import {AntDesign} from '@expo/vector-icons'
import { defaultStyle } from "../../assets/styles/defaultStyle";
import Repeatiton from "./learn/repeatiton";
import Learn from "./learn/learning";
import CustomHeader from "../components/header";

export default function TodaysWordStudy({navigation}) {
  const [mode, setMode] = useState("learn");
  const switchHandler = (mode) => {
    setMode(mode);
  };
  const selectedStyle = { backgroundColor: "#ccc", borderColor: "#fff" };

  return (
    <View style={defaultStyle.container}>
      <TouchableOpacity
        style={{ position: "absolute", margin: 10, zIndex: 10 }}
        onPress={() => navigation.jumpTo("Home")}
      >
        <AntDesign name="left" size={28} color={mode.text} />
      </TouchableOpacity>
      <CustomHeader
        title={
          mode == "learn"
            ? "So'zlarni o'rganish"
            : "So'zlarni qayta takrorlash"
        }
      />
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, mode == "learn" ? selectedStyle : ""]}
          onPress={() => switchHandler("learn")}
        >
          <Text>Bugungi so'zni o'rganish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            mode == "repeat" ? selectedStyle : "",
          ]}
          onPress={() => switchHandler("repeat")}
        >
          <Text>So'zlarni takrorlash</Text>
        </TouchableOpacity>
      </View>
      {mode === "learn" ? <Learn /> : <Repeatiton />}
    </View>
  );
}
