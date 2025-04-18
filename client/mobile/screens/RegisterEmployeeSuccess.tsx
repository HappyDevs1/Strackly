// screens/SuccessScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { styled } from 'nativewind';
import SuccessPage from '../components/SuccessPage';
import Toggle from '../components/Toggle';
import Button from '../components/Button';
import { updateEmployeeUser } from '../services/employeeUser';

const StyledView = styled(View);
const StyledText = styled(Text);

const SuccessScreen = ({ navigation }: any) => {
  const [allowedToSell, setAllowedToSell] = useState(false);

  const router = useRoute();
  const { empId }: any = router.params || {}; // Get the employeeId from the params

  const handleToggleChange = (value: boolean) => {
    setAllowedToSell(value);
    console.log('Toggle value changed:', value);
  };

  const handleEmployeePermission = () => {
    try {
      if (allowedToSell == true) {
        updateEmployeeUser({
          allowedToSell: true }, empId)
    }
    navigation.navigate("Main")
  } catch (error) {
    console.error("Error handling employee permission:", error);
  }
}

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SuccessPage
        title="Success!"
        message="The employee was added successfully."
      >
        <Toggle
          label="Allow employee to sell"
          value={allowedToSell}
          onValueChange={setAllowedToSell}
        />
        <StyledView className='mt-14'>
          <Button
            title="Continue"
            onPress={() => handleEmployeePermission()}
            />
        </StyledView>
      </SuccessPage>
    </SafeAreaView>
  );
};

export default SuccessScreen;
