import {View, ScrollView, Text, Button, TextInput, StyleSheet} from "react-native";
/* import {Link} from 'expo-router'; */
import React from 'react';
import BoldButton from "../../components/boldbutton";
/* import EmboldenLoginPage from '/Users/jonathanbruce/Coding/FirstExpoProject/app/embolden_login.js';
import BoldButton from '/Users/jonathanbruce/Coding/FirstExpoProject/app/boldbutton.js'; */

/* ^ Make the Login page and BoldButton as Modals/Components and put them in the /Components folder! */

export default function Index() {
  return (
    <View>
      <ScrollView>
          <View style={styles.container}>
            <Text style={styles.title}>Embolden</Text>
            <Text style={styles.subtext}>An app to empower and encourage those on mission for Christ</Text>
            <Button
                    style={styles.buttonPadding}
                    title="         "
            />
            <Text>By JBruce</Text>
          </View>
          <View>
            <BoldButton></BoldButton>
          </View>
          <Text style={styles.footer}>.j.</Text>
      <View>
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
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "gold",
      paddingTop: 25,
      paddingBottom: 25,
  },

  title: {
      fontSize: 64,
      fontWeight: 'bold',
  },

  subtext: {
      fontSize: 16,
      marginLeft: 40,
      marginRight: 40,
  },

  buttonPadding: {
      width: 15,
  },

  footer: {
      alignSelf: 'flex-end', /* Need to figure out how to make a footer and also
      put this at the end of the app.*/
  },

});
