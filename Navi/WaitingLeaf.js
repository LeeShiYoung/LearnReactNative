import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
} from 'react-native';
import PropTypes from 'prop-types'

const {width} = Dimensions.get('window');

export default class WaitingLeaf extends Component<{}> {

    constructor(props) {
        super(props);

    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    登录使用手机号：{this.props.phoneNumber}
                </Text>

                <Text style={styles.textPromptStyle}>
                    登录使用密码：{this.props.userPw}
                </Text>

                <Text style={styles.bigTextStyles}
                      onPress={() => this.props.onGoBackPressed()}>
                    返回
                </Text>
            </View>
        );
    }
}

// 属性确认
WaitingLeaf.propTypes = {
    phoneNumber: PropTypes.string,
    userPw: PropTypes.string
};

let styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    textPromptStyle: {
        marginTop: 100,
        fontSize: 20
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