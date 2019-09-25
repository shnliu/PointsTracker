// import React, { Component } from 'react';
// import { AppRegistry, Text, View } from 'react-native';
//
// class Blinker extends Component {
//
//     componentDidMount(){
//         // Toggle the state every second
//         setInterval(() => (
//             this.setState(previousState => (
//                 { isShowingText: !previousState.isShowingText }
//             ))
//         ), 1000);
//     }
//
//     //state object
//     state = { isShowingText: true };
//
//     render() {
//         if (!this.state.isShowingText) {
//             return null;
//         }
//
//         return (
//             <Text>{this.props.text}</Text>
//         );
//     }
// }
//
// export default class BlinkApp extends Component {
//     render() {
//         return (
//             <View>
//                 <Blinker text='I love to blink' />
//                 <Blinker text='Yes blinking is so great' />
//                 <Blinker text='Why did they ever take this out of HTML' />
//                 <Blinker text='Look at me look at me look at me' />
//             </View>
//         );
//     }
// }
