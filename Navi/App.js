/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform, BackHandler
} from 'react-native';
import LoginLeaf from './LoginLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class App extends Component<{}> {

    constructor(props) {
      super(props);
      this.state = {
          currentScence: 'Login',
          phoneNum: '',
          userPW: ''
      };
      this.handleBackSignal = this.handleBackSignal.bind(this);
      this.onLoginPressed = this.onLoginPressed.bind(this);
    }

    onLoginPressed(aNumber, aPW) {
        this.setState({
            currentScence: 'Waiting',
            phoneNum: aNumber,
            userPW: aPW
        });
    }

    render() {
        if (this.state.currentScence === 'Login')

            return <LoginLeaf onLoginPressed={this.onLoginPressed}/>;
        else return (

            <WaitingLeaf phoneNumber={this.state.phoneNum}
                         onGoBackPressed={this.handleBackSignal}
                         userPw={this.state.userPW}/>
        )
    }

    handleBackSignal() {
        if (this.state.currentScence === 'Waiting') {
            this.setState( {currentScence: 'Login'});
            return true;
        }
        return false;
    }

    componentDidMount() {
        if (Platform.OS === "android")
            BackHandler.addEventListener('hardwareBackPress', this.handleBackSignal);
    }

    componentWillMount() {
        if (Platform.OS === "android")
            BackHandler.removeEventListener('hardwareBackPress', this.handleBackSignal);
    }
}
