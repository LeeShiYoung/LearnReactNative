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
    PixelRatio,
    TextInput
} from 'react-native';

// const instructions = Platform.select({
//     ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//     android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

// const {height, width} = Dimensions.get('window');
// const pixelRatio = PixelRatio.get();
// let widthOfMargin = Dimensions.get('window').width * 0.5;

export default class App extends Component<{}> {
    constructor(props) {
      super(props);
      this.state = {
          inputedNum: '',
          inputedPW: ''
      };
      this.updatePW = this.updatePW.bind(this);
    }


    updateNum(newText) {
        this.setState(() => {
            return {
                inputedNum: newText,
            };
        });
    }

    updatePW(newText) {
        this.setState(() => {
            return {
                inputedPW: newText,
            };
        });
    };

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}
                           onChangeText={(newText) => this.updateNum(newText)}/>
                <Text style={styles.textPromptStyle}>
                    您输入的手机号是：{this.state.inputedNum}
                </Text>
                <TextInput style={styles.textInputStyle} placeholder={'请输入密码'} secureTextEntry={true}
                           onChangeText={(newText) => this.state.updatePW}/>
                <Text style={styles.bigTextPrompt}>
                    确定
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    },
    textInputStyle: {
        margin: 20,
        // marginTop: 40,
        // width: 200,
        backgroundColor: 'gray',
        fontSize: 20,
        height: 30,

    },
    textPromptStyle: {
      margin: 20,
      fontSize: 20,

    },
    bigTextPrompt: {
        margin: 20,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        // marginTop: 40
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
});
