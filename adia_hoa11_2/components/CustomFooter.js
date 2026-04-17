import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#e0e7ef',
    padding: 8,
    borderRadius: 8,
    marginVertical: 8,
    alignItems: 'center',
  },
  text: {
    color: '#2563eb',
    fontSize: 14,
    fontStyle: 'italic',
  },
});

// Simple custom footer component
function CustomFooter({ text }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}

export default CustomFooter;
