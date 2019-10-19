import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from 'react-native';
import {DecentButton} from './DecentButton';


export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HOME',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./images/hearts-1.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent: "space-evenly", alignSelf: "center"}}>
                    <DecentButton onPress={() => navigate('Display')} title={'Display '}> </DecentButton>
                    <DecentButton onPress={() => navigate('About')} title={'About '}> </DecentButton>
                    <DecentButton onPress={() => navigate('Help')} title={'Help'}> </DecentButton>
                </View>
            </ImageBackground>


        );
    }
}
