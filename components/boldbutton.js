import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function BoldButton() {
    const encouragingVersesArray = ["1 Corinthians 10:13", "John 3:16"];

    const verseFunction = () => {
        alert(encouragingVersesArray);
    };

    return (
        <View style={styles.container}>
            <View style={styles.boldButtonStyle}>
                <Text
                style={styles.title}
                onPress={verseFunction}>
                    BOLD
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 25,
        paddingRight: 10,
    },

    boldButtonStyle: {
        flex: 1,
        width: 100,
        justifyContent: 'center',
        backgroundColor: 'olivedrab',
        padding: 10,
        borderRadius: 15,
    },

    title: {
        fontFamily: 'Poppins-Black',
        fontSize: 24,
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
});