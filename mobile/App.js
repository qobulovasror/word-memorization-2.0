import { Animated } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator,
  CardStyleInterpolators,
} from "@react-navigation/stack";
import { AppNavigastionScreenConfig } from "./config/config.js";
import MainScreen from "./navigation/MainScreen";
import Profile from "./navigation/screens/Profile";
import Feedback from "./navigation/info/Feedback.js";
import Information from "./navigation/info/Information.js";
import { useState } from "react";

const Stack = createStackNavigator();

function MyStack() {
  const [mode, setMode] = useState("dark"); //light - dark
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainScreen"
        options={{
          headerTintColor: "#000",
          headerStyle: { backgroundColor: "#EDF1FCFF", height: 50 },
          transitionSpec: {
            open: AppNavigastionScreenConfig,
            close: AppNavigastionScreenConfig,
          },
        }}
      >
        {(props) => <MainScreen {...props} mode={mode} setMode={setMode}/>}
      </Stack.Screen>
      <Stack.Screen
        name="Fikr-mulohazalar"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {(props) => <Feedback {...props} mode={mode} />}
      </Stack.Screen>
      <Stack.Screen
        name="Dastur haqida ma'lumot"
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      >
        {(props) => <Information {...props} mode={mode} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
