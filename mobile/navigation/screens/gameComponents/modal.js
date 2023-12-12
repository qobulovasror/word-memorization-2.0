import { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { gameStyle } from "../../../assets/styles/game";
import { defaultStyle } from "../../../assets/styles/defaultStyle";
import SetParam from "./setParams";
import CustomSwitchBtn from "./customSwitchBtn";

const CustomModal = () => {
  const [gameType, setGameType] = useState("one"); //many
  const [manyGameType, setManyGameType] = useState("connect"); //create
  const [gameParams, setGameParams] = useState({
    gameLevel: {
      a1: true,
      a2: false,
      b1: false,
      b2: false,
      c1: false,
    },
    time: 5,
    wordType: "mixed",
    wordCount: 10,
  });

  const startGameWithOne = () => {
    if (
      !gameParams.gameLevel.a1 &&
      !gameParams.gameLevel.a2 &&
      !gameParams.gameLevel.b1 &&
      !gameParams.gameLevel.b2 &&
      !gameParams.gameLevel.c1
    ) {
      return alert("So'z darajasi kamida bitta belgilanishi shart");
    }
    if (gameParams.wordCount<5) {
        return alert('Sozlar soni kamida 5ta bo`lishi kerak');
    }
  };

  const startGameWithMany = () => {

  }

  return (
    <View style={gameStyle.modal}>
      <Text style={{ fontSize: 22, textAlign: "center", marginBottom: 5 }}>
        O'yin paramertlarini kiriting{" "}
      </Text>
      {/* <View
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
          style={[
            gameStyle.gameTypeBtn,
            { backgroundColor: gameType == "one" ? "#00f" : "#fff" },
          ]}
          onPress={() => setGameType("one")}
        >
          <Text
            style={[
              { color: gameType == "one" ? "#fff" : "#000", fontSize: 18 },
            ]}
          >
            Bir kishilik
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            gameStyle.gameTypeBtn,
            { backgroundColor: gameType != "one" ? "#00f" : "#fff" },
          ]}
          onPress={() => setGameType("many")}
        >
          <Text
            style={[
              { color: gameType != "one" ? "#fff" : "#000", fontSize: 18 },
            ]}
          >
            Ko'p kishilik
          </Text>
        </TouchableOpacity>
      </View> */}
      <CustomSwitchBtn
        text={["Bir kishilik", "Ko'p kishilik"]}
        val={gameType}
        setVal={setGameType}
        defValue={["one", "many"]}
      />
      {gameType == "one" ? (
        <SetParam
          gameParams={gameParams}
          setGameParams={setGameParams}
          startGame={startGameWithOne}
        />
      ) : (
        <View style={defaultStyle.column}>
          <CustomSwitchBtn
            text={["O'yinga qo'shilish", "O'yin yaratish"]}
            val={manyGameType}
            setVal={setManyGameType}
            defValue={["connect", "create"]}
            style={{ marginTop: 10 }}
          />
          {manyGameType == "create" ? (
            <SetParam gameParams={gameParams} setGameParams={setGameParams} startGame={startGameWithMany} />
          ) : (
            <View>
              <Text style={gameStyle.paramTitle}>O'yin kodini kiriting</Text>
              <TextInput
                maxLength={5}
                placeholder="o'yin kodi"
                style={gameStyle.input}
                // setValue={(value) =>setGameParams({ ...gameParams, wordCount: value })}
                returnKeyType="go"
                // value={`${gameParams.wordCount}`}
              />
              <TouchableOpacity
                style={[
                  gameStyle.gameTypeBtn,
                  { marginTop: 10, backgroundColor: "#00f" },
                ]}
              >
                <Text
                  style={{ color: "#fff", fontSize: 20, textAlign: "center" }}
                >
                  O'yinga kirish
                </Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

export default CustomModal;
