import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

const StyledView = styled(View);
const StyledText = styled(Text);

const RegisterUser = ({ navigation }: any) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

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
          placeholder="Enter your username"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          label="Email"
          placeholder="Enter your email"
          value={email}
          onChangeText={setEmail}
        />
        <Input
          label="Password"
          placeholder="Enter your password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry // Hides the password input
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry // Hides the confirm password input
        />
        <Button
          title="Register"
          onPress={() => console.log("Register")}
          style="mt-4"
        />
      </StyledView>

      {/* Already Have An Account Section */}
      <StyledView className="flex items-center justify-center mt-6">
        <StyledText className="text-gray-500 mb-1">
          Already Have An Account?
        </StyledText>
        <TouchableOpacity onPress={() => console.log("Navigate to Login")}>
          <StyledText
            onPress={() => navigation.navigate("LoginUser")}
            className="text-blue-500 font-semibold"
          >
            Login
          </StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default RegisterUser;
