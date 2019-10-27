import React from 'react';
import Button from "react-native-button";
import {View} from 'react-native';

export default class HomeSettingsBar extends React.Component{

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                <Button style={{fontSize:30}}> H </Button>
                <Button style={{fontSize:30}}> S </Button>
            </View>

        );
    }
}
