import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../Screens/Login/screens/index';
import HomeRouter from '../Screens/Home/router/index';
import * as options from 'Router/options';


const { Navigator, Screen } = createStackNavigator();


const Router = () => {
    
    return (
        <>
            <StatusBar
                barStyle="dark-content"
                translucent
                backgroundColor="transparent"
            />
            <NavigationContainer>
                <Navigator mode="card">
                    <Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
                    <Screen name="Inicio" component={HomeRouter} options={options.commonScreenOptions}/>
                </Navigator>
            </NavigationContainer>
        </>
    );
};

export default Router;