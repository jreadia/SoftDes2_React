import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fbbf24',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 12,
  },
  text: {
    color: '#1e293b',
    fontWeight: 'bold',
    fontSize: 18,
  },
});

// Simple custom header component
function CustomHeader({ title }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

export default CustomHeader;
