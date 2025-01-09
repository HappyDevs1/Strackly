import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
  style?: object;
}

const Header: React.FC<HeaderProps> = ({ title, subtitle, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  textWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center', // Ensures text is centered
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
    marginTop: 5,
    textAlign: 'center', // Ensures subtitle is also centered
  },
});

export default Header;
