import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { createItem } from "../services/item";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledView = styled(View);
const StyledText = styled(Text);

const NewProduct = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [picture, setPicture] = useState("");

  const [orgId, setOrgId] = useState<any>(null);
  const [masId, setMasId] = useState<any>(null);

  const [loading, setLoading] = useState<boolean>(true)

  const getOrganisationId = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        console.log("Parsed organisation ID:", parsedUserData.organisationId);
        console.log("Parsed master ID:", parsedUserData.id)
        setOrgId(parsedUserData.organisationId);
        setMasId(parsedUserData.id)
        return parsedUserData.organisationId && parsedUserData.masId;
      } else {
        console.log("No user data found in AsyncStorage.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving user data:", error);
      return null;
    }
  }

  const createNewProductHandler = async () => {
    try {
      const response = await createItem({
        name: name,
        price: price,
        stockQuantity: quantity,
        picture: picture
      }, orgId, masId)

      const productId = response.data?.item?._id;
      
      if (productId) {
        console.log("New product registered successfully:", productId);
        // Navigate to the Success screen after successful item creation
        navigation.navigate("NewProductSuccess", { productId });
      }
    } catch (error) {
      console.error("Error registering new product:", error);
    }
  };

  useEffect(() => {
    const fetchOrg = async () => {
      await getOrganisationId();
      setLoading(false)
    }
    fetchOrg()
  }, [])

  return (
    <StyledView className="flex-1 bg-gray-100 justify-center px-6">
      {/* Header Section */}
      <Header
        title="Add New Product"
        subtitle="Add new product to your inventory and effortlessly scale your inventory"
      />

      {/* Form Section */}
      <StyledView className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Input
          label="Name"
          placeholder="Enter your product name"
          value={name}
          onChangeText={setName}
        />
        <Input
          label="Price"
          placeholder="Enter your product price"
          value={price}
          onChangeText={setPrice}
        />
        <Input
          label="Quantity"
          placeholder="Enter your initial quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
        <Input
          label="Picture url"
          placeholder="Enter product picture url"
          value={picture}
          onChangeText={setPicture}
        />
        <Button
          title={loading ? "Loading" : "Register"}
          onPress={() => createNewProductHandler()}
          style="mt-4"
        />
      </StyledView>
    </StyledView>
  )
}

export default NewProduct;