import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { RootStackParamList } from '../types/types';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';
import { updateItem } from '../services/item';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Input from '../components/Input';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);
const StyledImage = styled(Image);

const UpdateStock = ({ route }: any) => {
  const [quantity, setQuantity] = useState<any>("");
  const [masterId, setMasterId] = useState<any>(null);

  const { item } = route.params;
  const itemId = item._id;

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const getMasterId = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        console.log("Parsed master ID:", parsedUserData.id)
        setMasterId(parsedUserData.id);
        return parsedUserData.masId
      } else {
        console.log("No user data found in AsyncStorage.")
        return null;
      }
    } catch (error) {
      console.error("Failed to fetch master ID:", error)
    }
  }

  const updateStockHandler = async () => {
    if (!quantity || isNaN(Number(quantity))) {
      Alert.alert('Invalid Input', 'Please enter a valid quantity.');
      return;
    }
    try {
      const response = await updateItem({ additionalStock: Number(quantity) }, itemId, masterId)
      console.log("Product quantity updated successfully:", response)
      navigation.navigate("UpdateStockSuccess")
    } catch (error) {
      console.error('Unexpected error:', error);
    }
  };

  useEffect(() => {
    const fetchUserId = async () => {
      await getMasterId();
    }
    fetchUserId();
  }, [])
  

  return (
    <StyledView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <StyledView className="bg-blue-500 px-6 pb-[35%] rounded-b-3xl">
        <StyledView className="flex flex-row items-center justify-between mt-6">
          {/* Back Icon */}
          <StyledTouchableOpacity className="p-3 bg-white rounded-xl shadow-md">
            <Icon name="arrow-back-outline" size={21} color="black" onPress={() => navigation.goBack()}/>
          </StyledTouchableOpacity>

          {/* Page Title */}
          <StyledText className="text-2xl font-bold text-white">Update Stock</StyledText>

          {/* Spacer for alignment */}
          <View style={{ width: 45 }} />
        </StyledView>

        {/* Product Info */}
        <StyledView className="mt-8 bg-white rounded-xl shadow-md p-4">
          <StyledText className="text-lg font-bold text-blue-500 mb-4">Product Details</StyledText>

          {/* Row: Product Image + Details */}
          <StyledView className="flex flex-row items-center">
            {/* Product Image */}
            <StyledImage
              source={{ uri: item.picture }}
              className="w-16 h-16 rounded-lg"
            />

            {/* Product Details */}
            <StyledView className="ml-4">
              <StyledText className="text-sm font-medium text-gray-700">Product Name: {item.name}</StyledText>
              <StyledText className="text-sm font-medium text-gray-700">Current Stock: {item.stockQuantity}</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>

      {/* Update Stock Form */}
      <StyledView className="mt-8 mx-4">
        <StyledText className="text-lg font-bold text-blue-500 mb-4">Add to Stock</StyledText>

        {/* Quantity Input */}
        <StyledView className="bg-white rounded-xl shadow-md p-4">
          <Input
          label="Quantity"
          placeholder="Add quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
        </StyledView>

        {/* Update Button */}
        <StyledTouchableOpacity
          className="mt-6 bg-blue-500 p-4 rounded-xl shadow-md flex items-center"
          onPress={updateStockHandler}
        >
          <StyledText className="text-white font-bold text-lg">Update Stock</StyledText>
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default UpdateStock;
