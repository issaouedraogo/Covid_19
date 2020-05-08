import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import {NavigationContainer} from '@react-navigation/native'
import { Text, View, Button} from 'react-native'
import styles from '../styles'
import News from './new'
import ReportUpdate from './report'
import Home from '../Screens/home'



export default function HomeStack({navigation}){
    const pressHandler = () =>{
        navigation.push('Report')
    }

    const Tab = createBottomTabNavigator();
    return(
        <Tab.Navigator>
            <Tab.Screen name="Home" component={Home}/>
            <Tab.Screen name="News" component={News}/>
            <Tab.Screen name="Report" component={ReportUpdate}/>
        </Tab.Navigator>
    );
    


}