//From Nguyen Duc Hoang, Class Component convert to React Hook
import { useNavigation } from '@react-navigation/native';
import React, { Component } from 'react'
import { Text, View, Platform, Image, Alert } from 'react-native'
import Button from 'react-native-button';
import {useDispatch, useSelector} from 'react-redux'
import {increaseAction} from '../actions'
import {decreaseAction} from '../actions'

const CounterComponent = () => {
    const navigation = useNavigation();
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
                <Text style={{margin: 20, fontWeight: 'bold', color: 'orange', fontSize: 20}}>
                    Redux saga with React Hook
                </Text>
                <View style={{height: 50, margin: 10, flexDirection: 'row', justifyContent: 'center'}}>
                    <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'orange'
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() => {
                        onDecrement(1)}}
                         >
                        Decrement -
                    </Button>
                    <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'orange', marginLeft: 30
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() =>
                        onIncrement(1)}>
                        Increment +
                    </Button>
                </View>
                <View style={{alignItems: 'center'}}>
                    <Text style={{margin: 20, fontWeight: 'bold', color: 'darkblue', fontSize: 17}}>
                        Count: {times}
                    </Text>
                    <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'orange', marginLeft: 30
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() => navigation.navigate('PlayerLog')}>
                        Get List Movie
                    </Button>
                </View>
            </View>
        )
}

export default CounterComponent;
