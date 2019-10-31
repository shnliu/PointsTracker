import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import HomeSettingsBar from "./HomeSettingsBar";

export default class AboutScreen extends React.Component {

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
                    <View style={{flex: 15}}>
                        <Text style={{fontSize: 30, color: '#383838'}}> ABOUT </Text>
                        <Text> This is a simple points tracker. </Text>
                    </View>
                </View>

            </ImageBackground>
        );
    }

}
