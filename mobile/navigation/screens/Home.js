import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import {
  AntDesign,
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  FontAwesome5,
  Octicons,
} from "@expo/vector-icons";
import { mainStyle } from "../../assets/styles/main";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import CustomHeader from "../components/header";
import { LineStatistics, ContribStatistics } from "../components/statistics";
// import { getWords } from "../services/wordDBService";

const Home = ({ goToOutScreen, navigation }) => {
  return (
    <View style={defaultStyle.container}>
      <CustomHeader title="Asosiy bo'lim" />
      <ScrollView style={defaultStyle.column}>
        {/* Statistics */}
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Statistika</Text>
        <LineStatistics />

        {/* Kunlik so'z o'rganish */}
        <View style={[defaultStyle.column, { marginBottom: 2 }]}>
          <Text style={{ fontSize: 20 }}>Kunlik so'z o'rganish</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.jumpTo("add", { owner: "Michaś" })}
            >
              <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Yangi so'z qo'shish
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              // onPress={() => navigation.navigate("Bugungi so'zlarni o'rganish")}
              onPress={() => navigation.jumpTo("learn")}
            >
              <Feather name="refresh-ccw" size={25} color={"#00f"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                So'zlarni o'rganish va takrorlash
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => goToOutScreen("Profile")}
            >
              <Feather name="list" size={25} color="#9457EB" />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Kiritilgan so'zlar ro'yxati
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.jumpTo("game")}
            >
              <Ionicons
                name="game-controller-outline"
                size={26}
                color="#F4CA16FF"
              />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                O'yin orqali so'z o'rganish
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Dastur haqida */}
        <View style={[defaultStyle.column, { marginBottom: 2 }]}>
          <Text style={{ fontSize: 20 }}>Dastur haqida</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() =>navigation.jumpTo("Setting")}
            >
              <AntDesign name="setting" size={25} color={"#D06421FF"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>Sozlanmalar</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => goToOutScreen("Fikr-mulohazalar")}
            >
              <Octicons name="feed-discussion" size={25} color={"#50C878"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Fikr-mulohazalar
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => goToOutScreen("Dastur haqida ma'lumot")}
            >
              <AntDesign name="infocirlceo" size={25} color={"#B91786"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Dastur haqida va bog'lanish
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Activites */}
        <Text style={{ fontSize: 20, fontWeight: "600" }}>Faollik</Text>
        <ContribStatistics />
        <View style={{ marginBottom: 10 }}></View>
      </ScrollView>
    </View>
  );
};

export default Home;
