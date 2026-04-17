import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';


const styles = StyleSheet.create({
    goalItem: {
        marginVertical: 6,
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#2563eb',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    goalText: {
        color: '#ffffff',
        fontSize: 16,
        flex: 1,
    },
    deleteButton: {
        marginLeft: 12,
        padding: 4,
        backgroundColor: 'transparent',
    },
    deleteButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 4,
    },
});

function GoalItem({ text, onDelete }) {
    return (
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{text}</Text>
            <TouchableOpacity style={styles.deleteButton} onPress={onDelete} accessibilityLabel="Delete goal">
                <Text style={styles.deleteButtonText}>×</Text>
            </TouchableOpacity>
        </View>
    );
}

export default GoalItem;