import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "../screens/HomeScreen";
import Profile from "../screens/ProfileScreen";
import Welcome from "../screens/Welcome";
import RegisterUser from "../screens/RegisterUser";
import LoginUser from "../screens/LoginUser";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator (for main app screens)
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

// Stack Navigator (includes Welcome + Tabs)
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Landing Screen */}
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{ headerShown: false }} // No header for Welcome
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterUser}
          options={{ headerShown: false }} // No header for Welcome
        />

        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{ headerShown: false }} // No header for Welcome
        />

        {/* Main App (Bottom Tabs) */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }} // Hide stack header when showing tabs
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
