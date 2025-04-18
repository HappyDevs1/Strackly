import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity); // Wrap TouchableOpacity

const Home = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const getUserData = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        setUserData(parsedUserData);
        console.log("User data:", parsedUserData);
        setLoading(false);
      } else {
        console.log("No user data found in AsyncStorage.");
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);

  if (loading) {
    return (
      <StyledView className="flex-1 justify-center items-center bg-gray-100">
        <StyledText className="text-lg font-semibold">Loading...</StyledText>
      </StyledView>
    );
  }

  return (
    <StyledView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <StyledView className="bg-blue-500 px-6 pb-[35%] rounded-b-3xl">
        {/* Header Row */}
        <StyledView className="flex flex-row gap-4 items-center my-6">
          {/* Profile Icon */}
          <StyledView className="flex bg-white p-3 rounded-xl shadow-md">
            <Icon name="person-outline" size={21} color="black" />
          </StyledView>

          {/* User Greeting */}
          <StyledView className="flex flex-col">
            <StyledText className="text-lg font-semibold text-white">Hello,</StyledText>
            <StyledText className="text-xl font-bold text-white">{userData.name}</StyledText>
          </StyledView>
        </StyledView>

        {/* Calendar Row */}
        <StyledView className="flex flex-row items-center w-full px-4 py-3 rounded-xl bg-white shadow-md">
          <Icon name="calendar-number" size={21} color="tomato" />
          <StyledText className="ml-2 font-semibold text-black">07 January 2025</StyledText>
        </StyledView>
      </StyledView>

      {/* Content Section */}
      <StyledView className="mt-8 mx-4">
        {/* Notifications Section */}
        <StyledView className="bg-white rounded-xl shadow-lg p-4 mb-4">
          <StyledText className="text-lg font-bold mb-2 text-blue-500">Your Notifications</StyledText>
          <StyledView className="flex flex-row items-center">
            <Icon name="notifications-outline" size={21} color="gray" />
            <StyledText className="ml-2 text-gray-700">You have 2 unread notifications.</StyledText>
          </StyledView>
        </StyledView>

        {/* Quick Actions Section */}
        <StyledView className="bg-white rounded-xl shadow-lg p-4">
          <StyledText className="text-lg font-bold mb-4 text-blue-500">Quick Actions</StyledText>
          <StyledView className="flex flex-row justify-around">
            {/* Add Task Button */}
            <StyledTouchableOpacity className="bg-blue-500 p-3 rounded-xl shadow-md flex items-center">
              <Icon name="add-circle-outline" size={28} color="white" />
              <StyledText className="text-white mt-2">Add Task</StyledText>
            </StyledTouchableOpacity>

            {/* View Calendar Button */}
            <StyledTouchableOpacity className="bg-blue-500 p-3 rounded-xl shadow-md flex items-center">
              <Icon name="calendar-outline" size={28} color="white" />
              <StyledText className="text-white mt-2">Calendar</StyledText>
            </StyledTouchableOpacity>

            {/* Settings Button */}
            <StyledTouchableOpacity className="bg-blue-500 p-3 rounded-xl shadow-md flex items-center">
              <Icon name="settings-outline" size={28} color="white" />
              <StyledText className="text-white mt-2">Settings</StyledText>
            </StyledTouchableOpacity>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Home;
