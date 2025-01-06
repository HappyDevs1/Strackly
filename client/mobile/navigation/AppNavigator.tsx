import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import WelcomeScreen from '../screens/Welcome';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

// Bottom Tab Navigator (for main app screens)
function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
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
          component={WelcomeScreen}
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
