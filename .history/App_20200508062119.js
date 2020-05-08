import React, { Component, useState } from 'react';
import { Text, View, ImageBackground, Button, Image, Alert, Modal } from 'react-native';
import styles from './styles';
import LaundingScreen from './my_components/LaundingScreen'
import ReportUpdate from './my_components/report'
import {AppLoading} from 'expo'
import * as Font from 'expo-font'
import Router from './routes/appStackNavigation'

export default function App(){  
    
    return (
      <Router/>
    );

    
  
      
}
