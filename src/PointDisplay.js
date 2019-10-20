import React from 'react';
import {Text, View} from 'react-native';
import Button from 'react-native-button';

export default class PointDisplay extends React.Component{

    render() {
        return (
            <View style={{flex:1, flexDirection: "column", justifyContent: "center"}}>
                <Text style={{color: 'red', fontSize: 50}}> 20 </Text>
                <Button> + </Button>
            </View>

        );
    }
}
