import React from 'react';
import { Text, View, ImageBackground, Button, Image } from 'react-native';
import styles from '../styles.js';

function LaundingScreen({my_func}){ 
    return (
      <ImageBackground source={require('../assets/covid_image.png')} style= {styles.home_image}> 
        <View style={styles.container}>
          <Text style={styles.home_text}>Get The Latest Statistics On The Corona Pandemic</Text>
          <Image source={require('../assets/covid_image.png')}></Image>
          <Button 
            title="Let's Get Going"
            color="#841584"
            onPress={my_func}
          />
        </View>
      </ImageBackground>
    
      );
}
export default LaundingScreen;