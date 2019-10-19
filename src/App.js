import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import DisplayScreen from "./DisplayScreen";

const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Display: {screen: DisplayScreen},
    },
    {
        headerMode: 'none'
    });

const App = createAppContainer(MainNavigator);

export default App;
