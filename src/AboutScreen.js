import React from 'react';
import {View, Text, ImageBackground} from 'react-native';

export default class AboutScreen extends React.Component {

    constructor(props) {
        super(props);
    }

    // todo scale probability of getting extreme numbers and add a digit cut off
    static getRandomNumber() {
        const MIN = 0.01;
        const MAX = 99;
        return Math.random() * (MAX - MIN) + MIN;
    }

    render() {
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: "100%", height: "100%"}}>

                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                    <Text style={{fontSize: 30, color: '#383838'}}> ABOUT </Text>
                    <Text style={{fontSize: 50}}> {AboutScreen.getRandomNumber()} </Text>
                </View>

            </ImageBackground>
        );
    }

}
