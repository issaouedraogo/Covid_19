import React, { Component } from 'react';
import { Text, View, ImageBackground, Button, Image, Alert } from 'react-native';
import styles from './styles';
import LaundingScreen from './my_components/LaundingScreen'

export default function App(){  
    return (
      <View >
        <Text>
          <LaundingScreen/>
          Hello
        </Text>
      </View>
    );
  
  
}
