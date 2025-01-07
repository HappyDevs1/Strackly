import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

const Home = () => {
  return (
    <StyledView>
      <StyledText>HomeScreen</StyledText>
    </StyledView>
  )
}

export default Home