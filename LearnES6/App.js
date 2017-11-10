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
    Dimensions
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

let {width, height} = Dimensions.get('window');

export default class App extends Component<{}> {
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.buttonStyle}
                      onPress={() => this.learnES6()}>

                    我是按钮
                </Text>
            </View>
        );
    }

    learnES6() {

        // let [foo1 = true] = [];
        // console.log(foo1);
        //
        // let { foo2, bar } = {foo2: "aaa", bar: "bbb"};
        // console.log(foo2);
        // console.log(bar);

        // let {bar, foo} = {bar: "barrr", foo3: "qweqe"};

        // let {foo: baz} = {foo:'aaaaa', bar: 'bbb'};
        // console.log(baz);
        //
        // let obj = {first: 'hello', last: 'world'};
        // let {first: f, last: i} = obj;
        // console.log(f);
        // console.log(i);

        // let obj = {
        //   p: [
        //       'hello',
        //       {y: 'world'}
        //   ]
        // };
        //
        // let {p: [x, {y}]} = obj;
        // console.log(x);
        // console.log(y);


        // let obj2 = {
        //     p:[
        //         'hello',
        //         {y2: 'world'}
        //     ]
        // };
        // let{p, p:[x2, {y2}]} = obj2;
        // console.log(x2);
        // console.log(y2);
        // console.log(p);

        // const  node = {
        //     loc: {
        //         start: {
        //             line: 1,
        //             column: 5
        //         }
        //     }
        // };
        // let {loc, loc: {start}, loc: {start: {line}}} = node;
        // console.log(line);
        // console.log(loc);
        // console.log(start);

        // let obj = {};
        // let arr = [];
        // ({foo: obj.prop, bar: arr[0]} = {foo: 123, bar: true});
        //
        // console.log(obj);
        // console.log(arr);
        // console.log(obj.prop);

        // var {x = 3} = {x: undefined};
        // console.log(x);
        // var {x1 = 3} = {x1: null};
        // console.log(x1);

        // let x;
        // ({x} = {x: 1});
        // console.log(x);

        // let {log, sin, cos} = Math;
        // console.log(log);
        // console.log(sin);
        // console.log(cos);

        // let arr = [1, 2, 3];
        // let {0: first, [arr.length - 1]: last} = arr;
        // console.log(first);
        // console.log(last);

        // let {toString: s} = 123;
        // console.log(s === Number.prototype.toString);
        // let {toString: ss} = true;
        // console.log(ss === Boolean.prototype.toString);

        // function add([x, y]) {
        //     return x + y;
        // }
        // let res = add([1, 2]);
        // console.log(res);
        // let res2 = [[1, 2], [3, 4]].map(([a, b]) => a+b);
        // console.log(res2);

        // function move({x = 0, y= 0} = {}) {
        //     return [x, y];
        // }
        // function move({x, y} = {x: 0, y:0}) {
        //     return [x, y];
        // }
        // console.log(move({x: 3, y: 5}));
        // console.log(move({x: 3}));
        // console.log(move({}));
        // console.log(move());

        // let res = [1, undefined, 3].map((x = 'yes') => x);
        // console.log(res);

        // let jsonData = {
        //     id: 42,
        //     status: "OK",
        //     datas: [111, 222]
        // };
        // let {id, status, datas} = jsonData;
        // console.log(id);
        // console.log(status);
        // console.log(datas);

        // const  map = new Map();
        // map.set('first', 'hello');
        // map.set('second', 'world');
        // for (let [key, value] of map) {
        //     console.log(key + ' is ' + value);
        // }

        // {
        //     let a = 'secret';
        //     let f = function () {
        //         return a;
        //     };
        //     console.log(f());
        //     console.log(f);
        // }

        // let f = function () {
        //     return a;
        // };
        //
        // let x = do{
        //     let t = f();
        //     t * t + 1;
        // };
        // console.log(x);

        // const PI = 3.1415926535;
        // PI = 3;

        // let foo = {};
        // foo.prop = 123;
        // foo.prop = '2222';
        // console.log(foo.prop);

        var s = width.toString();
        for (let codePrint of 'lishiyang') {
            console.log(codePrint);
        }
        let name = '聚有财';
        console.log( name.charAt(0));

        console.log(name.startsWith('聚'));
        console.log(name.includes('有'));
        console.log(name.endsWith('财'));
        console.log(name.repeat(10));
        console.log(name.padStart(5, '财'));
        console.log(name.padEnd(5, '聚'));
        console.log(`公司名字：${name}`);
    };
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

    buttonStyle: {
        width: 100,
        height: 100,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 20,
        paddingTop: 40,
    }

});
