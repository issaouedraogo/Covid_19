import React, { Component, useState } from 'react';
import { Text, View, ImageBackground, Button, Image, Alert, Modal } from 'react-native';
import styles from './styles';
import LaundingScreen from './my_components/LaundingScreen'
import ReportUpdate from './my_components/report'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import router from './routes/appNavigation'

export default function App(){  
    const [vis, setvis] = useState(false);
    const [fontLoad, setFontLoad] = useState(false);

    const setResportList = () =>{
      setvis(true);
    }
    if(fontLoad){
      return (
        <LaundingScreen/>
        );
    }else{
      return(
        <AppLoading
          startAsync={getFonts}
          onFinish={() => setFontLoad(true)}
        />
      );
    }
      
    }
