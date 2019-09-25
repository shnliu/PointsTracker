import React, {Component} from 'react';
import Button from 'react-native-button';

export default class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'Hello',
    };
    render() {
        const {navigate} = this.props.navigation;
        return (
            <Button
                title="Go to Jane's profile"
                onPress={() => navigate('Profile', {name: 'Jane'})}
            />
        );
    }
}
