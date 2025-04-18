// screens/SuccessScreen.tsx
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';
import SuccessPage from '../components/SuccessPage';
import Toggle from '../components/Toggle';

const SuccessScreen = () => {
  const [allowedToSell, setAllowedToSell] = useState(false);

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
      </SuccessPage>
    </SafeAreaView>
  );
};

export default SuccessScreen;
