import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';


/***
 * Reference: https://medium.com/plark/react-native-how-to-make-custom-button-30b34b020def
 * @param onPress
 * @param children
 * @returns {*}
 * @constructor
 */

export const DecentButton = (props) => {

    const {style = {}, textStyle = {}, onPress} = props;

    const styles = StyleSheet.create({
        buttonStyle: {
            display: 'flex',
            height: 50,
            borderRadius: 10,
            borderWidth: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(255,255,255,0.6)',

            shadowColor: '#fff',
            shadowOpacity: 0.4,
            shadowOffset: {height: 10, width: 0},
            shadowRadius: 20,
        },
        textStyle: {
            alignSelf: 'center',
            color: '#383838',
            fontSize: 16,
            paddingTop: 10,
            paddingBottom: 10
        }
    });

    return (
        <TouchableOpacity onPress={onPress} style={[styles.buttonStyle, style]}>
            <Text style={[styles.textStyle, textStyle]}> {props.title}</Text>
        </TouchableOpacity>
    );


};
