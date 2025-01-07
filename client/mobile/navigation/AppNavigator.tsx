import React from "react";
import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Ionicons"; // Icon library for modern tab icons
import { styled } from "nativewind";

// Screens
import Home from "../screens/Home";
import Products from "../screens/Products";
import Analytics from "../screens/Analytics";
import Notifications from "../screens/Notifications";
import Welcome from "../screens/Welcome";
import RegisterUser from "../screens/RegisterUser";
import LoginUser from "../screens/LoginUser";

// Styled components using NativeWind
const StyledText = styled(Text);
const StyledView = styled(View);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator (for main app screens)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#f8f9fa", height: 60 }, // Modern look with a light background
        tabBarActiveTintColor: "tomato",
        tabBarInactiveTintColor: "gray",
        tabBarLabelStyle: { fontSize: 12 },
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Home":
              iconName = "home-outline";
              break;
            case "Products":
              iconName = "cube-outline";
              break;
            case "Analytics":
              iconName = "stats-chart-outline";
              break;
            case "Notifications":
              iconName = "notifications-outline";
              break;
            default:
              iconName = "ellipse-outline";
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Products" component={Products} />
      <Tab.Screen name="Analytics" component={Analytics} />
      <Tab.Screen name="Notifications" component={Notifications} />
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
          options={{ headerShown: false }} // No header for Register
        />
        <Stack.Screen
          name="LoginUser"
          component={LoginUser}
          options={{ headerShown: false }} // No header for Login
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
