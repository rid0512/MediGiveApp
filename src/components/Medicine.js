import React from 'react';
import { View, Text, FlatList,Button, StyleSheet } from 'react-native';

const Medicine = () => {
  // Dummy dataset
  const medicineData = [
  { id: '1', name: 'Amoxicillin', timestamp: 'before', duration: '2pm-3pm' },
  { id: '2', name: 'Azithromycin', timestamp: 'after', duration: '9am-10am' },
  { id: '3', name: 'Ibuprofen', timestamp: 'before', duration: '8am-9am' },
  { id: '4', name: 'Paracetamol', timestamp: 'after', duration: '11am-12pm' },
  { id: '5', name: 'Aspirin', timestamp: 'before', duration: '6pm-7pm' },
  { id: '6', name: 'Loratadine', timestamp: 'after', duration: '4pm-5pm' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Medicine name</Text>
        <Text style={styles.headerText}>Time stamp</Text>
        <Text style={styles.headerText}>Duration</Text>
      </View>
      <FlatList
        data={medicineData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.row}>
            <Text style={styles.rowText}>{item.name}</Text>
            <Text style={styles.rowText}>{item.timestamp}</Text>
            <Text style={styles.rowText}>{item.duration}</Text>
          </View>
        )}
      />
      <View style={styles.buttonContainer}>
        <Button title="Add" onPress={() => handleAddMedicine()} />
        <Button title="Delete" onPress={() => handleDeleteMedicine()} />
      </View>
    </View> 
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  headerText: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  rowText: {
    flex: 1,
    marginLeft: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
});

export default Medicine;