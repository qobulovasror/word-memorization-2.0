import {Animated} from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import {AppNavigastionScreenConfig} from './config/config.js';
import MainScreen from './navigation/MainScreen';
import Profile from "./navigation/screens/Profile";

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name=" "
        component={MainScreen}
        options={{
          headerTintColor: '#000',
          headerStyle: { backgroundColor: '#EDF1FCFF', height: 50},
          transitionSpec: {
            open: AppNavigastionScreenConfig,
            close: AppNavigastionScreenConfig,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          cardStyleInterpolator:
            CardStyleInterpolators.forFadeFromBottomAndroid,
        }}
      />
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