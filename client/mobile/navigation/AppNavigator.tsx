import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
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
import RegisterMasterUser from "../screens/RegisterMasterUser";
import LoginMasterUser from "../screens/LoginMasterUser";
import BarcodeScanner from "../screens/BarcodeScanner";
import UpdateStock from "../screens/UpdateStock";
import CreateOrganisation from "../screens/CreateOrganisation";
import RegisterEmployeeUser from "../screens/RegisterEmployeeUser";
import RegisterEmployeeSuccess from "../screens/RegisterEmployeeSuccess";

// Styled components using NativeWind
const StyledText = styled(Text);
const StyledView = styled(View);

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Custom Barcode Scanner Button
const FloatingTabButton = ({ onPress }: any) => (
  <TouchableOpacity
    style={styles.floatingButton}
    onPress={onPress}
    activeOpacity={0.7}
  >
    <Icon name="barcode-outline" size={30} color="#fff" />
  </TouchableOpacity>
);

// Bottom Tab Navigator (for main app screens)
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { backgroundColor: "#f8f9fa", height: 60 },
        tabBarActiveTintColor: "#007bff",
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
            case "BarcodeScanner":
              // No icon here since we're customizing the tab button
              return null;
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
      
      {/* Floating Tab */}
      <Tab.Screen
        name="BarcodeScanner"
        component={BarcodeScanner} // Redirect to barcode scanner component
        options={{
          tabBarButton: (props) => <FloatingTabButton {...props} />,
          tabBarLabel: () => null, // Hide the label
        }}
      />
      
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
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterUser"
          component={RegisterMasterUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterEmployeeUser"
          component={RegisterEmployeeUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegisterEmployeeSuccess"
          component={RegisterEmployeeSuccess}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginUser"
          component={LoginMasterUser}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="UpdateStock"
          component={UpdateStock}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CreateOrganisation"
          component={CreateOrganisation}
          options={{ headerShown: false }}
        />
        {/* Main App (Bottom Tabs) */}
        <Stack.Screen
          name="Main"
          component={BottomTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Styles
const styles = StyleSheet.create({
  floatingButton: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#007bff", // Blue background
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 15, // Push it upwards 50% of the tab bar height
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Add shadow on Android
  },
});
