import React, { useState, useEffect } from 'react'
import {View, Text, Button} from 'react-native'
import styles from '../styles';



export default function ReportUpdate({navigation}){
    const pressHandler = () =>  {
        navigation.goBack();
    }

    return(
    
        <View style={styles.container}>
            <Text>this goes my list of reports</Text>
            <Button title='Button Home Sreen' onPress={pressHandler}/>
        </View>
        
    );


}
