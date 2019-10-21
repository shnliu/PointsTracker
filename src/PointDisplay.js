import React from 'react';
import {Text, View} from 'react-native';
import Button from 'react-native-button';
import {DecentButton} from "./DecentButton";

export default class PointDisplay extends React.Component{

    render() {
        return (
            <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                <Text style={{color: 'red', fontSize: 50}}>A</Text>
                <Text style={{color: 'red', fontSize: 50}}>20</Text>
                <Button style={{color: 'red'}}>+</Button>
            </View>

        );
    }
}
