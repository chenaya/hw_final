import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';

export default function HomeScreen(props) {
    const [fruits, setFruits] = useState([
        { id: 'banana 🍌', price: 18, quantity: 0 },
        { id: 'apple 🍎', price: 25, quantity: 0 },
        { id: 'tomato 🍅', price: 22, quantity: 0 },
    ]);

    const addToCart = (index) => {
        const updatedFruits = [...fruits];
        updatedFruits[index].quantity += 1;
        setFruits(updatedFruits);
    };

    const removeFromCart = (index) => {
        const updatedFruits = [...fruits];
        if (updatedFruits[index].quantity > 0) {
            updatedFruits[index].quantity -= 1;
            setFruits(updatedFruits);
        }
    };

    const cases = ({ item, index }) => (
        <View style={styles.foodItem}>
            <Text style={{ fontSize: 20 }}>{item.id}</Text>
            <Text style={{ fontSize: 16, marginHorizontal: 10 }}>${item.price}</Text>
            <TouchableOpacity onPress={() => addToCart(index)} style={styles.cartButton}>
                <Text style={styles.cartButtonText}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.cartButton}>
                <Text style={styles.cartButtonText}>-</Text>
            </TouchableOpacity>
            {item.quantity > 0 && (
                <Text style={{ fontSize: 16, marginLeft: 10 }}>
                    amounts: {item.quantity}
                </Text>
            )}
        </View>
    );

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}></Text>
            <Text style={{ fontSize: 35, marginTop: 35, }}>請選擇想購買的水果</Text>
            <Text style={{ fontSize: 20 }}> </Text>

            <FlatList
                data={fruits}
                renderItem={cases}
                keyExtractor={(item) => item.id}
                contentContainerStyle={styles.cart}
            />

            <TouchableOpacity onPress={() => props.navigation.push('HomeDetailScreen', { fruits: fruits })}
                style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20, marginBottom: 50 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                    查看購物車
                </Text>
            </TouchableOpacity>

            {/* push(頁面,值) =>傳送 */}
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cart: {
        flexDirection: 'column', // 每個 foodItem 往下排
        alignItems: 'center',
    },
    foodItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 15,
        marginBottom: 10,
        gap: 10,
        fontSize: 30
    },
    cartButton: {
        backgroundColor: '#00aeef',
        borderRadius: 10,
        width: 20,
        height: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    cartButtonText: {
        color: 'white',
        fontSize: 14,
        textAlign: 'center',
    },
});