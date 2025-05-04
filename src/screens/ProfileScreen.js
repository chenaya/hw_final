import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, } from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';


export default function ProfileScreen(props) {
    const [myListCount, setMyListCount] = useState(0)
    const [myListName, setMyListName] = useState([])

    useEffect(() => {
        // 監聽動作
        const unsubscribe = props.navigation.addListener('focus', () => {
            loadStorage()
        })
        return unsubscribe

    }, [])

    useEffect(() => {
        console.log('myListName updated:', myListName);
    }, [myListName]);


    const loadStorage = async () => {
        let listGet = await StorageHelper.getMySetting('myList')

        // 法ㄧ
        // let a = JSON.parse(bookGet)
        // let newArray = []
        // a.forEach((thing) => {
        //     newArray.push(thing.animal_colour + '的' + thing.animal_kind)

        // });

        // setMyBookCount(a.length)
        // setMyBookListName(newArray)


        if (!listGet) { //防呆
            console.log('myList is empty');
            setMyListCount(0);
            setMyListName([]);
            return;
        }

        // 法二
        let a = JSON.parse(listGet)
        setMyListCount(a.length)
        setMyListName(a)
    }


    return (
        <View style={styles.container}>
            <Text>ProfileScreen</Text>
            <Text>我收藏了{myListCount}個YouBike站點</Text>

            {
                myListName.map((list, index) => {
                    return (<Text key={index}> {index + 1}. {list.sarea + '的' + list.sna}</Text>)
                })
            }
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
