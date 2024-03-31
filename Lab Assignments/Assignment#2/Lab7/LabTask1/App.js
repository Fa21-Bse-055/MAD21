import React, { useState } from 'react';
import { View, Text, TextInput, Button, Modal, StyleSheet } from 'react-native';

const DiscountCalculator = () => {
  const [originalPrice, setOriginalPrice] = useState('');
  const [discountPercentage, setDiscountPercentage] = useState('');
  const [history, setHistory] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const calculateDiscount = () => {
    const original = parseFloat(originalPrice);
    const discount = parseFloat(discountPercentage);
    const discountAmount = (original * discount) / 100;
    const finalPrice = original - discountAmount;
    const saveInfo = ${original} - ${discount}% = ${finalPrice.toFixed(2)};
    setHistory([...history, saveInfo]);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Discount Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Original Price"
        keyboardType="numeric"
        value={originalPrice}
        onChangeText={(text) => setOriginalPrice(text.replace(/[^0-9]/g, ''))}
      />
      <TextInput
        style={styles.input}
        placeholder="Discount Percentage"
        keyboardType="numeric"
        value={discountPercentage}
        onChangeText={(text) => setDiscountPercentage(text.replace(/[^0-9]/g, ''))}
      />
      <Button title="Calculate" onPress={calculateDiscount} />
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text style={styles.modalHeader}>Calculation History</Text>
          {history.map((item, index) => (
            <Text key={index} style={styles.historyItem}>
              {item}
            </Text>
          ))}
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
      <Button title="View History" onPress={() => setModalVisible(true)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    marginBottom: 10,
    padding: 10,
    borderColor: 'gray',
    borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  historyItem: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default DiscountCalculator;