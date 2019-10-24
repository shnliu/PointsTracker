import React from 'react';
import {Text, View} from 'react-native';
import {ImageBackground} from 'react-native';
import PieChart from 'react-native-pie-chart';
import PointDisplay from "./PointDisplay";

export default class PointsScreen extends React.Component {
    static navigationOptions = {
        title: 'POINTS',
    };

    constructor(props) {
        super(props);
        this.state = {
            countA: 2,
            countB: 1
        };
    }

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
                    <View style={{flex: 2, flexDirection: "row"}}>
                        <PointDisplay color={'#EE74EE'} count={this.state.countA} label={'UserA'}/>
                        <PointDisplay color={'#EE7474'} count={this.state.countB} label={'UserB'}/>
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
