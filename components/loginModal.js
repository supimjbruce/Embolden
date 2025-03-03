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
              <View style={styles.topFlexButton}>
                <Pressable style={styles.closeButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.closeButtonText}>X</Text>
                </Pressable>
              </View>

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
              <br></br> {/* I need to put normal Poppins on this v */}
              <Text style={{textAlign: 'center', padding: 10,}}>Don't have an Embolden account? Tap the button below!</Text>
              <View style={styles.buttonAlign}>
                <Pressable style={styles.createAccountButton} onPress={() => setModalVisible(false)}>
                  <Text style={styles.createAccountText}>Create Account</Text>
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

    topFlexButton: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
    },
    
    modalContent: {
      maxHeight: '60%',
      maxWidth: '85%',
      minHeight: '30%',
      minWidth: '30%',
      backgroundColor: "#FFC94A",
      padding: 20,
      borderRadius: 20,
      justifyContent: 'center',
    },

    modalTitle: {
      color: '#FFFADD', /* Work on these colors */
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
      maxHeight: 50,
      maxWidth: 50,
      backgroundColor: '#8ECDDD',
      borderRadius: 13,
      margin: 10, /* Space OUTSIDE of the element */
      justifyContent: 'center',
    },

    closeButtonText: {
      fontFamily: 'Poppins-Black',
      fontSize: 18,
      textAlign: 'center',
    },

    createAccountButton: {
      height: 50,
      width: 150,
      maxHeight: 100,
      maxWidth: 300,
      backgroundColor: '#8ECDDD',
      borderRadius: 23,
      margin: 10, /* Space OUTSIDE of the element */
      textAlign: 'center',
      justifyContent: 'center',
    },

    createAccountText: {
      fontFamily: 'Poppins-Medium',
      fontSize: 14,
      textAlign: 'center',
    },
  });

export default LoginModal;
