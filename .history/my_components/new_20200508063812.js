import React from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../styles';


export default function News({navigation}){
    
    const pressHandler = () =>{
        navigation.push('Report')
    }
    return(
        <View style={styles.container}>
            <Text>News screen</Text>
            <Button title='Go to Report' onPress={pressHandler}/>
        </View>
    );

    
}