import React, {Component} from 'react';
import Button from 'react-native-button';
import {Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import PieChart from 'react-native-pie-chart';
import PointDisplay from "./PointDisplay";

export default class PointsScreen extends React.Component {
    static navigationOptions = {
        title: 'POINTS',
    };

    state = {
        countA: 1,
        countB: 1
    };


    render() {
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
                    <Text style={{flex:1, fontSize:30, color:'#383838'}}>POINTS</Text>
                    <PieChart doughnut={true} chart_wh={250} series={[this.state.countA, this.state.countB]}
                               sliceColor={['#EE74EE', '#EE7474']}/>
                    <View style={{flex:1, flexDirection: "row"}}>
                        <PointDisplay/>
                        <PointDisplay/>
                    </View>
                </View>
            </ImageBackground>

        );
    }
}
