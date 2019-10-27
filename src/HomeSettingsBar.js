import React from 'react';
import Button from "react-native-button";
import {View} from 'react-native';

export default class HomeSettingsBar extends React.Component {

    render() {

        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Button onPress={this.props.onPressHome} title={'Points '}
                        style={{fontSize: 30, color: "#383838"}}> H </Button>
                <Button onPress={this.props.onPressSetting} style={{fontSize: 30, color: "#383838"}}> S </Button>
            </View>

        );
    }
}
