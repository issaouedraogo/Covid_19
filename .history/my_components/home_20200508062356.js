import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { Text, View, Button} from 'react-native'
import styles from '../styles'


export default function Home({navigation}){
    const pressHandler = () =>{
        navigation.push('Report')
    }

    const Tab = createBottomTabNavigator();
    return(
        
    );
    


}