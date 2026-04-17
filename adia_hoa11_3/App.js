import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList, Modal, Alert } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';
import CustomHeader from './components/CustomHeader';
import CustomFooter from './components/CustomFooter';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native';

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
    flex: 5, // Commented out to use fixed height
  },
});

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  // Modal visibility state
  const [isModalVisible, setIsModalVisible] = useState(false);
  // Modal animation type state
  const [modalAnimationType, setModalAnimationType] = useState('slide');
  // Modal transparent state
  const [modalTransparent, setModalTransparent] = useState(true);
  // Warning modal state
  const [showWarningModal, setShowWarningModal] = useState(false);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }


  function addGoalHandler() {
    setCourseGoals((currentCourseGoals) => {
      const newGoals = [
        ...currentCourseGoals,
        { text: enteredGoalText, key: Math.random().toString() }
      ];
      if (newGoals.length > 5) {
        setShowWarningModal(true);
      }
      return newGoals;
    });
    setEnteredGoalText(''); // ADDED (ILO3): clear input after adding a goal
  }


  // Handler to confirm and delete a goal by key
  function confirmDeleteGoal(goalKey) {
    Alert.alert(
      'Delete Goal',
      'Are you sure you want to delete this goal?',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Delete', style: 'destructive', onPress: () => {
            setCourseGoals((currentCourseGoals) =>
              currentCourseGoals.filter((goal) => goal.key !== goalKey)
            );
          }
        },
      ]
    );
  }

  
  // Handler for onRequestClose
  function handleModalRequestClose() {
    Alert.alert(
      'Modal Close Requested',
      'You tried to close the modal (e.g., with the Android back button).',
      [
        { text: 'OK', onPress: () => setIsModalVisible(false) }
      ]
    );
  }

  // Handler for user icon press
  function handleUserIconPress() {
    Alert.alert('Welcome!', 'Welcome to the application!');
  }

  return (
    <View style={styles.appContainer}>
      
      {/* Warning Modal for too many goals */}
      <Modal
        visible={showWarningModal}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setShowWarningModal(false)}
      >
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.4)' }}>
          <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, alignItems: 'center', maxWidth: 300 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 18, marginBottom: 10, color: '#d97706' }}>Warning!</Text>
            <Text style={{ marginBottom: 16, textAlign: 'center' }}>
              You have more than 5 goals. Don't overwhelm yourself with too much burden!
            </Text>
            <Button title="OK" onPress={() => setShowWarningModal(false)} color="#007AFF" />
          </View>
        </View>
      </Modal>
      
      {/* Custom header component with user icon */}
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
        <CustomHeader title="Adia Custom Goal App" />
        <TouchableOpacity onPress={handleUserIconPress} accessibilityLabel="User icon">
          <Icon name="question" size={32} color="#007AFF" style={{ marginLeft: 10 }} />
        </TouchableOpacity>
      </View>
      <GoalInput
        goalInputHandler={goalInputHandler}
        addGoalHandler={addGoalHandler}
        enteredGoalText={enteredGoalText}
      />
      
      {/* Buttons to switch animationType */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 10 }}>
        <Button title="Slide" onPress={() => setModalAnimationType('slide')} color={modalAnimationType === 'slide' ? '#007AFF' : undefined} />
        <View style={{ width: 10 }} />
        <Button title="Fade" onPress={() => setModalAnimationType('fade')} color={modalAnimationType === 'fade' ? '#007AFF' : undefined} />
        <View style={{ width: 10 }} />
        <Button title="None" onPress={() => setModalAnimationType('none')} color={modalAnimationType === 'none' ? '#007AFF' : undefined} />
      </View>
      
      {/* Button to toggle transparent prop */}
      <View style={{ alignItems: 'center', marginBottom: 10 }}>
        <Button
          title={modalTransparent ? 'Set Opaque Modal' : 'Set Transparent Modal'}
          onPress={() => setModalTransparent((prev) => !prev)}
          color={modalTransparent ? '#007AFF' : '#888'}
        />
        <Text style={{ marginTop: 4, fontSize: 12 }}>
          Transparent: {modalTransparent ? 'true' : 'false'}
        </Text>
      
      </View>
      {/* Button to show modal */}
      <Button title="Show Modal" onPress={() => setIsModalVisible(true)} />
      {/* Modal demonstration */}
      <Modal
        visible={isModalVisible}
        animationType={modalAnimationType}
        transparent={modalTransparent}
        onRequestClose={handleModalRequestClose}
      >
        {modalTransparent ? (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgba(0,0,0,0.3)' }}>
            <View style={{ backgroundColor: 'white', padding: 30, borderRadius: 10, alignItems: 'center' }}>
              <Text>This is a Modal!</Text>
              <Text style={{ marginBottom: 10 }}>Animation: {modalAnimationType}</Text>
              <Text style={{ marginBottom: 10 }}>Transparent: true</Text>
              <Button title="Hide Modal" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        ) : (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
            <View style={{ padding: 30, borderRadius: 10, alignItems: 'center' }}>
              <Text>This is a Modal!</Text>
              <Text style={{ marginBottom: 10 }}>Animation: {modalAnimationType}</Text>
              <Text style={{ marginBottom: 10 }}>Transparent: false</Text>
              <Button title="Hide Modal" onPress={() => setIsModalVisible(false)} />
            </View>
          </View>
        )}
      </Modal>
      
      <View style={styles.goalListContainer}>
        {/*
          To demonstrate the difference, comment/uncomment the following blocks:
          Use FlatList (efficient for large lists):
        */}
        {/*
        <FlatList
          data={courseGoals}
          renderItem={(itemData) => (
            <GoalItem text={itemData.item.text} />
          )}
        />
        */}
        {/*
          Or use ScrollView (renders all children at once, not efficient for large lists):
          Uncomment below to test ScrollView:
        */}
        <ScrollView>
          {courseGoals.map((goal) => (
            <GoalItem
              key={goal.key}
              text={goal.text}
              onDelete={() => confirmDeleteGoal(goal.key)}
            />
          ))}
        </ScrollView>
      </View>
      {/* Custom footer component */}
      <CustomFooter text="Adia HOA 11.3" />
    </View>
  );
}