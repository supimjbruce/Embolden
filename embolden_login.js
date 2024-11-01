import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';

export default function EmboldenLoginPage() {
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
    );
}
