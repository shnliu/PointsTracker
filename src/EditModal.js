import React from 'react';
import {Modal, View, Text} from 'react-native';
import Button from "react-native-button";

export default class EditModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Modal animationType="slide"
                       presentationStyle={'pageSheet'}
                       transparent={false}
                       visible={this.props.visible}
                       onRequestClose={this.props.close}>
                    <View style={{flex:1, flexDirection:'column'}}>
                        <Text style={{flex:3}}> Hi i am a modal screen!! </Text>
                    <View style={{flex:1, flexDirection:'row', alignItems:'flex-end', justifyContent:'center'}}>
                        <Button style={{fontSize:40}} > ✓ </Button>
                        <Button style={{fontSize:40}} onPress={this.props.close}> X </Button>
                    </View>
                    </View>
                </Modal>
            </View>
        );
    }

}
