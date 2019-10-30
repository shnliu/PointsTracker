import React from 'react';
import {Text, View} from 'react-native';
import {ImageBackground, StyleSheet} from 'react-native';
import PieChart from 'react-native-pie-chart';
import PointDisplay from "./PointDisplay";
import Button from "react-native-button";
import EditModal from "./EditModal";
import HomeSettingsBar from "./HomeSettingsBar";

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
            countB: 1,
            modalVisible: false,
        };
    }

    styles = StyleSheet.create({
        modalButtonStyle: {
            color: '#383838',
            fontSize: 40,
            backgroundColor: 'pink',
            alignSelf: 'stretch'
        },
        pointDisplayViewStyle: {
            flex: 2.5,
            flexDirection: "row",
            alignItems: 'center'
        },
        basicTextStyle: {
            flex: 0.65,
            fontSize: 30,
            color: '#383838'
        },
        textViewStyle: {
            flex: 1,
            flexDirection: 'column-reverse',
            alignItems: 'center'
        },
        backgroundImageStyle: {
            width: '100%',
            height: '100%'
        },
        pieChartStyle: {
            alignSelf: 'center'
        }
    });

    handleModalSubmit = (modalSubmitState) => {
        this.performAction(modalSubmitState);
        this.closeModal();
    };

    performAction(modalSubmitState){
        alert(JSON.stringify(modalSubmitState));

        if (modalSubmitState.actionSelect==="clear"){
            this.performClear(modalSubmitState.userRadio);
        }
        if (modalSubmitState.actionSelect==="add"){
            this.performAdd(modalSubmitState.userRadio, modalSubmitState.pointsInput);
        }
        if (modalSubmitState.actionSelect==="subtract"){
            this.performSubtract(modalSubmitState.userRadio, modalSubmitState.pointsInput);
        }
        if (modalSubmitState.actionSelect==="transfer"){
            // need to fix users for transfer
            this.performTransfer(modalSubmitState.userRadio, modalSubmitState.pointsInput);
        }
    };

    performClear(count){
        this.setState({[count]: 0});
    };

    performAdd(count, points){
        this.setState((prevState)=>({[count]: (parseFloat(prevState[count]) + parseFloat([points]))}));
    };

    performSubtract(count, points){
        this.setState((prevState)=>({[count]: (parseFloat(prevState[count]) - parseFloat([points]))}));
    };

    performTransfer(countFrom, points){
        if (countFrom==="countA"){
            this.setState((prevState)=>({[countFrom]: (parseFloat(prevState[countFrom]) - parseFloat([points]))}));
            this.setState((prevState)=>({countB: (parseFloat(prevState.countB) + parseFloat([points]))}));
        }
        else {
            this.setState((prevState)=>({[countFrom]: (parseFloat(prevState[countFrom]) - parseFloat([points]))}));
            this.setState((prevState)=>({countA: (parseFloat(prevState.countA) + parseFloat([points]))}));
        }
    };

    openModal = () => {
        this.setState({modalVisible: true})
    };

    closeModal = () => {
        this.setState({modalVisible: false})
    };

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
        const {navigate} = this.props.navigation;

        return (
            <ImageBackground source={require('./images/hearts-2.jpeg')} imageStyle={{resizeMode: 'cover'}}
                             style={this.styles.backgroundImageStyle}>
                <View style={{flex: 1}}>
                    <View style={{flex: 1, justifyContent: "space-between"}}>
                        <HomeSettingsBar onPressHome={() => navigate('Home')}
                                         onPressSetting={() => navigate('Setting')}/>
                    </View>
                    <View style={{flex: 50, justifyContent: 'space-around'}}>
                        <View style={this.styles.textViewStyle}>
                            <Text style={this.styles.basicTextStyle}> POINTS </Text>
                        </View>
                        <PieChart style={this.styles.pieChartStyle} doughnut={true} chart_wh={250}
                                  series={[this.state.countA, this.state.countB]}
                                  sliceColor={['#EE74EE', '#EE7474']} coverFill={'rgba(255,255,255,0.7)'}/>
                        <View style={this.styles.pointDisplayViewStyle}>
                            <PointDisplay increment={this.incrementA} decrement={this.decrementA} color={'#EE74EE'}
                                          count={this.state.countA} label={'UserA'}/>
                            <PointDisplay increment={this.incrementB} decrement={this.decrementB} color={'#EE7474'}
                                          count={this.state.countB} label={'UserB'}/>
                        </View>
                        <Button style={this.styles.modalButtonStyle} onPress={() => this.openModal()}>Edit </Button>
                        {this.state.modalVisible ?
                            <EditModal handleSubmit={this.handleModalSubmit} visible={this.state.modalVisible} close={this.closeModal}/>
                            : null}
                    </View>
                </View>
            </ImageBackground>
        );
    }
}
