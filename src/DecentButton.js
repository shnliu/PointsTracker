import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {StyleSheet} from 'react-native';


/***
 * Reference: https://levelup.gitconnected.com/how-to-make-a-really-cool-button-in-react-native-4cb848b88834
 * @param onPress
 * @param children
 * @returns {*}
 * @constructor
 */

export const DecentButton = ({onPress, children}) => {

    const styles= StyleSheet.create({
        buttonStyle: {
            flex: 1,
            alignSelf: 'stretch',
            backgroundColor: '#fff',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#fff',
            marginLeft: 5,
            marginRight: 5
        },
        textStyle:{
            alignSelf: 'center',
            color: '#000',
            fontSize: 16,
            paddingTop: 10,
            paddingBottom: 10
        }
    });


    return (
        <TouchableOpacity> onPress={onPress} style={styles.buttonStyle}
            <Text style={styles.textStyle}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};
