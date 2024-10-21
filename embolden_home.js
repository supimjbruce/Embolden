import React from 'react';
import {View, Scrollview, Text, TextInput, Stylesheet} from 'react-native';
import emboldenLoginPage from './embolden_login';

const emboldenHomePage = () => {

    return (
        <Scrollview>
            <View style={styles.container}>
                <Text>Embolden</Text>
                <Text>An app to empower and encourage those on mission for Christ</Text>
                <></> //fragement or line break right here
                <Text>By JBruce</Text>

            </View>
            <View>
                <emboldenLoginPage></emboldenLoginPage> //page where the Login View lives
            </View>
            <Text style={styles.footer}>.j.</Text>
        </Scrollview>
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
*/

const styles = Stylesheet.create ({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "gold",
    },

    footer: {
        alignItems: "bottom",
    },

});

export default emboldenHomePage;