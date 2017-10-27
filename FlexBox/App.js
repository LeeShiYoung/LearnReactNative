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
    View,
    Text
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


const {width} = Dimensions.get('window');

export default class App extends Component<{}> {

    constructor(props) {
        super(props);

        this._onTouchMove = this._onTouchMove.bind(this);
        this._onTouchStart = this._onTouchStart.bind(this);
        this._onTouchEnd = this._onTouchEnd.bind(this);
    }

    _onTouchMove(event) {
        console.log("touvh move: ");
    }

    _onTouchStart(event) {
        console.log("touch start");
    }

    _onTouchEnd(event) {
        console.log("touch end");
    }

    _onLayout(event) {
        let {x, y, width, height} = event.nativeEvent.layout;
        console.log('width from view onlayout' + width);
        console.log('height from view onlayout' + height);
        console.log('x from view onlayout' + x);
        console.log('y from view onlayout' + y);

        let dimensions = require('Dimensions');
        let {width2, height2} = dimensions.get('window');
        console.log('width from Dimensions' + width2);
        console.log('height from Dimensions' + height2);
        console.log('\r\n');
    }


    render() {
        return (
            <View style={styles.container}
                  onTouchStart = {this._onTouchStart}
                  onTouchMove = {this._onTouchMove}
                  onTouchEnd = {this._onTouchEnd}
                  onLayout={this._onLayout}>

                {/*<View style={styles.welcome} opacity={0.2}/>*/}
                {/*<View style={styles.welcome} opacity={0.3}/>*/}
                {/*<View style={styles.welcome} opacity={0.4}/>*/}
                {/*<View style={styles.welcome} opacity={0.5}/>*/}
                {/*<View style={styles.welcome} opacity={0.6}/>*/}

                <Text style={styles.textSty} >啦啦啦</Text>
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

    textSty: {

        textAlign: 'center',
        fontSize: 20,
        backgroundColor: 'red',
        // width: 200,
        // height: 100
    }
});
