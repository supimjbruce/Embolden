import {View, ScrollView, Text, Button, TextInput, StyleSheet} from "react-native";
/* import {Link} from 'expo-router'; */
import React, {useState} from 'react';
import BoldButton from "../../components/boldbutton";
import LoginModal from "../../components/loginModal";
/* import EmboldenLoginPage from '/Users/jonathanbruce/Coding/FirstExpoProject/app/embolden_login.js';
import BoldButton from '/Users/jonathanbruce/Coding/FirstExpoProject/app/boldbutton.js'; */

/* ^ Make the Login page and BoldButton as Modals/Components and put them in the /Components folder! */

const LoginModalReference = () => {
  return (
    <View>
      <LoginModal></LoginModal>
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
      <ScrollView>
          <View style={styles.indexContent}> {/* Get all of this content centered like 'Ofe'*/}
            {/* Need to get the fonts from the Figma design in here.*/}
            <Text style={styles.title}>EMBOLDEN</Text>
            <Text style={styles.subtext}>An app to empower and encourage <br></br>those on mission for Christ</Text>

            <View>
              <BoldButton></BoldButton>
            </View>

            <View>
              <Button title="Login" onPress={handleLoginButtonPress} />
              {isLoginModalVisible && <LoginModalReference />}
            </View>

            <Text style={styles.footer}><b>.j.</b></Text>
          </View>
      </ScrollView>
    </View>

    /*<View>
      <Text>Login</Text>
      <TextInput
          style={{height: 40}}
          placeholder="Username"
          defaultValue=""
      />
      <TextInput
          style={{height: 40}}
          placeholder="Password"
          defaultValue=""
      />
      <></>
      <Text>Don't have an Embolden account? Tap the button below!</Text>
      <Button
          title="Create Account"
          color="dodgerblue"
      />
    </View>*/
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
  },

  indexContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
      fontSize: 64,
      fontWeight: '900',
  },

  subtext: {
      fontSize: 16,
      marginLeft: 40,
      marginRight: 40,
      textAlign: 'center',
  },

  buttonPadding: {
      width: 15,
  },

  footer: {
      alignSelf: 'flex-end', /* Need to figure out how to make a footer and also
      put this at the end of the app.*/
  },

});
