import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";

const StyledView = styled(View);
const StyledText = styled(Text);

const RegisterUser = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <StyledView className="flex justify-center items-center mx-5 my-12">
      <Header
        title="Register now to access your account."
        subtitle="Effortlessly register, access your account, and enjoy seamless convenience!"
      />

      <StyledView className="w-full">
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
        />
        <Input
          label="Confirm Password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
      </StyledView>

      <Button
        title="Register"
        onPress={() => console.log("Register")}
        style="mt-4"
      />

      {/* Already Have An Account Section */}
      <StyledView className="flex justify-center items-center mt-4">
        <StyledText className="text-gray-500 mb-1">
          Already Have An Account?
        </StyledText>
        <TouchableOpacity onPress={() => console.log("Navigate to Login")}>
          <StyledText className="text-blue-500 font-semibold">Login</StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default RegisterUser;