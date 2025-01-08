import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity); // Wrap TouchableOpacity

const Home = () => {
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
            <StyledText className="text-xl font-bold text-white">Happy Mahlangu</StyledText>
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
