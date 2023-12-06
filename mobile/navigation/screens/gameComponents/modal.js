import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import { defaultStyle } from "../../../assets/styles/defaultStyle";
import RadioButtonGroup, { RadioButtonItem } from "expo-radio-button";

const CustomModal = () => {
    const [gameType, setGameType] = useState("one")
  const [current, setCurrent] = useState("easy");
  const [time, setTime] = useState("5");
  const [wordType, setWordType] = useState("mixed");
  const [wordCount, setWordCount] = useState(10);
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
          style={[gameStyle.gameTypeBtn, { backgroundColor: gameType=="one"? "#00f": "#fff" }]}
          onPress={()=>setGameType("one")}
        >
          <Text style={[{ color: gameType=="one"? "#fff": "#000", fontSize: 18 }]}>Bir kishilik</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[gameStyle.gameTypeBtn, { backgroundColor: gameType!="one"? "#00f": "#fff" }]}
          onPress={()=>setGameType("many")}
        >
          <Text style={[{ color: gameType!="one"? "#fff": "#000", fontSize: 18 }]}>Ko'p kishilik</Text>
        </TouchableOpacity>
      </View>
      <View style={gameStyle.setParam}>
        <View style={gameStyle.setGroup}>
          <Text style={gameStyle.paramTitle}>So'z qiyinlik darajasi</Text>
          <RadioButtonGroup
            containerStyle={gameStyle.radioBtnStyle}
            containerOptionStyle={{ marginHorizontal: 10, fontSize: 20 }}
            selected={current}
            onSelected={(value) => setCurrent(value)}
            radioBackground="#00f"
          >
            <RadioButtonItem
              value="easy"
              label={<Text style={{ fontSize: 18 }}>Oson</Text>}
            />
            <RadioButtonItem
              value="middle"
              label={<Text style={{ fontSize: 18 }}>O'rtacha</Text>}
            />
            <RadioButtonItem
              value="difficult"
              label={<Text style={{ fontSize: 18 }}>Qiyin</Text>}
            />
          </RadioButtonGroup>
        </View>
        <View style={gameStyle.setGroup}>
          <Text style={gameStyle.paramTitle}>Belgilash vaqti (soniyada)</Text>
          <RadioButtonGroup
            containerStyle={gameStyle.radioBtnStyle}
            containerOptionStyle={{ marginHorizontal: 10, fontSize: 20 }}
            selected={time}
            onSelected={(value) => setTime(value)}
            radioBackground="#00f"
          >
            <RadioButtonItem value="5" label="5" />
            <RadioButtonItem value="10" label="10" />
            <RadioButtonItem value="15" label="15" />
            <RadioButtonItem value="20" label="20" />
            <RadioButtonItem value="30" label="30" />
          </RadioButtonGroup>
        </View>
        <View style={gameStyle.setGroup}>
          <Text style={gameStyle.paramTitle}>Savollar soni</Text>
          <TextInput
            maxLength={2}
            placeholder="Savollar soni"
            inputMode="numeric"
            style={gameStyle.input}
            value={wordCount}
            defaultValue="10"
            setValue={setWordCount}
          />
        </View>
        <View style={gameStyle.setGroup}>
          <Text style={gameStyle.paramTitle}>So'zlar turi</Text>
          <RadioButtonGroup
            containerStyle={gameStyle.radioBtnStyle}
            containerOptionStyle={{ marginHorizontal: 8 }}
            selected={wordType}
            onSelected={(value) => setWordType(value)}
            radioBackground="#00f"
          >
            <RadioButtonItem value="eng" label={<Text style={{fontSize: 15}}>Inglizcha</Text>} />
            <RadioButtonItem value="uzb" label={<Text style={{fontSize: 15}}>Uzbekcha</Text>} />
            <RadioButtonItem value="mixed" label={<Text style={{fontSize: 15}}>Aralash</Text>} />
          </RadioButtonGroup>
        </View>
        <TouchableOpacity style={[gameStyle.gameTypeBtn, {backgroundColor: "#00f", marginVertical: 10}]}>
            <Text style={{fontSize: 23, color: '#fff', textAlign: 'center'}}>O'yinni boshlash</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomModal;
