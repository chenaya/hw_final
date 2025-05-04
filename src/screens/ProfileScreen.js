import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function ProfileScreen(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = () => {
        const REQUEST_URL = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json'

        fetch(REQUEST_URL)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData)
            })
            .catch((err) => {
                console.log('error 是 ', err)
            })
    }

    const showNoticeDetail = (cases) => {
        props.navigation.push('ProfileDetailScreen', { passProps: cases })

    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <View>

                    <View style={styles.MainView}>
                        <View style={{ flex: 1 }}>

                            <Text style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                                場站：{cases.sna}{"\n"}
                                目前可借車數：{cases.available_rent_bikes}{"\n"}
                                目前還車空位：{cases.available_return_bikes}{"\n"}
                            </Text>

                            <Text style={{ marginTop: 8, fontSize: 13, marginBottom: 8, color: 'gray' }}>
                                YouBike2.0系統發布資料更新的時間：{cases.srcUpdateTime}
                            </Text>
                        </View>

                    </View>
                    <View style={styles.seperator} />

                </View>
            </TouchableOpacity>

        )

    }

    return (
        <View>
            <FlatList
                data={data}
                renderItem={({ item }) => renderBook(item)}
                keyExtractor={cases => cases.sno}
                style={{ backgroundColor: 'white' }}
            />
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
    MainView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },

    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
    },
    seperator: {
        height: 1,
        backgroundColor: '#dddddd'
    },
});
