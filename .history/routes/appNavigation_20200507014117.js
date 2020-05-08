import {createStackNavigator} from 'react-navigation-stack'
import { createAppContainer } from 'react-navigation'
import Home from '../my_components/home'

import ReportUpdate from './my_components/report'


const screens = {
    Home: {
        screen:Home
    },
    Report: {
        screen: ReportUpdate
    }
}

const AppNavigator = createStackNavigator(screens)
export default createAppContainer(AppNavigator)