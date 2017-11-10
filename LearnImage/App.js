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
    Image
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


let imageSource = {
    uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510227567353&di=c32e51290a763b88870b677e00f4fe36&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Feac4b74543a98226fe24da348082b9014a90eb38.jpg'
};

export default class App extends Component<{}> {

    constructor(props) {
        super(props);
        this.state = {
            imageW: 0,
            imageH: 0,

            // this.updateSize = this.updateSize.bind(this);
        };
    }

    updateWidth(width) {
        this.setState(() => {
                return {
                    imageW: width,
                }
            }
        );
    };

    updateHeight(height) {
        this.setState(() => {
                return {
                    imageH: height
                }
            }
        );
    }

    render() {
        return (

            <View style={styles.container}>

                <Text style={styles.buttonStyle}
                      onPress={() => this.downLoad()}>
                    下载{this.state.imageW}{this.state.imageH}
                </Text>

                <Image style={styles.imageStyle}
                       source={imageSource}
                       resizeMode={'contain'}/>
            </View>
        );
    }

    downLoad() {
        let imageSource2 = {
            uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1510227567353&di=c32e51290a763b88870b677e00f4fe36&imgtype=0&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fimage%2Fpic%2Fitem%2Feac4b74543a98226fe24da348082b9014a90eb38.jpg'
        };
        // Image.getSize(imageSource2).then(
        //     (width, height) => {
        //         console.log(width);
        //         console.log(height);
        //         this.updateWidth(width);
        //         this.updateHeight(width);
        //     }
        // ).catch(
        //     (error) => {
        //         console.log(error);
        //     }
        // );

        Image.prefetch(imageSource2).then(
            (result) => {
                console.log(result);
            }
        ).catch(
            (error) => {
                console.log(error);
            }
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
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
    imageStyle: {
        width: 375,
        height: 375,
        marginTop: 50,
        backgroundColor: 'green'
    },
    buttonStyle: {
        width:100,
        height:50,
        backgroundColor:'red'
    }

});
