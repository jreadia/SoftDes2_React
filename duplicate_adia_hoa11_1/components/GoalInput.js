import { View, TextInput, Button, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 16,
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#cccccc',
    backgroundColor: '#ffffff',
    borderRadius: 12,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  textInput: {
    borderWidth: 2,
    borderColor: '#4b5563',
    width: '70%',
    marginRight: 8,
    padding: 13,
    borderRadius: 8,
    backgroundColor: '#f9fafb',
    fontSize: 16,
    color: '#111827',
  },
});

function GoalInput(props) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Your Course Goal!"
        onChangeText={props.goalInputHandler}
        value={props.enteredGoalText}
        placeholderTextColor="#9ca3af"
      />
      <Button
        title="ADD GOAL"
        onPress={props.addGoalHandler}
        color="#2563eb"
      />
    </View>
  );
}

export default GoalInput;