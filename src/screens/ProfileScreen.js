import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function ProfileScreen(props) {
    const [counts, setCounts] = useState(0)
    const plusCount = () => {
        setCounts(counts + 1)
    }
    const resetCount = () => {
        setCounts(0)
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Counter</Text>

            <View style={styles.buttonRow}>
                <Button title="Plus" onPress={plusCount} />
                <View style={{ width: 20 }} />
                <Button title="Reset" onPress={resetCount} />
            </View>

            <View style={{ marginTop: 40 }}>
                <Button
                    title="Go Check Your Counts"
                    onPress={() => props.navigation.push('ProfileDetailScreen', { counts: counts })}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 30,
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
});