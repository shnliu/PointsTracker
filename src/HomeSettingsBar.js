import React from 'react';
import {Text} from 'react-native';
import Button from "react-native-button";
import {View} from 'react-native';

export default class HomeSettingsBar extends React.Component{

    render() {
        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent:'space-between'}}>
                <Button> H </Button>
                <Button> S </Button>
            </View>

        );
    }
}
