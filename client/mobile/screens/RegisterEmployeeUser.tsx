import { View, Text, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { registerEmployeeUser } from "../services/employeeUser";
import AsyncStorage from "@react-native-async-storage/async-storage";

const StyledView = styled(View);
const StyledText = styled(Text);

const RegisterEmployeeUser = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organisationId, setOrganisationId] = useState<any>(null);

  const getOrganisationId = async () => {
    try {
      const userData = await AsyncStorage.getItem("user");
      if (userData) {
        const parsedUserData = JSON.parse(userData);
        console.log("Parsed organisation ID:", parsedUserData.organisationId);
        setOrganisationId(parsedUserData.organisationId);
        return parsedUserData.organisationId;
      } else {
        console.log("No user data found in AsyncStorage.");
        return null;
      }
    } catch (error) {
      console.error("Error retrieving organisation ID:", error);
      return null;
    }
  }

  const registerEmployeeUserHandler = async () => {
    try {
      registerEmployeeUser({
        username,
        password,
      }, organisationId)
      navigation.navigate("RegisterEmployeeSuccess");
    } catch (error) {
      console.error("Error registering employee user:", error);
    }
  };

  useEffect(() => {
    getOrganisationId();}
  , []);

  return (
    <StyledView className="flex-1 bg-gray-100 justify-center px-6">
      {/* Header Section */}
      <Header
        title="Register now to access your account."
        subtitle="Effortlessly register, access your account, and enjoy seamless convenience!"
      />

      {/* Form Section */}
      <StyledView className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Input
          label="Username"
          placeholder="Enter employee username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          label="Password"
          placeholder="Enter employee password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Hides the password input
        />
        <Button
          title="Register"
          onPress={() => registerEmployeeUserHandler()}
          style="mt-4"
        />
      </StyledView>
    </StyledView>
  )
}

export default RegisterEmployeeUser;