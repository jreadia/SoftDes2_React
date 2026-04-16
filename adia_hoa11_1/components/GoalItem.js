import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 6,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#2563eb',
    },
    goalText: {
        color: '#ffffff',
        fontSize: 16,
    },
});

function GoalItem({ text }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
        </View>
    );
}

export default GoalItem;