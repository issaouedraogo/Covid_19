import React from 'react'
import {Text, View} from 'react-native'
import {MaterialIcons} from '@expo/vector-icons'  
import styles from '../styles'

export default function Header(){

    return (
        <View style={styleheader.header}>
            {/* {icon for menu} */}
            <View>
                <Text style={styles.headerText}></Text>
            </View>
        </View>
    )
}