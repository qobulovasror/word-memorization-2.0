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
import Statistics from "../components/statistics";
// import { getWords } from "../services/wordDBService";

const Home = ({ goToProfile, navigation }) => {
  return (
    <View style={defaultStyle.container}>
      <CustomHeader title="Asosiy bo'lim"/>
      <ScrollView style={defaultStyle.column}>
        {/* Kunlik so'z o'rganish */}
        <View style={[defaultStyle.column, { marginBottom: 2 }]}>
          <Text style={{ fontSize: 15 }}>Kunlik so'z o'rganish</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => goToProfile()}
            >
              <AntDesign name="pluscircleo" size={25} color={"#0f0"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                So'z qo'shish va qo'shilgan so'zlar
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              // onPress={() => navigation.navigate("Bugungi so'zlarni o'rganish")}
              onPress={() => navigation.jumpTo('learn', { owner: 'Michaś' })}
            >
              <Feather name="refresh-ccw" size={25} color={"#00f"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                So'zlarni o'rganish va takrorlash
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Profile")}
            >
              <Feather name="bookmark" size={25} color={"#50C878"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Yod olingan so'zlar
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Qo'shimcha imkoniyatlar */}
        <View style={[defaultStyle.column, { marginBottom: 2 }]}>
          <Text style={{ fontSize: 15 }}>Qo'shimcha imkoniyatlar</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Translate")}
            >
              <MaterialCommunityIcons
                name="translate"
                size={25}
                color={"#9457EB"}
              />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Tarjima qilish
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Gramatik tekshiruv")}
            >
              <FontAwesome5 name="spell-check" size={25} color={"#516512"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Gramatik tekshiruv
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Noto'g'ri fe'llar")}
            >
              <Ionicons name="list" size={25} color={"#B91786"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Noto'g'ri fe'llar
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Alifbo")}
            >
              <MaterialCommunityIcons
                name="alphabetical"
                size={25}
                color={"#121786"}
              />
              <Text style={{ marginStart: 10, fontSize: 20 }}>Alifbo</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Raqamlar")}
            >
              <MaterialCommunityIcons
                name="numeric"
                size={25}
                color={"#00ff00"}
              />
              <Text style={{ marginStart: 10, fontSize: 20 }}>Raqamlar</Text>
            </TouchableOpacity>
          </View>
        </View>
        {/* Statistika */}
        <Statistics/>
        {/* Dastur haqida */}
        <View style={[defaultStyle.column, { marginBottom: 2 }]}>
          <Text style={{ fontSize: 15 }}>Dastur haqida</Text>
          <View style={[defaultStyle.column, mainStyle.itemGroup]}>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Sozlanmalar")}
            >
              <AntDesign name="setting" size={25} color={"#00f"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>Sozlanmalar</Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Fikr-mulohazalar")}
            >
              <Octicons name="feed-discussion" size={25} color={"#50C878"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Fikr-mulohazalar
              </Text>
            </TouchableOpacity>
            <View style={mainStyle.hr}></View>
            <TouchableOpacity
              style={[defaultStyle.row, mainStyle.item]}
              onPress={() => navigation.navigate("Dastur haqida ma'lumot")}
            >
              <AntDesign name="infocirlceo" size={25} color={"#B91786"} />
              <Text style={{ marginStart: 10, fontSize: 20 }}>
                Dastur haqida va bog'lanish
              </Text>
            </TouchableOpacity>
            {/* <View style={mainStyle.hr}></View> */}
            {/* <TouchableOpacity style={[defaultStyle.row, mainStyle.item]}
              onPress={()=>navigation.navigate("Bog'lanish")}>
              <AntDesign name="contacts" size={25} color={"#9457EB"} />
              <Text style={{marginStart: 10, fontSize: 20}}>Bog'lanish</Text>
            </TouchableOpacity> */}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
