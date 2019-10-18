import React, {Component} from 'react';
import Button from 'react-native-button';
import { Text, View } from 'react-native';

export default class DisplayScreen extends React.Component {
    static navigationOptions = {
        title: 'POINTS',
    };

    state = {
        countA: 0,
        countB: 0
    };


    render() {
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Text>Here are your points.</Text>
                <Text style={{color:'red', fontSize: 40,}}> {this.state.countA} </Text>
                <Button> + A</Button>
                <Text style={{color: 'red', fontSize: 40,}}> {this.state.countB} </Text>
                <Button> + B</Button>

            </View>
        );
    }
}
