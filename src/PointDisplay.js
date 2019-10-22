import React from 'react';
import {Text, View} from 'react-native';
import Button from 'react-native-button';

export default class PointDisplay extends React.Component{

    render() {
        return (
            <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                <Text style={{color: this.props.color, fontSize: 40}}>{this.props.label}</Text>
                <Text style={{color: this.props.color, fontSize: 50, backgroundColor: 'white', borderRadius:10}}>
                    {this.props.count}
                </Text>
                <View style={{flexDirection: "row"}}>
                    <Button style={{color: this.props.color, fontSize:40}}>+</Button>
                    <Button style={{color: this.props.color, fontSize:40}}>-</Button>
                </View>
            </View>

        );
    }
}
