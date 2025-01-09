import { View, Text } from 'react-native';
import React from 'react';
import { styled } from 'nativewind';
import Icon from 'react-native-vector-icons/Ionicons';
import { LineChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

const StyledView = styled(View);
const StyledText = styled(Text);

const AnalyticsScreen = () => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <StyledView className="flex-1 bg-gray-50">
      {/* Header Section */}
      <StyledView className="bg-blue-500 px-6 pb-10 rounded-b-3xl">
        <StyledView className="mt-6">
          <StyledText className="text-white text-2xl font-bold">Analytics Overview</StyledText>
          <StyledText className="text-white text-sm mt-1">Monitor your store's financial health</StyledText>
        </StyledView>
      </StyledView>

      {/* Content Section */}
      <StyledView className="px-6 mt-6 space-y-6">
        {/* Expected Cash */}
        <StyledView className="bg-white flex flex-row items-center justify-between rounded-lg shadow-md p-4">
          <StyledView className="flex flex-row items-center">
            <Icon name="cash-outline" size={32} color="green" />
            <StyledView className="ml-4">
              <StyledText className="text-sm text-gray-500">Expected Cash</StyledText>
              <StyledText className="text-lg font-bold text-gray-800">R2,500</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Expected Card Payments */}
        <StyledView className="bg-white flex flex-row items-center justify-between rounded-lg shadow-md p-4">
          <StyledView className="flex flex-row items-center">
            <Icon name="card-outline" size={32} color="blue" />
            <StyledView className="ml-4">
              <StyledText className="text-sm text-gray-500">Expected Card Payments</StyledText>
              <StyledText className="text-lg font-bold text-gray-800">R3,500</StyledText>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Sales Graph */}
        <StyledView className="bg-white rounded-lg shadow-md p-4">
          <StyledText className="text-lg font-bold text-gray-800 mb-2">Sales Performance</StyledText>
          <StyledText className="text-sm text-gray-500 mb-4">Last 7 Days</StyledText>
          <LineChart
            data={{
              labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
              datasets: [
                {
                  data: [1200, 1500, 1800, 1400, 2000, 1700, 2100],
                },
              ],
            }}
            width={screenWidth - 48} // Width of the graph
            height={220}
            yAxisLabel="R"
            yAxisInterval={1} // Interval between y-axis ticks
            chartConfig={{
              backgroundColor: '#f5f5f5',
              backgroundGradientFrom: '#fff',
              backgroundGradientTo: '#fff',
              decimalPlaces: 0,
              color: (opacity = 1) => `rgba(59, 130, 246, ${opacity})`,
              labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              propsForDots: {
                r: '5',
                strokeWidth: '2',
                stroke: '#3b82f6',
              },
            }}
            style={{
              borderRadius: 8,
            }}
          />
        </StyledView>
      </StyledView>
    </StyledView>
  );
};

export default AnalyticsScreen;
