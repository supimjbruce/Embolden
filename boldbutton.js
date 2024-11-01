import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default function BoldButton() {
    const verseFunction = () => {
        alert('Encouraging Bible Verse');
    };

    return (
        <View>
            <View style={styles.boldButtonStyle}>
                <Text
                style={styles.title}
                onPress={verseFunction}>
                    BOLD BUTTON
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
    },

    boldButtonStyle: {
        alignItems: 'center',
    },

    title: {
        fontSize: 32,
        color: 'black',
        fontWeight: 'bold',
    },
});