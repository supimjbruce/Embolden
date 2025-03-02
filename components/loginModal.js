import React, {useState} from 'react';
import {View, Text, StyleSheet, Modal, TextInput, Pressable} from 'react-native';

const LoginModal = () => {

const [isModalVisible, setModalVisible] = useState();

    return (
      <View style={styles.container}> {/* Thank you Google once again for help with this code :) */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text style={styles.modalTitle}>Log In</Text>
              <TextInput
                style={styles.textInput}
                placeholder="  Username"
                defaultValue=""
              />
              <br></br>
              <TextInput
                style={[styles.textInput, {marginTop: 0}]}
                placeholder="  Password"
                defaultValue=""
              />
              <br></br>
              <Text style={{textAlign: 'center', padding: 10,}}>Don't have an Embolden account? Tap the button below!</Text>
              <View style={styles.buttonAlign}>
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Create Account</Text>
                </Pressable>
              </View>
              <br></br>
              <View style={styles.buttonAlign}> {/* I would like this button to be aligned top right with an X*/}
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

    );
};

const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    
    modalContent: {
      maxHeight: '60%',
      maxWidth: '85%',
      minHeight: '30%',
      minWidth: '30%',
      backgroundColor: '#FFCC70',
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },

    modalTitle: {
      color: '#FFFADD',
      fontSize: 64,
      fontWeight: '800',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },

    modalParagraphTitle: {
      fontFamily: 'Poppins-Medium',
      fontSize: 16,
      textAlign: 'center',
      padding: 10,
    },

    textInput: {
      borderWidth: 1,
      borderColor: 'black',
      borderRadius: 5,
      marginTop: 10,
    },

    buttonAlign: {
      alignItems: 'center',
    },

    closeButton: {
      height: 50,
      width: 150,
      maxHeight: 100,
      maxWidth: 300,
      backgroundColor: '#8ECDDD',
      borderRadius: 23,
      paddingTop: 15, /* Padding is the space inside of the element :) */
      paddingBottom: 15,
      paddingLeft: 5,
      margin: 10, /* Space OUTSIDE of the element */
      textAlign: 'center',
    },

    closeButtonText: {
      fontSize: 16,
      textAlign: 'center',
    },

  });

export default LoginModal;
