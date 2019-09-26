import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

/*
const RootStack = createStackNavigator(
    {
        Home: HomeScreen,
        Profile: ProfileScreen
    },
    {
        initialRouteName: 'Home',
        headerMode: 'screen',
    }
);
*/

const RootStack = createStackNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                title: `Home`,
                //headerBackTitle: null,
                headerBackTitle: 'header back title',
            }),
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: () => ({
                title: `Profile`,
                headerBackTitle: 'header back title',
            }),
        },
    },
    {
        initialRouteName: 'Home',
        //headerMode: 'screen',
    }
)

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
