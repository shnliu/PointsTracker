import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from 'react-native';
import {DecentButton} from './DecentButton';
import HomeSettingsBar from "./HomeSettingsBar";

export default class HomeScreen extends React.Component {

    styles = StyleSheet.create({
        backgroundImageStyle: {
            width: '100%',
            height: '100%'
        },
        basicTextStyle: {
            fontSize: 30,
            color: "#383838"
        },
        contentViewStyle: {
            flex: 10,
            alignSelf: 'center',
            justifyContent: 'space-around'}
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={this.styles.backgroundImageStyle}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: "space-between"}}>
                        <HomeSettingsBar/>
                    </View>
                    <View style={this.styles.contentViewStyle}>
                        <Text style={this.styles.basicTextStyle}> Friendly Points Tracker </Text>
                        <DecentButton onPress={() => navigate('Points')} title={'Points '}> </DecentButton>
                        <DecentButton onPress={() => navigate('About')} title={'About '}> </DecentButton>
                        <DecentButton onPress={() => navigate('Setting')} title={'Settings '}> </DecentButton>
                    </View>
                    <View style={{flex: 2}}/>
                </View>
            </ImageBackground>
        );
    }
}
