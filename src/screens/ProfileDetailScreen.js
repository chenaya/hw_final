import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';

export default function ProfileDetailScreen(props) {
    const { counts } = props.route.params;
    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 20 }}>Your counts is: {counts} </Text>


            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

