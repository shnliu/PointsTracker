import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from 'react-native';
import {DecentButton} from './DecentButton';

export default class HomeScreen extends React.Component {

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, justifyContent: "space-evenly", alignSelf: "center"}}>
                    <Text style={{fontSize: 30, color: "#383838"}}> Friendly Points Tracker </Text>
                    <DecentButton onPress={() => navigate('Points')} title={'Points '}> </DecentButton>
                    <DecentButton onPress={() => navigate('About')} title={'About '}> </DecentButton>
                    <DecentButton onPress={() => navigate('Setting')} title={'Settings '}> </DecentButton>
                </View>
            </ImageBackground>
        );
    }
}
