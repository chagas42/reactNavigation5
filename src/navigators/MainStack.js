import React from 'react'; 
import { createStackNavigator } from '@react-navigation/stack'; 
import Home from '../screens/Home'; 
import Login from '../screens/Login'; 

const MainStack = createStackNavigator(); 

export default () => {
    return(
        <MainStack.Navigator>
            <MainStack.Screen name='Home' component={Home} />
            <MainStack.Screen name='Login' component={Login} />
        </MainStack.Navigator>
    ); 
}; 