import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// https://www.npmjs.com/package/react-native-vector-icons#icon-component

export default class HomeSettingsBar extends React.Component {

    styles = StyleSheet.create({
        viewStyle: {
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between'
        },
        iconStyle: {
            fontSize: 40,
            color: "#383838"
        }
    });

    render() {
        return (
            <View style={this.styles.viewStyle}>
                <Icon name={'home'} style={this.styles.iconStyle}
                      onPress={this.props.onPressHome}> </Icon>
                <Icon name={'settings-applications'} style={this.styles.iconStyle}
                      onPress={this.props.onPressSetting}> </Icon>
            </View>

        );
    }
}
