import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Icon from "react-native-vector-icons/Ionicons";
import axios from "axios";
import { FlatList } from "react-native-gesture-handler";

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledImage = styled(Image);

const Button = ({
  title,
  onPress,
  icon,
  marginRight,
}: {
  title: string;
  onPress: () => void;
  icon?: string;
  marginRight?: number;
}) => {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#3b82f6",
          paddingHorizontal: 16,
          paddingVertical: 8,
          borderRadius: 8,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          marginRight,
        },
      ]}
      onPress={onPress}
    >
      {icon && (
        <Icon name={icon} size={18} color="white" style={{ marginRight: 8 }} />
      )}
      <StyledText className="text-white font-semibold">{title}</StyledText>
    </TouchableOpacity>
  );
};

interface Product {
  _id: string;
  name: string;
  price: number;
  stockQuantity: number;
  picture: string;
}

const Products = ({ navigation }: any) => {
  const [product, setProduct] = useState<Product[]>([]);
  const endpoint = "http://10.127.35.68:3000/api/item/items";

  const fetchProduct = async () => {
    try {
      const items: any = await axios.get(endpoint);

      setProduct(items.data.availableItems);
      console.log(items.data.availableItems);
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <StyledView className="flex-1 bg-gray-100">
      {/* Header Section */}
      <StyledView className="bg-blue-500 pb-4 px-6 rounded-b-3xl">
        <StyledView className="mt-6">
          <StyledText className="text-white text-2xl font-bold">
            Products
          </StyledText>
          <StyledText className="text-gray-200 text-sm mt-1">
            Monitor your store's financial health
          </StyledText>
        </StyledView>
        <StyledView className="flex flex-row justify-end mt-3 px-4">
          {/* Buttons with Icons */}
          <Button
            title="Add Product"
            onPress={() => navigation.navigate("UpdateStock")}
            icon="add"
            marginRight={12}
          />
          <Button title="Filter" onPress={fetchProduct} icon="filter" />
        </StyledView>
      </StyledView>

      <FlatList
        data={product}
        keyExtractor={(item) => item._id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate("UpdateStock", { item })}>
            <StyledView className="mt-6 mx-4">
              <StyledView className="bg-white rounded-xl shadow-lg p-4">
                {/* Mini Heading */}
                <StyledText className="text-lg font-bold mb-4">
                  {item.name}
                </StyledText>

                {/* Content Row */}
                <StyledView className="flex flex-row items-center">
                  {/* Product Image */}
                  <StyledImage
                    source={{ uri: item.picture }}
                    className="w-20 h-20 rounded-lg"
                  />

                  {/* Product Details */}
                  <StyledView className="ml-4">
                    <StyledText className="text-sm font-medium text-gray-700">
                      Price: R{item.price}
                    </StyledText>
                    <StyledText className="text-sm font-medium text-gray-700">
                      Stock: {item.stockQuantity}
                    </StyledText>
                  </StyledView>
                </StyledView>
              </StyledView>
            </StyledView>
          </TouchableOpacity>
        )}
      />
    </StyledView>
  );
};

export default Products;
