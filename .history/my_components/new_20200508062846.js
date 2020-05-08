import React from 'react'
import {View, Text } from 'react-native'
import styles from '../styles';


export default function News(){
    
    const pressHandler = () =>{
        navigation.push('Report')
    }

    
    return(
        <View style={styles.container}>
            <Text>Home screen</Text>
            <Button title='Go to Report' onPress={pressHandler}/>
        </View>
    );

    
}