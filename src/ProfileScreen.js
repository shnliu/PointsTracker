import React, {Component} from 'react';
import Button from 'react-native-button';
import { Text, View } from 'react-native';

export default class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'Profile',
    };
    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Hello, world!</Text>
            </View>
        );
    }
}
