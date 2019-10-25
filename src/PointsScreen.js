import React from 'react';
import {Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import PieChart from 'react-native-pie-chart';
import PointDisplay from "./PointDisplay";
import Button from "react-native-button";

/*
Reference: https://stackoverflow.com/questions/35537229/how-to-update-parents-state-in-react
 */

export default class PointsScreen extends React.Component {
    static navigationOptions = {
        title: 'POINTS',
    };

    constructor(props) {
        super(props);
        this.state = {
            countA: 1,
            countB: 1
        };
    }

    incrementA = () => {
        this.setState((prevState) => ({countA: prevState.countA + 1}))
    };

    incrementB = () => {
        this.setState((prevState) => ({countB: prevState.countB + 1}))
    };

    decrementA = () => {
        this.setState((prevState) => ({countA: prevState.countA - 1}))
    };

    decrementB = () => {
        this.setState((prevState) => ({countB: prevState.countB - 1}))
    };

    render() {
        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={{width: '100%', height: '100%'}}>
                <View style={{flex: 1, flexDirection: "column", alignItems: "center"}}>
                    <View style={{flex: 1, flexDirection: 'column-reverse'}}>
                        <Text style={{flex: 0.65, fontSize: 30, color: '#383838'}}> POINTS </Text>
                    </View>
                    <PieChart doughnut={true} chart_wh={250} series={[this.state.countA, this.state.countB]}
                              sliceColor={['#EE74EE', '#EE7474']} coverFill={'rgba(255,255,255,0.7)'}/>
                    <View style={{flex: 2.5, flexDirection: "row"}}>
                        <PointDisplay increment={this.incrementA} decrement={this.decrementA} color={'#EE74EE'} count={this.state.countA}
                                      label={'UserA'}/>
                        <PointDisplay increment={this.incrementB} decrement={this.decrementB} color={'#EE7474'} count={this.state.countB}
                                      label={'UserB'}/>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
