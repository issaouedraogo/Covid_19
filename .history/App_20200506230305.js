import React, { Component, useState } from 'react';
import { Text, View, ImageBackground, Button, Image, Alert, Modal, ShadowPropTypesIOS } from 'react-native';
import styles from './styles';
import LaundingScreen from './my_components/LaundingScreen'

export default function App(){  
    const [vis, setvis] = useState(false);
    const [report, setReport] = useState('');

    const setResportList = () =>{
      setvis(true);
    }
    return (
      <View style={styles.container}>
        <Modal visible={vis}>
          <LaundingScreen {ShadowPropTypesIOS.} />
        </Modal>
        
        
        
        <Text>
          
        </Text>
      </View>
    );
  
  
}
