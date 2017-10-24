/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Dimensions,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const {width} = Dimensions.get('window');

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>

                <View style={styles.welcome} opacity={0.2}/>
                <View style={styles.welcome} opacity={0.3}/>
                <View style={styles.welcome} opacity={0.4}/>
                <View style={styles.welcome} opacity={0.5}/>
                <View style={styles.welcome} opacity={0.6}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // position: 'relative'
    },

    vs: {
        height: 50,
        backgroundColor: 'gray',

        width: width
    },

    vs1: {
        flex: 1,
        height: 50,
        backgroundColor: 'black'
    },

    vs2: {
      flex: 2,
      height: 50,
      backgroundColor: 'black'
    },

    welcome: {
        width: 50,
        height: 50,
        borderRadius: 25,
        borderWidth: 1,
        shadowOffset: {width: 0, height: 0},
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
