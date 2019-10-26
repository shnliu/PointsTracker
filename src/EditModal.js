import React from 'react';
import {Modal, View, Text} from 'react-native';
import Button from "react-native-button";
import {Dimensions} from "react-native";
import {Switch, Picker, TextInput} from 'react-native';
import RadioForm from "react-native-simple-radio-button";

export default class EditModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Modal animationType="slide"
                       transparent={true}
                       visible={this.props.visible}
                       onRequestClose={this.props.close}>
                    <View style={{flex: 1, backgroundColor: 'rgba(80,80,80,0.5)'}}>
                        <View style={{
                            backgroundColor: '#fff', padding: 20, width: Dimensions.get('window').width * 0.9,
                            height: Dimensions.get('window').height * 0.9
                        }}>
                            <Text style={{flex: 1, fontSize: 30}}>Hi i am a modal screen!!</Text>
                            <View style={{flex: 3, flexDirection: 'column', justifyContent: 'space-between'}}>
                                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 20}}>User</Text>
                                    <RadioForm initial={0} formHorizontal={true} labelHorizontal={false}
                                               radio_props={[{label: 'user1'}, {label: 'user2'}]}/>
                                </View>
                                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 20}}>Action</Text>
                                    <Picker style={{height: 50, width: 100}}>
                                        <Picker.Item label="add" value="add"/>
                                        <Picker.Item label="minus" value="subtract"/>
                                        <Picker.Item label="transfer" value="transfer"/>
                                        <Picker.Item label="clear" value="clear"/>
                                    </Picker>
                                </View>
                                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 20}}>Points</Text>
                                    <TextInput style={{backgroundColor: 'pink'}}></TextInput>
                                </View>
                                <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
                                    <Text style={{fontSize: 20}}>Random Number</Text>
                                    <Switch></Switch>
                                </View>
                            </View>
                            <View style={{
                                flex: 1,
                                flexDirection: 'row',
                                alignItems: 'flex-end',
                                justifyContent: 'flex-end'
                            }}>
                                <Button style={{fontSize: 40}} onPress={this.props.close}> ✓ </Button>
                                <Button style={{fontSize: 40}} onPress={this.props.close}> X </Button>
                            </View>
                        </View>
                    </View>
                </Modal>
            </View>
        );
    }

}
