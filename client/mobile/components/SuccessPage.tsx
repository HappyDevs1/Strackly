import React, { ReactNode } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

interface SuccessPageProps {
  title: string;
  message: string;
  children?: ReactNode;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ title, message, children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.iconCircle}>
        <FontAwesome name="check" size={32} color="white" />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.message}>{message}</Text>
      {children && <View style={styles.extra}>{children}</View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f0ff',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  iconCircle: {
    backgroundColor: '#28a745',
    borderRadius: 50,
    padding: 20,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1e90ff',
    marginBottom: 10,
  },
  message: {
    fontSize: 18,
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
  },
  extra: {
    marginTop: 20,
    width: '100%',
  },
});

export default SuccessPage;
