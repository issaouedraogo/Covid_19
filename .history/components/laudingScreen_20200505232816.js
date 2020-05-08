import React from 'react';
import { Text, View, ImageBackground, Button, Image, Alert } from 'react-native';
import styles from './styles.js';

export default function laudingScreen(){ 
    return (
      <ImageBackground source={require('./assets/covid_image.png')} style= {styles.home_image}> 
        <View style={styles.container}>
          <Text style={styles.home_text}>Get The Latest Statistics On The Corona Pandemic</Text>
          <Image source={require('./assets/covid_image.png')}></Image>
          <Button 
            title="Let's Get Going"
            color="#841584"
          />
        </View>
      </ImageBackground>
    
      );
  
  
}
