import React from 'react'
import {View, Text, Button, SafeAreaView} from 'react-native'
import styles from '../styles';
import Card from '../my_components/card'
import { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';


export default function Home({navigation}){

    const url = "https://api.covid19api.com/summary"

    const [data, setData] = useState([]);
    const [Error, setError] = useState('');

    useEffect( () => {
        async function fetchData(){
        const response = await fetch(url);
        response
            .json()
            .then(response => response.Countries)
            .then(response => setData(response))
            .catch(err => setError(err))
        }
        
        fetchData()
    }, [url])

    data.sort((a, b) => {
        return b.TotalConfirmed - a.TotalConfirmed
    })
    
    const pressHandler = () =>{
        navigation.push('Report')
    }
    return(
        <SafeAreaView styele={styles.container}>
            <FlatList 
                data={data}
                renderItem={ ({item}) => 
                    <Card 
                        Country={item.Country} 
                        TotalConfirmed= {item.TotalConfirmed}
                        TotalDeaths={item.TotalDeaths}
                        NewConfirmed={item.NewConfirmed}
                    />}
            />
        </SafeAreaView>
    );

    
}