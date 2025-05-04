import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native';
import { ListItem, CheckBox } from 'react-native-elements';
import * as StorageHelper from '../helpers/StorageHelper';

export default function HomeScreen(props) {
    const [data, setData] = useState([])

    useEffect(() => {
        fetchData()
    }, [])

    useEffect(() => {
        let getAll = []

        data.map(a => {
            if (a.addToMyList === true) {
                getAll.push(a)
            }
        })

        saveToStorage(getAll)
    }, [data])

    const saveToStorage = async (getMyLikes) => {
        try {
            await StorageHelper.setMySetting('myList', JSON.stringify(getMyLikes))
            // 'myList'=> key值
        } catch (err) {
            console.log(err)
        }

    }

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

    // const fetchData = () => {
    //     const REQUEST_URL = 'https://tcgbusfs.blob.core.windows.net/dotapp/youbike/v2/youbike_immediate.json';

    //     fetch(REQUEST_URL)
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             // 在每筆資料中加上預設欄位 addToMyList: false
    //             const processedData = responseData.map(item => ({
    //                 ...item,
    //                 addToMyList: false,
    //             }));
    //             setData(processedData);
    //         })
    //         .catch((err) => {
    //             console.log('fetch error:', err);
    //         });
    // };


    const showNoticeDetail = (cases) => {
        props.navigation.push('HomeDetailScreen', { passProps: cases })

    }

    const pressRow = (cases) => {

        const newDatas = data.map(a => {
            let copyA = { ...a }
            if (copyA.sno === cases.sno) {
                copyA.addToMyList = !copyA.addToMyList
            }

            return copyA
        }
        )

        setData(newDatas) //更新state => 觸發use effect

    }

    const renderBook = (cases) => {
        return (
            <TouchableOpacity onPress={() => showNoticeDetail(cases)}>
                <ListItem bottomDivider containerStyle={{ alignItems: 'flex-start' }}>
                    <ListItem.Content>
                        <ListItem.Title style={{ color: 'black', fontSize: 14, marginTop: 8 }}>
                            場站：{cases.sna}{"\n"}
                            目前可借車數：{cases.available_rent_bikes}{"\n"}
                            目前還車空位：{cases.available_return_bikes}
                        </ListItem.Title>

                        <ListItem.Subtitle style={{ marginTop: 8, fontSize: 12, color: 'gray' }}>
                            系統資料更新的時間：{cases.srcUpdateTime}
                        </ListItem.Subtitle>
                    </ListItem.Content>

                    <CheckBox
                        checked={cases.addToMyList === true}
                        onPress={() => pressRow(cases)}
                    />

                </ListItem>
                {/* <ListItem
                    bottomDivider
                    containerStyle={{ alignItems: 'flex-start', backgroundColor: '#f0f0f0', padding: 10 }}
                >
                    <ListItem.Content>
                        <ListItem.Title style={{ color: 'black', fontSize: 15, marginTop: 8 }}>
                            場站：{cases.sna}{"\n"}
                            可借：{cases.available_rent_bikes}{"\n"}
                            可還：{cases.available_return_bikes}
                        </ListItem.Title>

                        <ListItem.Subtitle style={{ marginTop: 8, fontSize: 13, color: 'gray' }}>
                            更新時間：{cases.srcUpdateTime}
                        </ListItem.Subtitle>
                    </ListItem.Content>

                    <CheckBox
                        checked={cases.addToMyList === true}
                        onPress={() => pressRow(cases)}
                    />
                </ListItem> */}

            </TouchableOpacity>
        );
    };


    return (
        <View style={styles.container}>
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
        paddingHorizontal: 10,
        paddingTop: 20,
    },
    MainView: {
        flexDirection: 'row',
        // justifyContent: 'center',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 8
    },
    checkbox: {
        marginLeft: 10,
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
