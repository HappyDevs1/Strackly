// screens/SuccessScreen.tsx
import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { useRoute } from "@react-navigation/native";
import { styled } from 'nativewind';
import SuccessPage from '../components/SuccessPage';
import Button from '../components/Button';
import { getItem } from '../services/item';

const StyledView = styled(View);
const StyledText = styled(Text);

const NewProductSuccess = ({ navigation }: any) => {
  const [product, setProduct] = useState<any>(null);

  const router = useRoute();
  const { productId }: any = router.params || {}; // Get the productId from the params

  const handleFetchProduct = async () => {
    try {
      const response = await getItem(productId);
      const item = response?.data?.item
      if (item) {
        setProduct(item)
        console.log("New product:", item);
      } else {
        console.warn("Item not found in response:", response?.data)
      }
    } catch (error) {
      console.error("Failed to fetch product data", error)
    }
  }

  useEffect(() => {
    handleFetchProduct();
  }, [])


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <SuccessPage
        title="Success!"
        message="New product added successfully"
      >
        <StyledView className='mt-14'>
          <Button
            title="Continue"
            onPress={() => navigation.navigate("Main")}
            />
        </StyledView>
      </SuccessPage>
    </SafeAreaView>
  );
};

export default NewProductSuccess;
