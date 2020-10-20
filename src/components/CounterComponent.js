import React, { Component } from 'react'
import { Text, View, Platform, Image, Alert } from 'react-native'
import Button from 'react-native-button';
import {useDispatch, useSelector} from 'react-redux'
import {increaseAction} from '../actions'
import {decreaseAction} from '../actions'

const CounterComponent = () => {
    const dispatch = useDispatch();
    const times = useSelector((state) => state.counterReducers);
    const onDecrement = (step) => {
        dispatch(decreaseAction(step));
    }
    const onIncrement = (step) => {
        dispatch(increaseAction(step));
    }
    console.log("State-----+"+JSON.stringify(times));
    //Alert state
    alert(`State after change: ${JSON.stringify(times)}`);
        return (
            <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
                <Text style={{margin: 20, fontWeight: 'bold', color: 'forestgreen', fontSize: 20}}>
                    Redux saga tutorial
                </Text>
                <View style={{height: 50, margin: 10, flexDirection: 'row'}}>
                    <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() => {
                        onDecrement(1)}}
                         >
                        Decrement -
                    </Button>
                    <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'darkviolet', marginLeft: 30
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() =>
                        onIncrement(1)}>
                        Increment +
                    </Button>
                </View>
                <Text style={{margin: 20, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                    Count: {times}
                </Text>
            </View>
        )
}

export default CounterComponent;
