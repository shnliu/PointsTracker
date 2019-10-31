import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Button from 'react-native-button';

export default class PointDisplay extends React.Component {

    constructor(props) {
        super(props);
    }

    styles = StyleSheet.create({
        pointsDisplayViewStyle: {
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
        },
        textLabelStyle: {
            color: this.props.color,
            fontSize: 40
        },
        textCountStyle: {
            color: this.props.color,
            fontSize: 50,
            backgroundColor: '#fff',
            borderRadius: 10
        },
        incDecButtonStyle: {
            color: this.props.color,
            fontSize: 50,
            marginHorizontal: 10
        }
    });

    render() {
        return (
            <View style={this.styles.pointsDisplayViewStyle}>
                <Text style={this.styles.textLabelStyle}>{this.props.label}</Text>
                <Text style={this.styles.textCountStyle}>{this.props.count}</Text>
                <View style={{flexDirection: "row"}}>
                    <Button onPress={this.props.increment} style={this.styles.incDecButtonStyle}>+
                    </Button>
                    <Button onPress={this.props.decrement} style={this.styles.incDecButtonStyle}>-
                    </Button>
                </View>
            </View>

        );
    }
}
