import React from 'react';
import {View, Text, TextInput, Stylesheet} from 'react-native';

const emboldenLoginPage = () => {
    return (
        <View>
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
        </View>
)};

export default emboldenLoginPage;