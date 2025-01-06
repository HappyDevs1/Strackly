import React from 'react';
import {
  View,
  Text,
  ImageBackground,
} from 'react-native';
import { styled } from 'nativewind';
import Button from '../components/Button';
import { BlurView } from '@react-native-community/blur';

const StyledImageBackground = styled(ImageBackground);
const StyledView = styled(View);
const StyledText = styled(Text);

export default function Welcome({ navigation }: any) {
  return (
    <StyledImageBackground className='flex-1'
      source={require('../assets/images/welcomeBackground.jpg')} // Image source
      resizeMode="cover" // Ensures the image covers the whole screen
    >
      <StyledView className='flex-1 justify-end items-center my-16 bg-opacity-50'>
        <StyledText className='font-bold text-2xl'>Streamline Stock Tracking</StyledText>
        <StyledText className='font-bold text-2xl'>And Control</StyledText>
        <StyledView className='flex items-center my-3'>
        <StyledText className='text-gray-500'>Streamline Stock Tracking With Tools For Efficient</StyledText>
        <StyledText className='text-gray-500'>Inventory Management.</StyledText>
        </StyledView>
        <Button title='Get Started' onPress={() => navigation.navigate('LoginUser')} style='mt-4' />
          <StyledText className='text-gray-500 mt-7'>Don't Have An Account ?</StyledText>
          <StyledText className='text-blue-600 mt-2' onPress={() => navigation.navigate('SignupUser')}>Register Now</StyledText>
      </StyledView>
    </StyledImageBackground>
  );
}
