import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  TextInput,
  Dimensions,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";

import { defaultStyle } from "../../../assets/styles/defaultStyle";
import { addwords } from "../../../assets/styles/addwords";
import { Ionicons, Feather } from "@expo/vector-icons";
import { saveWord, updateWord } from "../../../services/wordDBService";

const height = Dimensions.get("window").height;

const Add = (props) => {
  const { edit, fetchData, setEdit } = props;
  const [exampleCount, setExampleCount] = useState(0);
  const [hindListDisplay, setHindListDisplay] = useState(false) 

  const [word, setWord] = useState({
    name: "",
    translation: "",
    example: "",
    exampleMeaning: "",
    status: "new",
  });
  const addWordHandler = async () => {
    if (word.name && word.translation) {
      try {
        if (!edit) {
          saveWord(
            word.name,
            word.status,
            word.transcription ? word.transcription : "",
            word.translation,
            word.example ? word.example : "",
            word.exampleMeaning ? word.exampleMeaning : ""
          );
        } else {
          updateWord(word, word.id);
          setEdit("");
        }
      } catch (error) {
        alert(error);
        console.log("add word", error);
      }
      setWord({
        name: "",
        transcription: "",
        translation: "",
        example: "",
        exampleMeaning: "",
        status: "new",
      });
      fetchData();
    } else {
      alert("Kerakli maydonlar to'ldirilmagan");
    }
  };
  const handleChange = (field, value) => {
    if(field=="name"){
      if(value.length >2 && hindListDisplay==false)
        setHindListDisplay(true)
      else
        setHindListDisplay(false)
    }
    setWord((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };
  const putWordFromHind = (word) => {
    setWord((oldData)=> ({...oldData, name: word.name, translation: word.translation}))
    setHindListDisplay(false)
  }
  const addExample = () => {
    if (exampleCount < 1) {
      setExampleCount(exampleCount + 1);
    }
  };
  const removeExample = () => {
    if (exampleCount > 0) {
      setExampleCount(exampleCount - 1);
    }
  };
  useEffect(() => {
    if (edit) {
      setWord({
        id: edit.id,
        name: edit.name,
        transcription: edit.transcription,
        translation: edit.translation,
        example: edit.example,
        exampleMeaning: edit.exampleMeaning,
        status: edit.status,
      });
      setExampleCount(1);
    }
  }, [edit]);
  return (
    <View style={{ height: height - 200 }}>
      {/* <ScrollView> */}
        <View style={{ margin: 10 }}>
          <View style={defaultStyle.column}>
            <Text style={{ fontSize: 18 }}>So'z: (Inglizcha) </Text>
            <TextInput
              placeholder="English word"
              style={addwords.input}
              value={word.name}
              onChangeText={(text) => handleChange("name", text)}
            />
          </View>
          <View style={{ position: "relative", display: hindListDisplay? "flex": "none" }}>
            <TouchableOpacity
              style={addwords.cancelList}
              onPress={()=>setHindListDisplay(false)}
            >
              <Feather name="x" size={25} color="#fff" />
            </TouchableOpacity>
            <FlatList
              style={addwords.freqList}
              data={dataFreqWordList}
              renderItem={({ item }) => (
                <View style={addwords.freqListItem}>
                  <TouchableOpacity onPress={()=>putWordFromHind(item)}>
                    <Text style={{ fontSize: 25, marginStart: 5 }}>
                      {item.name} - {item.translation}
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
            />
          </View>
          <View style={defaultStyle.column}>
            <Text style={{ fontSize: 18 }}>Tarjimasi: (Uzbekcha)</Text>
            <TextInput
              placeholder="Translation"
              style={addwords.input}
              value={word.translation}
              onChangeText={(text) => handleChange("translation", text)}
            />
          </View>
        </View>
        <View style={addwords.exampleGroup}>
          <View style={defaultStyle.column}>
            <Text>Misol qo'shish (ixtiyoriy)</Text>
            <TextInput
              placeholder="Inglizcha misol"
              style={addwords.input}
              value={word.example}
              onChangeText={(text) => handleChange("example", text)}
            />
            <TextInput
              placeholder="Misol tarjimasi"
              style={addwords.input}
              value={word.exampleMeaning}
              onChangeText={(text) => handleChange("exampleMeaning", text)}
            />
          </View>
        </View>
        <TouchableOpacity
          style={[
            addwords.addBtn,
            defaultStyle.row,
            defaultStyle.around,
            { position: "relative" },
          ]}
          onPress={addWordHandler}
        >
          <Ionicons
            name="add-circle"
            size={28}
            color={"#000"}
            style={{ position: "absolute", marginTop: 14, left: "10%" }}
          />
          <Text style={{ fontSize: 20, textAlign: "center" }}>
            So'zni qo'shish
          </Text>
        </TouchableOpacity>
      {/* </ScrollView> */}
    </View>
  );
};

export default Add;

// const dataFreqWordList = [
//   { key: "Devin" },
//   { key: "Dan" },
// ];

const dataFreqWordList = [
  {
    id: 2,
    cognate_id: 2,
    name: "pretty",
    transcription: "[ˈprɪti]",
    translation: "Yetarli",
  },
  {
    id: 3,
    cognate_id: 3,
    name: "grand",
    transcription: "[grænd]",
    translation: "Katta, buyuk",
  },
  {
    id: 4,
    cognate_id: 4,
    name: "volume",
    transcription: "[ˈvɒljʊm]",
    translation: "ovoz balandligi",
  },
  {
    id: 5,
    cognate_id: 5,
    name: "draw (drew, drawn)",
    transcription: "[drɔː]",
    translation: "chizilgan (chizilgan, chizilgan)",
  },
  {
    id: 6,
    cognate_id: 6,
    name: "coach",
    transcription: "[kəʊʧ]",
    translation: "murabbiy",
  },
  {
    id: 7,
    cognate_id: 7,
    name: "provide",
    transcription: "[prəˈvaɪd]",
    translation: "ta'minlash",
  },
  {
    id: 8,
    cognate_id: 7,
    name: "provider",
    transcription: "[prəˈvaɪdə]",
    translation: "provayder",
  },
  {
    id: 9,
    cognate_id: 7,
    name: "provision",
    transcription: "[prəˈvɪʒən]",
    translation: "ta'minlash",
  },
  {
    id: 10,
    cognate_id: 8,
    name: "cope with",
    transcription: "[kəʊpwɪð]",
    translation: "bilan engish",
  },
  {
    id: 11,
    cognate_id: 9,
    name: "condition",
    transcription: "[kənˈdɪʃən]",
    translation: "shart",
  },
  {
    id: 12,
    cognate_id: 10,
    name: "land",
    transcription: "[lænd]",
    translation: "yer",
  },
  {
    id: 13,
    cognate_id: 11,
    name: "scope",
    transcription: "[skəʊp]",
    translation: "doira",
  },
  {
    id: 14,
    cognate_id: 12,
    name: "pack",
    transcription: "[pæk]",
    translation: "to'plami",
  },
  {
    id: 15,
    cognate_id: 12,
    name: "package",
    transcription: "[ˈpækɪʤ]",
    translation: "paket",
  },
];
