import React from 'react';
import {Modal, View, Text} from 'react-native';
import Button from "react-native-button";
import {Dimensions, StyleSheet} from "react-native";
import {Switch, Picker, TextInput} from 'react-native';
import RadioForm from "react-native-simple-radio-button";

export default class EditModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userRadio: "",
            actionSelect: "",
            pointsInput: 0,
            randomSwitch: false
        };
    }

    styles = StyleSheet.create({
        pageViewStyle: {
            flex: 1,
            backgroundColor: 'rgba(80,80,80,0.5)'
        },
        modalViewStyle: {
            backgroundColor: '#fff',
            padding: 20,
            width: Dimensions.get('window').width * 0.9,
            height: Dimensions.get('window').height * 0.9
        },
        optionViewStyle: {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between'
        },
        labelTextStyle: {
            fontSize: 25
        },
        basicTextStyle: {
            flex: 1,
            fontSize: 30,
            textDecorationLine: 'underline'
        },
        modalOptionStyle: {
            flex: 1,
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'flex-end'
        },
        inputAreaViewStyle: {
            flex: 3,
            flexDirection: 'column',
            justifyContent: 'space-between'
        },
        textInputStyle: {
            height: 40,
            borderColor: 'pink',
            borderWidth: 1,
            width: 100
        },
        modalOptionButtonStyle: {
            fontSize: 40,
            color: "pink",
            margin: 5
        },
        pickerStyle: {
            height: 50,
            width: 120,
            borderWidth: 1,
        }
    });


    render() {
        return (
            <View>
                <Modal animationType="slide" transparent={true} visible={this.props.visible}
                       onRequestClose={this.props.close}>
                    <View style={this.styles.pageViewStyle}>
                        <View style={this.styles.modalViewStyle}>
                            <Text style={this.styles.basicTextStyle}>Edit Points</Text>
                            <View style={this.styles.inputAreaViewStyle}>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>User</Text>
                                    <RadioForm buttonColor={'pink'} selectedButtonColor={'pink'} formHorizontal={true}
                                               labelHorizontal={false}
                                               radio_props={[{label: 'user1'}, {label: 'user2'}]} initial={0}
                                               onPress={(userRadio) => {
                                                   this.setState({userRadio: userRadio})
                                               }}/>
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Action</Text>
                                    <Picker style={this.styles.pickerStyle} selectedValue={this.state.actionSelect}
                                            onValueChange={(actionSelect) => this.setState({actionSelect: actionSelect})}>
                                        <Picker.Item label="PLUS" value="plus"/>
                                        <Picker.Item label="MINUS" value="minus"/>
                                        <Picker.Item label="TRANSFER" value="transfer"/>
                                        <Picker.Item label="CLEAR" value="clear"/>
                                    </Picker>
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Points</Text>
                                    <TextInput style={this.styles.textInputStyle} placeholder={'11111'}
                                               keyboardType={'number-pad'} maxLength={9}
                                               onChangeText={(pointsInput) => {
                                                   this.setState({pointsInput: pointsInput})
                                               }}/>
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Random Number</Text>
                                    <Switch onValueChange={(randomSwitch) => {
                                        this.setState({randomSwitch: randomSwitch})
                                    }} value={this.state.randomSwitch}
                                            thumbColor={'pink'} trackColor={{false: 'gray', true: 'gray'}}/>
                                </View>
                            </View>
                            <View style={this.styles.modalOptionStyle}>
                                <Button style={this.styles.modalOptionButtonStyle}
                                        onPress={this.props.handleSubmit}> ✓ </Button>
                                <Button style={this.styles.modalOptionButtonStyle}
                                        onPress={this.props.close}> X </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}
