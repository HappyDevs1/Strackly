import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/Ionicons';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Button = ({ title, onPress, icon, marginRight }: { title: string; onPress: () => void; icon?: string; marginRight?: number }) => {
  return (
    <TouchableOpacity
      style={[{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#3b82f6', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.25, shadowRadius: 3.84, marginRight }]}
      onPress={onPress}
    >
      {icon && <Icon name={icon} size={18} color="white" style={{ marginRight: 8 }} />}
      <StyledText className="text-white font-semibold">{title}</StyledText>
    </TouchableOpacity>
  );
};

const Products = () => {
  return (
    <StyledView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <StyledView className="bg-blue-500 pb-4 rounded-b-3xl">
        <Header title="Inventory" />
        <StyledView className="flex flex-row justify-end mt-3 px-4">
          {/* Buttons with Icons */}
          <Button title="Add Product" onPress={() => {}} icon="add" marginRight={12} />
          <Button title="Filter" onPress={() => {}} icon="filter" />
        </StyledView>
      </StyledView>

      {/* Product Card Section */}
      <StyledView className="mt-6 mx-4">
        <StyledView className="bg-white rounded-xl shadow-lg p-4">
          {/* Mini Heading */}
          <StyledText className="text-lg font-bold mb-4">Coca Cola</StyledText>

          {/* Content Row */}
          <StyledView className="flex flex-row items-center">
            {/* Product Image */}
            <StyledImage
              source={{
                uri: 'https://oasisliquordistributors.co.za/wp-content/uploads/2022/11/oasis_wholesaler-coke_202l-145.jpg',
              }}
              className="w-20 h-20 rounded-lg"
            />

            {/* Product Details */}
            <StyledView className="ml-4">
              <StyledText className="text-sm font-medium text-gray-700">Price: R25.00</StyledText>
              <StyledText className="text-sm font-medium text-gray-700">Stock: 75</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default Products;