import React from 'react';
import {ImageBackground, View, Text, StyleSheet, TextInput, Picker} from 'react-native';
import HomeSettingsBar from "./HomeSettingsBar";
import RadioForm from "react-native-simple-radio-button";

export default class SettingScreen extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            modeRadio: "love",
            nameUserA: ""
        };
    }

    styles = StyleSheet.create({
        basicTextStyle: {
            flex: 0.65,
            fontSize: 30,
            color: '#383838'
        }
    });
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
                        <Text style={this.styles.basicTextStyle}> SETTINGS </Text>
                        <View>
                            <View>
                                <Text> User A </Text>
                                <Text> Name </Text>
                                <TextInput placeholder={"enter a name here"}
                                           onChangeText={(nameUserA) => {
                                               this.setState({nameUserA: nameUserA})
                                           }}/>
                                <Text> User B </Text>
                                <Text> Name </Text>
                                <TextInput placeholder={"enter a name here"}
                                           onChangeText={(nameUserA) => {
                                               this.setState({nameUserA: nameUserA})
                                           }}/>
                                <Text> Theme Color </Text>
                                <Picker>
                                    <Picker.Item label="RED" value="red"/>
                                    <Picker.Item label="ORANGE" value="orange"/>
                                    <Picker.Item label="YELLOW" value="yellow"/>
                                    <Picker.Item label="GREEN" value="green"/>
                                    <Picker.Item label="BLUE" value="blue"/>
                                    <Picker.Item label="PURPLE" value="purple"/>
                                    <Picker.Item label="PINK" value="pink"/>
                                </Picker>
                            </View>

                            <View>
                                <Text> Background Theme </Text>
                                <RadioForm buttonColor={'#808080'} selectedButtonColor={'#808080'}
                                           formHorizontal={true} labelHorizontal={false} initial={2}
                                           radio_props={[{label: 'Normal', value: 'normal'},
                                               {label: 'Dark', value: 'dark'},
                                               {label: 'Love', value: 'love'}]}
                                           onPress={(modeRadioInput) => {
                                               this.setState({modeRadio: modeRadioInput})
                                           }}
                                />
                            </View>

                        </View>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
