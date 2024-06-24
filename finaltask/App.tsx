import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "./screens/LoginScreen";
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import { RootStackParamList } from "./types";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { ItemsProvider } from "./ItemsContext";
import { Icon } from '@rneui/themed';

const Stack = createStackNavigator<RootStackParamList>();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Details" component={DetailsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

const RootNavigator = () => (
  <Stack.Navigator initialRouteName="Login">
    <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false}} />
    <Stack.Screen name="Main" component={TabNavigator} options={{ headerShown: false}} />
    <Stack.Screen name="Details" component={DetailsScreen} />
  </Stack.Navigator>
);

const App = () => (
  <ItemsProvider>
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  </ItemsProvider>
);

export default App;