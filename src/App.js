import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import HomeScreen from "./HomeScreen";
import PointsScreen from "./PointsScreen";
import AboutScreen from "./AboutScreen";

const MainNavigator = createStackNavigator({
        Home: {screen: HomeScreen},
        Points: {screen: PointsScreen},
        About: {screen: AboutScreen}
    },
    {
        headerMode: 'none'
    });

const App = createAppContainer(MainNavigator);

export default App;
