import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';
import { styled } from 'nativewind';

const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledText = styled(Text);

interface ButtonProps {
  title: string;
  onPress: () => void;
  style?: string;
}

const Button: React.FC<ButtonProps> = ({ title, onPress, style }) => {
  return (
    <StyledTouchableOpacity 
      className={`px-4 py-2 bg-blue-500 rounded-lg ${style}`} 
      onPress={onPress}
    >
      <StyledText className='text-white text-center text-lg'>{title}</StyledText>
    </StyledTouchableOpacity>
  );
};

export default Button;
