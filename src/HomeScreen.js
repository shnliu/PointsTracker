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
            color: "#383838",
            marginBottom: 20
        },
        contentViewStyle: {
            flex: 15,
            alignSelf: 'center',
            justifyContent: 'center'
        },
        buttonStyle: {
            margin: 20
        },
        navBarViewStyle: {
            flex: 1,
            justifyContent: "space-between"
        }
    });

    render() {
        const {navigate} = this.props.navigation;
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={this.styles.backgroundImageStyle}>
                <View style={{flex: 1}}>
                    <View style={this.styles.navBarViewStyle}>
                        <HomeSettingsBar onPressHome={() => navigate('Home')}
                                         onPressSetting={() => navigate('Setting')}/>
                    </View>
                    <View style={this.styles.contentViewStyle}>
                        <Text style={this.styles.basicTextStyle}> Friendly Points Tracker </Text>
                        <DecentButton onPress={() => navigate('Points')} title={'Points '}
                                      style={this.styles.buttonStyle}> </DecentButton>
                        <DecentButton onPress={() => navigate('About')} title={'About '}
                                      style={this.styles.buttonStyle}> </DecentButton>
                        <DecentButton onPress={() => navigate('Setting')} title={'Settings '}
                                      style={this.styles.buttonStyle}> </DecentButton>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
