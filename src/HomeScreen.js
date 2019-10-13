import React, {Component} from 'react';
import {Button, StyleSheet, View } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HOME',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View>
                <Button onPress={()=> navigate('Profile', {name:'Jane'})} title={'Profile'}> </Button>
                <Button onPress={()=> navigate('About')} title={'About'} color={'green'}> </Button>
                <Button onPress={()=> navigate('Help')} title={'Help'} color={'orange'}> </Button>
            </View>

        );
    }
}
