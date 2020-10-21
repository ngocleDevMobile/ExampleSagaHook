import React, { Component } from 'react'
import { Text, View, Platform, TextInput, Alert } from 'react-native'
import Button from 'react-native-button'
import Swipeout from 'react-native-swipeout'
import {useDispatch, useSelector} from 'react-redux'
import { deleteItemAction, deleteItemSuccessAction} from '../actions'


const ItemMovie = ({itemIndex, item, getState}) => {
    const dispatch = useDispatch();
    const setModal = () => {
        getState({
            isModals: true,
            items: item,
        });
    }
   //delete movie
   const onDeleteItemAction = (deletedMovieId) => {
    dispatch(deleteItemAction(deletedMovieId));
    console.log("Id Movie-----"+deletedMovieId);
}
    const swipeSettings = {
        autoClose: true,
        right: [
            {
                onPress: () => {
                    setModal()
                },
                text: 'Edit', type: 'primary'
            },
            {
                onPress: () => {
                    Alert.alert("Xác nhận",
                    "Bạn chắc chắn muốn xoá phim này ?", [
                        {
                            text: 'No', onPress: () => console.log('Cancel action'), style: 'cancel'
                        },
                        {
                            text: 'Yes', onPress: () => {
                                onDeleteItemAction(item._id)
                            }
                        }
                    ])

                },
                text: 'Delete', type: 'delete'
            }
        ],
        rowId: item._id,
        sectionId: 1
    }
        return (
            <Swipeout {...swipeSettings} >
                <View style={{flex:1}}>
                    <Text style={{
                        padding:10,
                        fontWeight: 'bold',
                        fontSize: 17,
                        color: 'white',
                        backgroundColor: (itemIndex % 2 === 0) ? 'dodgerblue' : 'mediumseagreen'
                    }}>
                        {`${item.name}, releaseYear=${item.realeaseYear}`}
                    </Text>
                </View>
            </Swipeout>
        )
}

export default ItemMovie;
