import React from 'react'
import { Text, View, Button} from 'react-native'
import styles from '../styles'


export default function Home({navigation}){
     const pressHandler = () =>{
        navigation.navigate( )
     }



    <View style={styles.container}>
        <Text>Home screen</Text>
        <Button title='Go to Report' onPress={pressHandler}/>
    </View>


}