import { View, Text, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import { styled } from 'nativewind';
import Header from '../components/Header';
import Input from '../components/Input';
import Button from '../components/Button';
import { loginMasterUser } from '../services/masterUser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { all } from 'axios';

const StyledView = styled(View);
const StyledText = styled(Text);

const LoginMasterUser = ({ navigation }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await loginMasterUser({ email, password });

      if (response.data?.loggedInMasterUser) {
        // Store useful user data in AsyncStorage
        await AsyncStorage.setItem("user", JSON.stringify({
          id: response.data.loggedInMasterUser._id,
          name: response.data.loggedInMasterUser.name,
          email: response.data.loggedInMasterUser.email,
          phone: response.data.loggedInMasterUser.phone,
          allowedToSell: response.data.loggedInMasterUser.allowedToSell,
          organisationId: response.data.loggedInMasterUser.organisation,
          token: response.data.loginToken,
        }))
        navigation.navigate("Main");
      } else {
        console.warn("Master User ID is undefined")
      }
      } catch (error) {
      console.log("Please enter valid credentials");
    }
  };

  return (
    <StyledView className="flex-1 bg-gray-100 justify-center px-6">
      {/* Header Section */}
      <Header
        title="Login to a master user account."
        subtitle="Effortlessly login, access your account, and enjoy seamless convenience."
      />

      {/* Form Section */}
      <StyledView className="bg-white p-6 rounded-lg shadow-md mt-6">
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
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin} style="mt-4" />
      </StyledView>

      {/* Already Have An Account Section */}
      <StyledView className="flex items-center justify-center mt-6">
        <StyledText className="text-gray-500 mb-1">
          Don't have an account yet?
        </StyledText>
        <TouchableOpacity onPress={() => navigation.navigate("RegisterMasterUser")}>
          <StyledText className="text-blue-500 font-semibold">Register</StyledText>
        </TouchableOpacity>
      </StyledView>
    </StyledView>
  );
};

export default LoginMasterUser;
