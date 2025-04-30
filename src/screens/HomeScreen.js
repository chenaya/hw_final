import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeScreen(props) {
    const [cart, setCart] = useState([])

    const addToCart = (item) => {
        setCart(prevCart => {
            const newCart = { ...prevCart }; // 複製之前的cart
            if (newCart[item]) {
                newCart[item] += 1; // 如果有這個商品,就+1
            } else {
                newCart[item] = 1; // 如果沒有,設為1
            }
            return newCart;
        });
    };


    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 35 }}>請選擇想購買的水果</Text>
            <Text style={{ fontSize: 20 }}> </Text>

            <View style={styles.cart}>
                <View style={styles.foodItem}>
                    <Text style={{ fontSize: 20 }}>Banana</Text>
                    <TouchableOpacity onPress={() => addToCart('🍌')}
                        style={styles.cartButton}>

                        <Text style={styles.cartButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.foodItem}>
                    <Text style={{ fontSize: 20 }}>Apple</Text>
                    <TouchableOpacity onPress={() => addToCart('🍎')}
                        style={styles.cartButton}>

                        <Text style={styles.cartButtonText}>+</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.foodItem}>
                    <Text style={{ fontSize: 20 }}>Tomato</Text>
                    <TouchableOpacity onPress={() => addToCart('🍅')}
                        style={styles.cartButton}>

                        <Text style={styles.cartButtonText}>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <Text style={{ fontSize: 30 }}> </Text>
            <TouchableOpacity onPress={() => props.navigation.push('HomeDetailScreen', { cart: cart })}
                style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}>
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
