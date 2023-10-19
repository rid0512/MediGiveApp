// DashBoard.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const DashBoard = () => {
    const handleRedeemChunk = () => {
      // Implement redeem chunk logic and show an alert
      alert('Request sent to US!');
    };

  const handleReturnMedicine = () => {
    // Implement return medicine logic and show an alert
    alert('Appointment booked!');
  };
  const navigation = useNavigation(); 
  const handleProceedMedicine = () => {
    // Navigate to the 'Medicine' screen
    navigation.navigate('Medicine');
  };

  const handleProceedFeedBack = () => {
    // Navigate to the 'Medicine' screen
    navigation.navigate('FeedBack');
  };

  return (
    <View style={styles.container}>
      <View style={styles.tile}>
        <Text>Your Medicines</Text>
        <Button title="Proceed" onPress={handleProceedMedicine} />
      </View>

      <View style={styles.tile}>
        <Text>Chunk Status</Text>
        <Button title="Redeem" onPress={handleRedeemChunk} color="grey" />
        <Button title="Return" onPress={handleReturnMedicine} color="grey"/>
      </View>

      <View style={styles.tile}>
        <Text>Feedback</Text>
        <Button title="Proceed" onPress={handleProceedFeedBack} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'column', // Display tiles one below the other
      justifyContent: 'center',
      padding: 16,
      width: '100%',
      maxWidth: 960,
      margin: 0,
      alignItems: 'center',
      margin: 0,
      //backgroundColor: '#FF4500',
    },
    // tile: {
    //   borderWidth: 1,
    //   borderColor: 'gray',
    //   padding: 16,
    //   marginBottom: 16, // Margin between tiles
    // },
    tile: {
      width: 200, // Set the width as needed
      height: 150, // Set the height as needed
      borderWidth: 1,
      borderColor: 'gray',
      padding: 16,
      margin: 8,
      alignItems: 'center', // Center content horizontally
      justifyContent: 'center', // Center content vertically
    },
    tileText: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    buttonContainer: {
      flex:1,
      flexDirection: 'row', // Display buttons horizontally
      justifyContent: 'space-between', // Align buttons horizontally
    },
    
    button: {
      fontSize: 14,
      width: 100, // Set the width as needed
      height: 10, // Set the height as needed
      margin: 5, // Margin between buttons
      
    },
  });

export default DashBoard;