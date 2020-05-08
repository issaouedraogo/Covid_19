import {createStackNavigator} from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation'
import Home from '../my_components/home'

import ReportUpdate from '../my_components/report'

const Stack = createStackNavigator()
export default function AppNavigator(){

    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home}/>
                <Stack.Screen name="Report" component={ReportUpdate}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}
