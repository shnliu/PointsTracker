import React from 'react';
import {Text, View} from 'react-native';
import Button from 'react-native-button';

export default class PointDisplay extends React.Component{

    render() {
        return (
            <View style={{flex:1, flexDirection: "column", justifyContent: "center", alignItems:"center"}}>
                <Text style={{color: 'red', fontSize: 40}}>A</Text>
                <Text style={{color: 'red', fontSize: 50}}>20</Text>
                <View style={{flexDirection: "row"}}>
                    <Button style={{color: 'red', fontSize:30}}>+</Button>
                    <Button style={{color: 'red', fontSize:30}}>-</Button>
                </View>
            </View>

        );
    }
}
