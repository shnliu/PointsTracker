import React from 'react';
import {ImageBackground, View} from 'react-native';

export default class SettingScreen extends React.Component {

    // consider usernames, theme colors.
    // normal mode
    // default
    // lp mode

    render() {
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: "100%", height: "100%"}}>
            </ImageBackground>
        );
    }
}
