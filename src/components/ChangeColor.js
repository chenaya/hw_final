import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';

const ChangeColor = () => {
    const [color, setColor] = useState('#4CAF50')

    const changeButtonColor = () => {
        // 每次點擊更換為隨機顏色
        const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16)
        setColor(randomColor)
    }

    return (
        <View style={[styles.buttonContainer, { backgroundColor: color }]}>
            <Button title="Change Color" onPress={changeButtonColor} color="black" />
        </View>
    )
};

const styles = StyleSheet.create({
    buttonContainer: {
        padding: 10,
        borderRadius: 5,
        marginTop: 20,
    },
});

export default ChangeColor
