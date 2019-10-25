import React from 'react';
import {Text, View} from 'react-native';
import Button from 'react-native-button';

export default class PointDisplay extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: this.props.count
        }
    }

    incrementCount() {
        this.setState((prevState) => ({count: prevState.count + 1}))
    };

    decrementCount() {
        this.setState((prevState) => ({count: prevState.count - 1}))
    };

    render() {
        return (
            <View style={{flex: 1, flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Text style={{color: this.props.color, fontSize: 40}}>{this.props.label}</Text>
                <Text style={{color: this.props.color, fontSize: 50, backgroundColor: 'white', borderRadius: 10}}>
                    {this.state.count}
                </Text>
                <View style={{flexDirection: "row"}}>
                    <Button onPress={() => this.incrementCount()}
                            style={{color: this.props.color, fontSize: 40, marginHorizontal:10}}>+</Button>
                    <Button onPress={() => this.decrementCount()}
                            style={{color: this.props.color, fontSize: 40, marginHorizontal:10}}>-</Button>
                </View>
            </View>

        );
    }
}
