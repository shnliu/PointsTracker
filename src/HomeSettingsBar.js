import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// https://www.npmjs.com/package/react-native-vector-icons#icon-component

export default class HomeSettingsBar extends React.Component {

    render() {

        return (
            <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between'}}>
                <Icon name={'home'} style={{fontSize: 40, color: "#383838"}}
                             onPress={this.props.onPressHome}> </Icon>
                <Icon name={'settings-applications'} style={{fontSize: 40, color: "#383838"}}
                             onPress={this.props.onPressSetting}> </Icon>
            </View>

        );
    }
}
