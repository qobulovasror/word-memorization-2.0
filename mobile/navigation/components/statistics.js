import { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { defaultStyle } from "../../assets/styles/defaultStyle";
import { mainStyle } from "../../assets/styles/main";

import {
  LineChart,
  ContributionGraph,
} from "react-native-chart-kit";

const screenWidth = Dimensions.get("window").width;

const Statistics = () => {
  return (
    <View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
        bezier
      />
    </View>
  );
};

const commitsData = [
  { date: "2017-01-02", count: 1 },
  { date: "2017-01-03", count: 2 },
  { date: "2017-01-04", count: 3 },
  { date: "2017-01-05", count: 4 },
  { date: "2017-01-06", count: 5 },
  { date: "2017-01-30", count: 2 },
  { date: "2017-01-31", count: 3 },
  { date: "2017-03-01", count: 2 },
  { date: "2017-04-02", count: 4 },
  { date: "2017-03-05", count: 2 },
  { date: "2017-02-30", count: 4 },
];

const data = {
  labels: ["January", "February", "March", "April", "May", "June"],
  datasets: [
    {
      data: [20, 45, 28, 80, 99, 43],
    },
  ],
};

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientTo: "#08130D",
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
};

const Statistics1 = () => {
  const [words, setWords] = useState({
    new: 0,
    memorized: 0,
    repeat: 0,
  });
  const fetchData = () => {
    return;
    // getWords()
    //   .then((datas) => {
    //     const data = { new: 0, repeat: 0, memorized: 0 };
    //     datas.forEach((element) => {
    //       element.status == "new"
    //         ? data.new++
    //         : element.status == "memorized"
    //         ? data.memorized++
    //         : data.repeat++;
    //     });
    //     setWords(data);
    //   })
    //   .catch((err) => {
    //     alert(err);
    //   });
  };
  useEffect(() => {
    // fetchData();
  }, []);
  const dayOfWeek = new Date().getDay();
  return (
    <View style={[defaultStyle.column, { marginBottom: 2 }]}>
      <Text style={{ fontSize: 15 }}>Statistika</Text>
      <View style={[defaultStyle.column, mainStyle.itemGroup]}>
        <View style={defaultStyle.row}>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 1 ? "#ccc" : "" },
            ]}
          >
            <Text>Du</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 2 ? "#ccc" : "" },
            ]}
          >
            <Text>Se</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 3 ? "#ccc" : "" },
            ]}
          >
            <Text>Ch</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 4 ? "#ccc" : "" },
            ]}
          >
            <Text>Pa</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 5 ? "#ccc" : "" },
            ]}
          >
            <Text>Ju</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 6 ? "#ccc" : "" },
            ]}
          >
            <Text>Sh</Text>
          </View>
          <View
            style={[
              mainStyle.weekDay,
              { backgroundColor: dayOfWeek === 0 ? "#ccc" : "" },
            ]}
          >
            <Text>Ya</Text>
          </View>
        </View>
        <View style={defaultStyle.column}>
          <View style={mainStyle.stats}>
            <Text>Yangi so'zlar: {words.new}</Text>
          </View>
          <View style={mainStyle.stats}>
            <Text>Yodlangan so'zlar: {words.memorized}</Text>
          </View>
          <View style={mainStyle.stats}>
            <Text>Takrorlash kerak bo'lgan so'zlar: {words.repeat}</Text>
          </View>
          <View style={[defaultStyle.row, defaultStyle.between]}>
            <Text style={{ fontSize: 20, padding: 10 }}>
              Jami: {words.new + words.memorized + words.repeat}
            </Text>
            <TouchableOpacity style={mainStyle.btn}>
              <FontAwesome name="refresh" size={30} color={"#000"} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={[mainStyle.hr, { marginVertical: 10 }]}></View>
        <View style={[defaultStyle.row, defaultStyle.between]}>
          <View style={defaultStyle.column}>
            <View style={defaultStyle.row}>
              <FontAwesome
                name="line-chart"
                size={25}
                color={"#50C878"}
                style={{ margin: 10, marginEnd: 15 }}
              />
              <View style={defaultStyle.column}>
                <Text style={{ fontSize: 18 }}>Kunlik reja</Text>
                <Text style={{ fontSize: 20 }}>0/10</Text>
              </View>
            </View>
            <Text style={{ margin: 5, fontSize: 15 }}>
              Bir oyda 0/300 ta yangi so'z
            </Text>
          </View>
          <TouchableOpacity
            style={[mainStyle.btn, { backgroundColor: "#0f0" }]}
          >
            <Ionicons name="pencil" size={30} color={"#000"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Statistics;
