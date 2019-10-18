import React, {Component} from 'react';
import {Button, StyleSheet, View } from 'react-native';
import { ImageBackground } from 'react-native';
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
                             style={{width:'100%', height:'100%'}}>
                <View style={{ flex: 1, justifyContent: "space-evenly", alignSelf: "center"}} >
                    <Button onPress={()=> navigate('Display')} title={'Display'} color={'#F99ACE'}> </Button>
                    <Button onPress={()=> navigate('About')} title={'About'} color={'#F99ACE'}> </Button>
                    <Button onPress={()=> navigate('Help')} title={'Help'} color={'#F99ACE'}> </Button>
                </View>
            </ImageBackground>


        );
    }
}
