import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image, Text, Modal } from 'react-native';

import { styles } from '../styles/styles';


export default function CollapseScroll({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);

  const toggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggle} style={styles.collapseMe}>
        <Text style={{ fontSize: 22 }}>CONTACTS</Text>
        {/* could replace with icon, look better */}
        <Text style={{ fontSize: 30 }}>+</Text>
      </TouchableOpacity>

      <Modal animationType="slide" transparent={true} visible={isVisible}>
        <View style={styles.modalContainer}>

          <View style={styles.inline}>
            <Text style={{ fontSize: 22 }}>CONTACTS</Text>
            <TouchableOpacity onPress={toggle}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} title="add contact" onPress={() => navigation.navigate('Add Contact')}>
              <Text style={styles.buttonText}>Add Contact</Text>
            </TouchableOpacity>
          </View>


        </View>
      </Modal>
    </View>
  );
}