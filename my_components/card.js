import React, {useState, useEffect}  from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../styles'

export default function Card({Country, TotalConfirmed, TotalDeaths, NewConfirmed}){

    return(
        <View style={styles.card_form}>
            <Text style={styles.cardContent_header}>{Country}</Text>
            <Text style={styles.cardContent_val}>Total Case: {TotalConfirmed}</Text>
            <Text style={styles.cardContent_val}>Death Toll: {TotalDeaths}</Text>
            <Text style={styles.cardContent_val}>New Case: {NewConfirmed}</Text>
        </View>
    );

}