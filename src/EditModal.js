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
            userRadio: null,
            actionSelect: null,
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
            height: Dimensions.get('window').height * 0.85
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
            borderColor: '#FFC0CB',
            borderWidth: 1,
            width: 120
        },
        modalOptionButtonStyle: {
            fontSize: 40,
            color: "#FFC0CB",
            margin: 5
        },
        pickerStyle: {
            height: 50,
            width: 150,
            borderWidth: 1
        }
    });


    static getRandomNumber() {
        const MIN = 0.01;
        const MAX = 99;
        const DIGITS = 3;
        return (Math.random() * (MAX - MIN) + MIN).toFixed(DIGITS);
    };

    handleRandomSwitch(randomSwitch) {
        if (this.state.randomSwitch) {
            this.setState({pointsInput: 0});
        } else {
            this.setState({pointsInput: EditModal.getRandomNumber()});
        }
        this.setState({randomSwitch: randomSwitch});
    };

    isActionClear(){
        return this.state.actionSelect==="clear";
    };

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
                                    <RadioForm buttonColor={'#FFC0CB'} selectedButtonColor={'#FFC0CB'}
                                               formHorizontal={true}
                                               labelHorizontal={false} initial={-1}
                                               radio_props={[{label: 'UserA', value: "countA"},
                                                   {label: 'UserB', value: "countB"}]}
                                               onPress={(userRadio) => {
                                                   this.setState({userRadio: userRadio})
                                               }}
                                    />
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Action</Text>
                                    <Picker style={this.styles.pickerStyle} selectedValue={this.state.actionSelect}
                                            onValueChange={(actionSelect) => this.setState({actionSelect: actionSelect})}>
                                        <Picker.Item label="SELECT" value={null}/>
                                        <Picker.Item label="PLUS" value="add"/>
                                        <Picker.Item label="MINUS" value="subtract"/>
                                        <Picker.Item label="TRANSFER" value="transfer"/>
                                        <Picker.Item label="CLEAR" value="clear"/>
                                    </Picker>
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Random Number</Text>
                                    <Switch onValueChange={(randomSwitch) => {
                                        this.handleRandomSwitch(randomSwitch)
                                    }}
                                            disabled={this.isActionClear()}
                                            value={this.state.randomSwitch}
                                            thumbColor={'#FFC0CB'}
                                            trackColor={{false: '#808080', true: '#808080'}}/>
                                </View>
                                <View style={this.styles.optionViewStyle}>
                                    <Text style={this.styles.labelTextStyle}>Points</Text>
                                    <TextInput style={this.styles.textInputStyle}
                                               defaultValue={this.state.randomSwitch ? JSON.stringify(this.state.pointsInput) : null}
                                               placeholder={this.state.randomSwitch ? null : "Enter a number"}
                                               editable={!this.state.randomSwitch && !this.isActionClear()}
                                               keyboardType={'number-pad'} maxLength={9}
                                               onChangeText={(pointsInput) => {
                                                   this.setState({pointsInput: pointsInput})
                                               }}/>
                                </View>
                                <View styles={{flex: 1}}/>
                            </View>
                            <View style={this.styles.modalOptionStyle}>
                                <Button style={this.styles.modalOptionButtonStyle}
                                        onPress={() => this.props.handleSubmit(this.state)}> ✓ </Button>
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
