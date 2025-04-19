// screens/SuccessScreen.tsx
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { styled } from 'nativewind';
import SuccessPage from '../components/SuccessPage';
import Button from '../components/Button';

const StyledView = styled(View);
const StyledText = styled(Text);

const UpdateStockSuccess = ({ navigation }: any) => {
  
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SuccessPage
        title="Success!"
        message="Stock updated successfully"
      >
        <StyledView className='mt-14'>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Main")}
            />
        </StyledView>
      </SuccessPage>
    </SafeAreaView>
  );
};

export default UpdateStockSuccess;
