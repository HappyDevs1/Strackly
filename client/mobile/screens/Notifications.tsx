import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);

const Notifications = () => {
  return (
    <StyledView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <StyledView className="bg-blue-500 pb-4 rounded-b-3xl">
        <StyledText className="text-2xl font-bold text-white px-4 pt-4">Notifications</StyledText>
        <StyledText className="text-sm text-gray-200 px-4">
          Stay updated with your latest notifications
        </StyledText>
      </StyledView>

      {/* Notifications Section */}
      <StyledView className="mt-6 mx-4">
        {/* Notification Card */}
        <StyledView className="bg-white rounded-xl shadow-lg p-4 flex flex-row items-start">
          {/* Icon */}
          <StyledView className="bg-blue-100 p-3 rounded-lg">
            <Icon name="notifications-outline" size={24} color="blue" />
          </StyledView>

          {/* Notification Details */}
          <StyledView className="ml-4 flex-1">
            <StyledText className="text-lg font-semibold text-gray-800">
              New Product Added
            </StyledText>
            <StyledText className="text-sm text-gray-600 mt-1">
              You added a new product to your inventory: Coca Cola. This is just a sample notification text.
            </StyledText>

            {/* Employee Name */}
            <StyledText className="text-sm text-gray-800 mt-2">
              <StyledText className="font-bold">Employee:</StyledText> John Doe
            </StyledText>

            {/* Time Ago */}
            <StyledText className="text-xs text-gray-400 mt-1">2 hours ago</StyledText>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Notifications;