import { View, Text, TouchableOpacity } from "react-native";
import { useRoute } from "@react-navigation/native";
import React, { useState } from "react";
import { styled } from "nativewind";
import Header from "../components/Header";
import Input from "../components/Input";
import Button from "../components/Button";
import { createOrganisation } from "../services/organisation";

const StyledView = styled(View);
const StyledText = styled(Text);

const CreateOrganisation = ({ navigation }: any) => {
  const [organisationName, setOrganisationName] = useState("");
  const [organisationAddress, setOrganisationAddress] = useState("");
  const [organisationPhone, setOrganisationPhone] = useState("");
  const [organisationEmail, setOrganisationEmail] = useState("");

  const route = useRoute()
  const { masId }: any = route.params || {}; // Get the organisationId from the params

  const createOrganisationHandler = async () => {
    try {
      const response = await createOrganisation({
        organisationName,
        organisationAddress,
        organisationPhone,
        organisationEmail,
        masterUser: masId
      }, masId); // Pass the master Id to the API call
      console.log("Organisation created successfully:", response.data);
      // Navigate to the Login screen after successful registration
      navigation.navigate("LoginUser");
    } catch (error) {
      console.error("Error creating a new organisation:", error);
    }
  }


  return (
    <StyledView className="flex-1 bg-gray-100 justify-center px-6">
      {/* Header Section */}
      <Header
        title="Create Organisation."
        subtitle="Effortlessly your digital organisation, access your account, and enjoy seamless convenience!"
      />

      {/* Form Section */}
      <StyledView className="bg-white p-6 rounded-lg shadow-md mt-6">
        <Input
          label="Organisation Name"
          placeholder="Enter your organisation name"
          value={organisationName}
          onChangeText={setOrganisationName}
        />
        <Input
          label="Organisation Address"
          placeholder="Enter your organisation address"
          value={organisationAddress}
          onChangeText={setOrganisationAddress}
        />
        <Input
          label="Organisation Phone Number"
          placeholder="Enter your organisation phone number"
          value={organisationPhone}
          onChangeText={setOrganisationPhone}
        />
        <Input
          label="Organisation Email"
          placeholder="Enter your organisation email"
          value={organisationEmail}
          onChangeText={setOrganisationEmail}
        />
        <Button
          title="Register"
          onPress={() => createOrganisationHandler()}
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

export default CreateOrganisation;
