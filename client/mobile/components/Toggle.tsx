import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';

interface BlueToggleProps {
  label: string;
  value: boolean;
  onValueChange: (val: boolean) => void;
}

const Toggle: React.FC<BlueToggleProps> = ({ label, value, onValueChange }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Switch
        trackColor={{ false: '#d3d3d3', true: '#87cefa' }}
        thumbColor={value ? '#1e90ff' : '#f4f3f4'}
        ios_backgroundColor="#d3d3d3"
        onValueChange={onValueChange}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#f0f8ff',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#1e90ff',
    fontWeight: '600',
  },
});

export default Toggle;
