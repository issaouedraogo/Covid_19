import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../my_components/home';
import ReportUpdate from '../my_components/report'

const Stack = createStackNavigator()
export default function AppNavigator(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen 
                    name="Home" 
                    component={Home}
                    options={{
                        title: 'Home',
                        headerStyle: {
                          backgroundColor: '#f4511e',
                        },
                        headerTintColor: '#fff',
                        headerTitleStyle: {
                          fontWeight: 'bold',
                        },
                      }}
                />
                <Stack.Screen name="Report" component={ReportUpdate}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
