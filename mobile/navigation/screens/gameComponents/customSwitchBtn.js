import { View, Text, TouchableOpacity } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import { defaultStyle } from "../../../assets/styles/defaultStyle";

const CustomSwitchBtn = (props) => {
  const { text, val, setVal, defValue, style } = props;
  return (
    <View
      style={[
        defaultStyle.row,
        defaultStyle.around,
        style,
        {
          borderRadius: 10,
          borderWidth: 1,
          borderColor: "#00f",
          paddingVertical: 5,
        },
      ]}
    >
      <TouchableOpacity
        style={[
          gameStyle.gameTypeBtn,
          { backgroundColor: val != defValue[1] ? "#00f" : "#fff" },
        ]}
        onPress={() => setVal(defValue[0])}
      >
        <Text
          style={[
            {
              color: val != defValue[1] ? "#fff" : "#000",
              fontSize: 18,
            },
          ]}
        >
          {text[0]}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          gameStyle.gameTypeBtn,
          { backgroundColor: val == defValue[1] ? "#00f" : "#fff" },
        ]}
        onPress={() => setVal(defValue[1])}
      >
        <Text
          style={[
            {
              color: val == defValue[1] ? "#fff" : "#000",
              fontSize: 18,
            },
          ]}
        >
          {text[1]}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CustomSwitchBtn;
