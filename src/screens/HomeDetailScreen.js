import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeDetailScreen(props) {

    // 從 HomeScreen 傳遞過來的資料
    const { fruits } = props.route.params
    //params 限於同一個 stack

    const totalAmount = fruits.reduce((total, item) => {
        return total + (item.price * item.quantity);
    }, 0)

    return (
        <View style={styles.container}>
            <Text style={{ fontSize: 30 }}>你的購物車:</Text>
            <Text style={{ fontSize: 20 }}> </Text>

            {fruits.map((item, index) => (
                item.quantity > 0 && (
                    <Text style={{ fontSize: 20 }} key={index}>
                        {item.id} 共 ${item.price * item.quantity} 元
                    </Text>
                )
            ))}

            <Text style={{ fontSize: 20, marginTop: 20 }}>總金額 ${totalAmount} 元</Text>

            <Text style={{ fontSize: 30 }}> </Text>
            <TouchableOpacity onPress={() => props.navigation.pop()}
                style={{ backgroundColor: '#00aeef', borderRadius: 20, width: 300, height: 40, justifyContent: 'center', margin: 20 }}>
                <Text style={{ color: 'white', textAlign: 'center', fontSize: 20 }}>
                    返回首頁
                </Text>
            </TouchableOpacity>

        </View>


    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});