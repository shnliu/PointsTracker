import React from 'react';
import {ImageBackground, View, Text} from 'react-native';
import HomeSettingsBar from "./HomeSettingsBar";

export default class SettingScreen extends React.Component {

    // consider usernames, theme colors.
    // normal mode
    // default
    // lp mode

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: "100%", height: "100%"}}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1}}>
                        <HomeSettingsBar onPressHome={() => navigate('Home')}
                                         onPressSetting={() => navigate('Setting')}/>
                    </View>
                    <View style={{flex: 15, alignItems: 'center'}}>
                        <Text> Settings </Text>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
