import {View, Text, Button, StyleSheet, TouchableOpacity} from "react-native";
import React, {useState} from 'react';
import BoldButton from "../../components/boldButton";
import LoginModal from "../../components/loginModal";

/* ^ Make the Login page and BoldButton as Modals/Components and put them in the /Components folder! */

const LoginModalReference = () => {
  return (
    <View>
      <LoginModal />
    </View>
  );
};

export default function Index() {
  const [isLoginModalVisible, setLoginModalVisible] = useState(false);

  const handleLoginButtonPress = () => {
    setLoginModalVisible(!isLoginModalVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
        {isLoginModalVisible && <LoginModalReference />}
        <Text style={styles.title}>EMBOLDEN</Text>
        <Text style={styles.subtext}>An app to empower and encourage <br></br>those on mission for Christ</Text>
      </View>
      <View>
      </View>
      <View style={styles.flexEndFooter}>
        <TouchableOpacity style={styles.loginButtonFooter}> {/*Want to make it so that the whole button area can be pressed and can active BOLD BUTTON. */}
          <Button title="Login" onPress={handleLoginButtonPress} style={styles.button}/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.boldButtonFooter}> {/*Want to make it so that the whole button area can be pressed and can active BOLD BUTTON. */}
          <BoldButton></BoldButton>
        </TouchableOpacity>
      </View>
    </View>
  );
}

/*
Things that I need to do:
1. Check if how I am linking to the other View (the login page) is correct and
that is the right way to do it!
2. Learn the React Native Navigation from Wix and React Native tutorial so I can
give this multiple screens!
*/

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#FFC94A",
    paddingTop: 25,
    paddingBottom: 25,
    justifyContent: 'center',
    alignContent: 'center',
  },

  titleView: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  title: {
    fontFamily: 'Poppins-Black',
    fontSize: 80,
    fontWeight: '900',
    textAlign: 'center',
  },

  subtext: {
    fontSize: 16,
    marginLeft: 40,
    marginRight: 40,
    textAlign: 'center',
  },

  flexEndFooter: {
    flex: 1,
    justifyContent: 'flex-end',
  },

  loginButtonFooter: {
    flex: 3,
    alignSelf: 'flex-end',
    maxHeight: 20,
    paddingRight: 10,
  },

  boldButtonFooter: {
    flex: 3,
    alignSelf: 'flex-end',
    maxHeight: 100,
  },

  /*footer: {
    alignSelf: 'flex-end', //Need to figure out how to make a footer and also
    //put this at the end of the app.
  },*/
});
