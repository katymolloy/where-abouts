import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image, Text, Modal } from 'react-native';


export default function CollapseScroll({navigation}) {
    const [isVisible, setIsVisible] = useState(false);
  
    const toggle = () => {
      setIsVisible(!isVisible);
    };
  
    return (
      <View>
        <TouchableOpacity onPress={toggle} style={styles.collapseMe}>
          <Text style={{fontSize: 22}}>CONTACTS</Text>
          {/* could replace with icon, look better */}
       <Text style={{fontSize: 30}}>+</Text>
        </TouchableOpacity>
  
        <Modal animationType="slide" transparent={false} visible={isVisible}>
          <View style={styles.modalContainer}>
          <View style={styles.buttonContainer}>
                    <TouchableOpacity style={styles.button} title="add contact" onPress={() => navigation.navigate('AddContact')}>
                        <Text style={styles.buttonText}>Add Contact</Text>
                    </TouchableOpacity>
                </View>
  
            <TouchableOpacity onPress={toggle}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    collapseMe: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 5,
      paddingHorizontal: 35,
      backgroundColor: 'white',
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      height: '30%'
    },
  });