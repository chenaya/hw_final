import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function HomeDetailScreen(props) {
    const passProps = props.route.params.passProps || 'nothing get'

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{passProps.sna}{"\n"}詳細資訊</Text>

            {/* sno(站點代號)、sna(場站中文名稱)、total(場站總停車格)、
            available_rent_bikes(場站目前車輛數量)、sarea(場站區域)、mday(資料更新時間)、
            latitude(緯度)、longitude(經度)、ar(地點)、sareaen(場站區域英文)、
            snaen(場站名稱英文)、aren(地址英文)、available_return_bikes(空位數量)、
            act(全站禁用狀態)、srcUpdateTime(YouBike2.0系統發布資料更新的時間)、
            updateTime(大數據平台經過處理後將資料存入DB的時間)、infoTime(各場站來源資料更新時間)、
            infoDate(各場站來源資料更新時間) */}

            <View style={styles.contentBox}>
                <View style={styles.row}><Text style={styles.label}>站點代號：</Text><Text style={styles.value}>{passProps.sno}</Text></View>
                <View style={styles.row}><Text style={styles.label}>總停車格：</Text><Text style={styles.value}>{passProps.total}</Text></View>
                <View style={styles.row}><Text style={styles.label}>場站區域：</Text><Text style={styles.value}>{passProps.sarea}</Text></View>
                <View style={styles.row}><Text style={styles.label}>場站地點：</Text><Text style={styles.value}>{passProps.ar}</Text></View>
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
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 35,
        textAlign: 'center',
    },
    contentBox: {
        width: '100%',
        maxWidth: 300,
    },
    row: {
        flexDirection: 'row',
        marginBottom: 10,
    },
    label: {
        width: 120,
        fontWeight: 'bold',
        textAlign: 'right',
        paddingRight: 10,
    },
    value: {
        flex: 1,
        textAlign: 'left',
    },
});