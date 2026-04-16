import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1,
    // ADDED: Give the whole app a background color
    backgroundColor: '#f3f4f6',
  },

  // NEW: goalListContainer
  goalListContainer: {
    // ILO 1: LIMIT THE SIZE OF THE GOAL LIST CONTAINER FOR DEMO
    height: 200, // Limit height for scroll demonstration
    paddingHorizontal: 16,
    // flex: 5, // Commented out to use fixed height
  },
});

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, key: Math.random().toString() }
    ]);
    setEnteredGoalText(''); // ADDED (ILO3): clear input after adding a goal
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoalText={enteredGoalText}
      />
      <View style={styles.goalListContainer}>
        {/*
          To demonstrate the difference, comment/uncomment the following blocks:
          Use FlatList (efficient for large lists):
        */}
        
        {/* <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
        /> */}

        {/*
          Or use ScrollView (renders all children at once, not efficient for large lists):
          Uncomment below to test ScrollView:
          */}

        <ScrollView>
          {courseGoals.map((goal) => (
            <GoalItem key={goal.key} text={goal.text} />
          ))}
        </ScrollView>
      
      </View>
    </View>
  );
}