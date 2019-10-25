import React from 'react';
import {Modal, View, Text} from 'react-native';

export default class EditModal extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <View>
                <Modal animationType="slide" transparent={false} >
                    <View>
                        <Text> Hi i am a modal screen!! </Text>
                    </View>
                </Modal>
            </View>
        );
    }

}
