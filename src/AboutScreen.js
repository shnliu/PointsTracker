import React from 'react';
import {View, Text, ImageBackground, StyleSheet} from 'react-native';
import HomeSettingsBar from "./HomeSettingsBar";

export default class AboutScreen extends React.Component {

    styles = StyleSheet.create({
        basicTextStyle: {
            flex: 0.65,
            fontSize: 30,
            color: '#383838'
        },
    });

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: "100%", height: "100%"}}>
                <View style={{flex:1}}>
                    <View style={{flex: 1, justifyContent: "space-between"}}>
                        <HomeSettingsBar onPressHome={() => navigate('Home')}
                                         onPressSetting={() => navigate('Setting')}/>
                    </View>
                    <View style={{flex: 15, alignItems: "center"}}>
                        <Text style={this.styles.basicTextStyle}> ABOUT </Text>
                        <Text style={{margin:40, fontSize: 20}}>
                            This is a simple points tracker made using react native.
                            Tracks points between 2 people for some friendly competition or trivial grudge.
                        </Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }

}
