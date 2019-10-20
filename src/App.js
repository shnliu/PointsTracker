import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import PointsScreen from "./PointsScreen";

const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Points: {screen: PointsScreen},
    },
    {
        headerMode: 'none'
    });

const App = createAppContainer(MainNavigator);

export default App;
