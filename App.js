import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React, { useState } from 'react';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';
import HomeDetailScreen from './src/screens/HomeDetailScreen'
import ProfileDetailScreen from './src/screens/ProfileDetailScreen'

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MyHomeStack() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      {/* name的值會影響邏輯，但不會影響UI */}
      <Stack.Screen name="Home" component={HomeScreen} options={{ title: '水果大特賣' }} />
      <Stack.Screen name="HomeDetailScreen" component={HomeDetailScreen} options={{ title: '購物車' }} />
    </Stack.Navigator>
  )
}

function MyProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName='Profile'
      screenOptions={{
        headerStyle: { backgroundColor: 'tomato' },
        headerBackTitle: '返回',
        headerTintColor: 'white'
      }}
    >
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="ProfileDetailScreen" component={ProfileDetailScreen} options={{ title: 'My Profile Detail' }} />
    </Stack.Navigator>
  )
}

export default function App() {
  return (

    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home' //第一個顯示的tab
        screenOptions={({ route }) => ({ //route路徑，寫邏輯用{}包起來
          tabBarIcon: ({ color, focused }) => { //focused：點選前後icon不同
            let iconName //提出共同的 程式碼比較簡潔
            if (route.name == 'Home') {
              iconName = focused ? 'basket' : 'cart'
              return <Ionicons name={iconName} size={25} color={color} />
            } else if (route.name == 'Profile') {
              iconName = focused ? 'battery-full' : 'battery-dead'
              //focused 是一個布林值，表示該 tab 是否被選中
              //如果 focused 是 true，iconName 會被設定為 'ios-options'
              //如果 focused 是 false，iconName 會被設定為 'ios-list'

              return <Ionicons name={iconName} size={25} color={color} />
            }

          }
        })}
        tabBarOptions={{
          activeTintColor: 'tomato', //被點選後的顏色
          inactiveTintColor: 'gray' //尚未被點選後的顏色
        }}
      >
        <Tab.Screen name="Home" component={MyHomeStack} />
        <Tab.Screen name="Profile" component={MyProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


// export default function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         {/* 只設置一個 Screen，即只顯示 HomeScreen */}
//         <Stack.Screen name="Home" component={HomeScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

