import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);

const Home = () => {
  return (
    <StyledView>
      <StyledView className="bg-blue-500 px-6 pb-[40%] rounded-3xl">
        {/* Header Row */}
        <StyledView className="flex flex-row gap-4 items-center my-6">
          <StyledView className="flex bg-white p-3 rounded-xl">
            <Icon name="person-outline" size={21} color="black" />
          </StyledView>
          <StyledView className="flex flex-col">
            <StyledText className="text-lg font-semibold">Hello,</StyledText>
            <StyledText className="text-xl font-bold text-white">Happy Mahlangu</StyledText>
          </StyledView>
        </StyledView>

        {/* Calendar Row */}
        <StyledView className="flex flex-row items-center w-full px-4 py-3 rounded-xl bg-white">
          <Icon name="calendar-number" size={21} color="tomato" />
          <StyledText className="ml-2 font-semibold text-black">07 January 2025</StyledText>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Home;