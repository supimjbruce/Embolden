import React from 'react';
import {View, Text, StyleSheet, TextInput, Button} from 'react-native';

export default function LoginModal() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                placeholder="  Username"
                defaultValue=""
            />
            <TextInput
                style={styles.textInput}
                placeholder="  Password"
                defaultValue=""
            />
            <></>
            <Text style={{textAlign: 'center', padding: 10,}}>Don't have an Embolden account? Tap the button below!</Text>
            <Button
                title="Create Account"
                color="dodgerblue"
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#798645',
        padding: 25,
        marginTop: 10,
    },

    textInput: {
        backgroundColor: 'white',
        height: 40,
        borderRadius: 15,
        margin: 10,
    },
});