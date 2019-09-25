import React, {Component} from 'react';
import {Button, StyleSheet, View } from 'react-native';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'HOME',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="BUTTON"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
