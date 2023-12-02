import React, { useEffect, useState } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { defaultStyle } from "../../assets/styles/defaultStyle";

import Add from "./addAndList/Add";
import AddeddList from "./addAndList/List";
import { createWordTable, getWords } from "../../services/wordDBService";
import CustomHeader from "../components/header";

export default function AddWords({navigation}) {
  const [mode, setMode] = useState("add");
  const [list, setList] = useState([]);
  const [edit, setEdit] = useState("");

  const fetchData = () => {
    return;
    getWords()
      .then((data) => {
        setList(data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  const switchHandler = (mode) => {
    setMode(mode);
    if (mode === "addeddList") fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);
  const selectedStyle = { backgroundColor: "#71BBF8FF", borderColor: "#fff" };

  return (
    <View style={defaultStyle.container}>
      <TouchableOpacity style={{position: 'absolute', margin: 10, zIndex: 10}} onPress={() => navigation.jumpTo("Home")}>
        <AntDesign name="left" size={28} color="black" />
      </TouchableOpacity>
      <CustomHeader
        title={
          mode != "addeddList" ? "Yangi so'z qo'shish" : "Qo'shilgan so'zlar"
        }
      />
      <View
        style={[defaultStyle.row, defaultStyle.around, defaultStyle.switchMode]}
      >
        <TouchableOpacity
          style={[defaultStyle.switchBtn, mode == "add" ? selectedStyle : ""]}
          onPress={() => switchHandler("add")}
        >
          <Text>Yangi so'z qo'shish</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            defaultStyle.switchBtn,
            mode == "addeddList" ? selectedStyle : "",
          ]}
          onPress={() => switchHandler("addeddList")}
        >
          <Text>Qo'shilgan so'zlar</Text>
        </TouchableOpacity>
      </View>
      {mode === "add" ? (
        <Add fetchData={fetchData} edit={edit} setEdit={setEdit} />
      ) : (
        <AddeddList
          fetchData={fetchData}
          list={list}
          setMode={setMode}
          setEdit={setEdit}
        />
      )}
    </View>
  );
}
