import React from 'react';
import {View, ScrollView, Text, Button, TextInput, StyleSheet} from 'react-native';
/*import emboldenLoginPage from '/Users/jonathanbruce/Coding/EmboldenApp/embolden_login.js';*/

const emboldenHomePage = () => {

    return (
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
            </View>
            <Text style={styles.footer}>.j.</Text>
        </ScrollView>
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
)};

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

export default emboldenHomePage;
