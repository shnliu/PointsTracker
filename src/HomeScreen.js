import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ImageBackground} from 'react-native';
import {Text} from 'react-native';
import {DecentButton} from './DecentButton';

export default class HomeScreen extends React.Component {

    styles = StyleSheet.create({
        backgroundImageStyle: {
            width: '100%',
            height: '100%'
        },
        pageViewStyle: {
            flex: 1,
            justifyContent: "space-evenly",
            alignSelf: "center"
        },
        basicTextStyle: {
            fontSize: 30,
            color: "#383838"
        }
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={this.styles.backgroundImageStyle}>
                <View style={this.styles.pageViewStyle}>
                    <Text style={this.styles.basicTextStyle}> Friendly Points Tracker </Text>
                    <DecentButton onPress={() => navigate('Points')} title={'Points '}> </DecentButton>
                    <DecentButton onPress={() => navigate('About')} title={'About '}> </DecentButton>
                    <DecentButton onPress={() => navigate('Setting')} title={'Settings '}> </DecentButton>
                </View>
            </ImageBackground>
        );
    }
}
