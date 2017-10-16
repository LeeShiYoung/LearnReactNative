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

const {width} = Dimensions.get('window');
// const pixelRatio = PixelRatio.get();
// let widthOfMargin = Dimensions.get('window').width * 0.5;

export default class App extends Component<{}> {
    constructor(props) {
      super(props);

      // 成员变量
        this.myProperty1 = 'test';
        this.mhProperty2 = 'test2';

        // 状态机变量
        this.state = {
          inputedNum: '',
          inputedPW: ''
      };
      this.updatePW = this.updatePW.bind(this);
    }

    updateNum(newText) {
        // 改变状态机变量的值 调用该方法
        this.setState(() => {
            return {
                inputedNum: newText,
            };
        });
        // this.setState((oldState) => {
        //         for (var aName in oldState) {
        //
        //             console.log(aName);
        //             console.log(oldState[aName]);
        //         }
        //         return {
        //             inputedNum: newText,
        //             aBranderNewStateVarible: 'I am a new varable.'
        //         };
        //     }, this.changeNumDon
        // );
    }
    // changeNumDon() {
    //     console.log('React Native has Changed inputed Num');
    // }

    /*// 判断是否渲染
    shouldComponentUpdate(nextProps, nextState) {
        if (this.state.inputedNum.length < 3) return false;
        return true;
    }*/

    /*updatePW(newText) {
        this.setState(() => {
            return {
                inputedPW: newText,
            };
        });
    };*/

    //终极简单写法
    updatePW(inputedNum) {
        this.setState({ inputedNum })
    }

    render() {
        return (
            <View style={styles.container}>

                <TextInput style={styles.textInputStyle} placeholder={'请输入手机号'}
                           onChangeText={(inputedNum) => this.setState({inputedNum})}/>
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
        height: 40,
        width: width - 30

    },
    textPromptStyle: {
      margin: 20,
      fontSize: 20,

    },
    bigTextPrompt: {
        margin: 20,
        backgroundColor: 'green',
        color: 'white',
        textAlign: 'center',
        fontSize: 30,
        width: width - 30,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center'
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
