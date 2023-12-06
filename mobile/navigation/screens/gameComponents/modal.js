import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import { defaultStyle } from "../../../assets/styles/defaultStyle";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const CustomModal = () => {
  const [current, setCurrent] = useState("test");
  return (
    <View style={gameStyle.modal}>
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 5 }}>
        O'yin paramertlarini kiriting{" "}
      </Text>
      <View
        style={[
          defaultStyle.row,
          defaultStyle.around,
          {
            borderRadius: 10,
            borderWidth: 1,
            borderColor: "#00f",
            paddingVertical: 5,
          },
        ]}
      >
        <TouchableOpacity
          style={[gameStyle.gameTypeBtn, { backgroundColor: "#00f" }]}
        >
          <Text style={[{ color: "#fff", fontSize: 18 }]}>Bir kishilik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[gameStyle.gameTypeBtn, { backgroundColor: "#fff" }]}
        >
          <Text style={[{ color: "#000", fontSize: 18 }]}>Ko'p kishilik</Text>
        </TouchableOpacity>
      </View>
      <View style={gameStyle.setParam}>
        <View style={[defaultStyle.row, defaultStyle.between]}>
          <Text>So'z qiyinlik darajasi</Text>
          <RadioButtonGroup
            containerStyle={{ display: 'flex' }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="#00f"
          >
            <RadioButtonItem value="test2" label="Example with string" />
            <RadioButtonItem value="test" label="sfasdfgs" />
          </RadioButtonGroup>
        </View>
      </View>
    </View>
  );
};

export default CustomModal;
