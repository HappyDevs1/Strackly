import { View, Text } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, margin: 25 }}> {/* SafeAreaView from safe-area-context */}
      <StyledView className="flex flex-row gap-6 items-center">
        <Icon name="person-outline" size={25} color="black" />
        <StyledView className="flex flex-col">
          <StyledText className="text-xl font-bold">Hello,</StyledText>
          <StyledText className="text-2xl font-bold">Happy Mahlangu</StyledText>
        </StyledView>
      </StyledView>
    </SafeAreaView>
  );
};

export default Home;
