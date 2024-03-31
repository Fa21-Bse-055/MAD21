import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';

const FacilityRecordApp = () => {
  const [facilityName, setFacilityName] = useState('');
  const [facilityType, setFacilityType] = useState('');
  const [facilities, setFacilities] = useState([]);

  const addFacility = () => {
    if (facilityName && facilityType) {
      setFacilities([...facilities, { facilityName, facilityType }]);
      setFacilityName('');
      setFacilityType('');
    }
  };

  const deleteFacility = (name) => {
    const updatedFacilities = facilities.filter((facility) => facility.facilityName !== name);
    setFacilities(updatedFacilities);
  };

  const renderItem = ({ item }) => (
    <View style={styles.facilityItem}>
      <Text>{`Name: ${item.facilityName}, Type: ${item.facilityType}`}</Text>
      <Button title="Delete" onPress={() => deleteFacility(item.facilityName)} />
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Facility Record Management</Text>
      <TextInput
        style={styles.input}
        placeholder="Facility Name"
        value={facilityName}
        onChangeText={(text) => setFacilityName(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Facility Type"
        value={facilityType}
        onChangeText={(text) => setFacilityType(text)}
      />
      <Button title="Add Facility" onPress={addFacility} />
      <Text style={styles.facilityListHeader}>Facility List:</Text>
      <FlatList
        data={facilities}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  facilityListHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 10,
  },
  facilityItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
});

export default FacilityRecordApp;
