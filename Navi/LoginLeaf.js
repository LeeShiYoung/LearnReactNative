/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Dimensions,
    TextInput,
    Alert
} from 'react-native';
import PropTypes from 'prop-types'

const {width} = Dimensions.get('window');

export default class LoginLeaf extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {

            inputedMobile:'',
            inputedPassword:''
        };
    }

    updateMobile(newText) {
        this.setState(() => {
            return {
                inputedMobile: newText
            };
        });
    };


    updatePassword(newText) {
        this.setState(() => {
            return {
                inputedPassword: newText
            };
        });
    };
    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textFieldStyles} placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateMobile(newText)}/>

                <Text style={styles.textStyles}>
                    {this.state.inputedMobile}
                </Text>

                <TextInput style={styles.textFieldStyles} placeholder={'请输入密码'} secureTextEntry={true}
                           onChangeText={(newText) => this.updatePassword(newText)}/>

                <Text style={styles.bigTextStyles}
                      onPress={() => this.userPressConfirm()}>
                    确定
                </Text>

                <Text style={styles.bigTextStyles}
                      onPress={() => this.userPressAndressBook()}>
                    通讯录
                </Text>
            </View>
        );
    }

    userPressConfirm() {

        Alert.alert(
            '提示',
            '确认使用'+this.state.inputedMobile+'号码登录？',
            [
                {text: '取消', onPress: (() => {}), style: 'cancel'},
                {text: '确定', onPress: () => this.props.onLoginPressed(this.state.inputedMobile, this.state.inputedPassword)}
            ]
        );
    };

    // this指向出问题 待解决
    jumpToWaiting() {
        this.props.onLoginPressed(this.state.inputedMobile, this.state.inputedPassword);
    };

    userPressAndressBook() {
        // 空

    };
}

LoginLeaf.propTypes = {
    onLoginPressed: PropTypes.func
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    textFieldStyles: {
        marginTop: 40,
        width: width - 30,
        height: 50,
        borderRadius: 5,
        borderWidth: 1,
        padding: 5
    },
    textStyles: {
        marginTop:20,
        fontSize: 15,
        width: width - 30,
        // textColor: 'red'
    },
    bigTextStyles: {
        backgroundColor: 'blue',
        marginTop: 40,
        width: width - 30,
        height: 50,
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        padding: 15
    }
});

