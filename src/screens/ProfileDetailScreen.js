import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function ProfileDetailScreen() {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <ChangeColor />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
