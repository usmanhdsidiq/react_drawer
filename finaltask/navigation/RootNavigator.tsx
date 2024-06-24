import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from '../screens/HomeScreen';
import DetailsScreen from '../screens/DetailsScreen';
import LoginScreen from "../screens/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";
import { RootStackParamList } from "../types";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Stack = createStackNavigator<RootStackParamList>({});
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const DrawerNavigator = () => {
    return (
            <Drawer.Navigator initialRouteName="Tabs">
                <Drawer.Screen name="Tabs" component={TabNavigator} />
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Details" component={DetailsScreen} />
            </Drawer.Navigator>
    );
};

const TabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Details" component={DetailsScreen} />
        </Tab.Navigator>
    )
}

const RootNavigator = () => {
    return (
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
                <Stack.Screen name="Main" component={DrawerNavigator} options={{ headerShown: false }} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
    );
};

export default () => (
    <NavigationContainer>
        <RootNavigator />
    </NavigationContainer>
)