import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Image, Text, Modal } from 'react-native';
import { onAuthStateChanged } from 'firebase/auth';

import { styles } from '../styles/styles';

import { onValue } from 'firebase/database';

import { db, auth } from '../firebaseConfig';
import { ref } from '../node_modules/firebase/database';


export default function CollapseScroll({ navigation }) {
  const [isVisible, setIsVisible] = useState(false);
  const [userContacts, setUserContacts] = useState([])

  // useEffect is used to ensure contacts are updated on change
  useEffect(() => {
    getContacts();
  }, [])


  const getContacts = () => {
    const user = auth.currentUser
    // ensuring user is authenticated
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        // try / catch block to get contact information
        try {
          onValue(ref(db, 'users/' + uid + '/contacts'), (snapshot) => {
            if (snapshot.exists()) {

              const contactObj = snapshot.val()
              // Objects.values is used to create an array of the returned data
              const contactArray = Object.values(contactObj);
              setUserContacts(contactArray);
              console.log('Contacts retrieved')
              console.log(userContacts)
            } else {
              console.log('No contacts found')
            }
          })
        } catch (error) {
          console.log('Error retrieving contacts')
        }
      } else {
        console.log('User not found')
      }
    })
  }

  // function to send SMS
  const sendLocation = () => {
    console.log('In here')
  }

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
          <ScrollView style={styles.contactList}>
            {/* the returned contacts array is mapped and displayed */}
            {userContacts.map((contact, index) => (
              <View key={index}>
                <TouchableOpacity onPress={sendLocation}>
                  <Text>{contact.firstName} {contact.lastName}</Text>
                  <Text>{contact.phoneNumber}</Text>
                </TouchableOpacity>
              </View>
            ))}
          </ScrollView>
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