import React, { Component, useState, useEffect, useRef} from 'react'
import { Text, View, Image, Alert,Dimensions,Platform,FlatList,TextInput, Modal  } from 'react-native'
import Button from 'react-native-button';
import {useDispatch, useSelector} from 'react-redux'
import {addMovieAction, fetchFailedAction, fetchMovieAction, fetchSuccessAction, deleteItemAction, deleteItemSuccessAction} from '../actions'
import ItemMovie from './ItemMovie'
import {updateItemAction, updateItemSuccessAction} from '../actions'
var screen = Dimensions.get('window');


const MoviewComponent = () => {
    const dispatch = useDispatch();
    //data in redux
    const dataMovie = useSelector((state) => state.movieReducers);
    //input insert movie
    let [moivieName, setMovieName] = useState('');
    let [realeaseYear, setRealeaseYear] = useState('');
    let [isModal, setIsModal] = useState(false);

    //data show modal
    let [nameMovie, setNameMovie] = useState('');
    let [releaseYear, setReleaseYear] = useState('');
    let [_id, setId] = useState('');

    //update movie
    const onUpdateItemAction = (updatedMovie) => {
        dispatch(updateItemAction(updatedMovie));
    }
    const onUpdateItemSuccessAction = (updatedMovie) => {
        dispatch(updateItemSuccessAction(updatedMovie));
    }
     //add movie
     const addMovie = (newMovie) => {
        dispatch(addMovieAction(newMovie));
    }
    //get data movie
    const fetchMovie = () => {
        dispatch(fetchMovieAction('asc'));
    }

    //get props in item
    const getStatus = (result) => {
        let status = result.isModals;
        setIsModal(status);
        let itemMovies = result.items;
        setId(itemMovies._id+"");
        setReleaseYear(itemMovies.realeaseYear+"");
        setNameMovie(itemMovies.name);
        console.log("Data item-----"+JSON.stringify(itemMovies._id));
    }
    return (
        <View style={{flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0}}>
            <Text style={{margin: 10, fontWeight: 'bold', color: 'orange', fontSize: 20}}>
                List Movie with Saga
            </Text>
            <Text style={{margin: 10, color: 'black', fontSize: 20}}>
                New Movie
            </Text>
            <View style={{height: 100, margin: 10}}>
                <TextInput style={{flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1}}
                value={moivieName}
                onChangeText={(text) => setMovieName(text)}
                placeholder={'Enter new movie name'}
                 />
                 <TextInput style={{flex: 1, margin: 5, padding: 10, borderColor: 'gray', borderWidth: 1, width: 120}}
                value={realeaseYear}
                placeholder={'Enter release year'}
                onChangeText={(text) => setRealeaseYear(text)}
                keyboardType={'numeric'}
                 />
            </View>
            <View style={{height: 70, flexDirection: 'row', justifyContent: 'center'}}>
                <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'orange',
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() =>{fetchMovie()}}>
                        Fetch Movie
                </Button>
                <Button containerStyle={{
                        padding: 10, height: 45, borderRadius: 10, backgroundColor: 'orange', marginLeft: 30
                    }}
                    style={{fontSize: 18, color: 'white'}}
                    onPress={() =>{
                        if(!nameMovie.length || !realeaseYear.length){
                            alert("Name or Year is emty")
                            return;
                        }
                        addMovie({name: moivieName, realeaseYear: realeaseYear});
                    }}>
                        Add Movie
                </Button>
            </View>
            <FlatList
                data={dataMovie}
                keyExtractor={(item) => item._id}
                renderItem={({item, index}) =><ItemMovie getState={getStatus} item={item} itemIndex={index} /> }
             />
            <Modal
            visible={isModal}
            animationType='fade'
            transparent={true}
            >
                <View style={{flex:1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.3)', padding: 20}}>
                <View style={{backgroundColor: '#fff', justifyContent: 'center', height: 300, borderRadius: 20}}>
                <Text style={{
                    fontSize: 16,
                    fontWeight:'bold',
                    textAlign: 'center',
                    marginTop: 40
                }}>
                    Movie's information
                </Text>
                <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 20,
                    marginBottom: 10,
                    borderBottomWidth: 1
                }}
                onChangeText={(text) => setNameMovie(text)}
                placeholder={'Movie name'}
                value={nameMovie}
                 />
                 <TextInput
                style={{
                    height: 40,
                    borderBottomColor: 'gray',
                    marginLeft: 30,
                    marginRight: 30,
                    marginTop: 10,
                    marginBottom: 20,
                    borderBottomWidth: 1
                }}
                onChangeText={(text) => setReleaseYear(text)}
                placeholder={'Year of release'}
                value={releaseYear}
                keyboardType={'numeric'}
                 />
                 <View style={{flex: 1, flexDirection: 'row', justifyContent: 'space-between', padding: 20}}>
                    <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'red',
                        width: 150
                    }}
                    onPress={() => {
                        setIsModal(false);
                    }}
                    >
                        Exit
                    </Button>
                    <Button
                    style={{fontSize: 18, color: 'white'}}
                    containerStyle={{
                        padding: 8,
                        height: 40,
                        borderRadius: 6,
                        backgroundColor: 'mediumseagreen',
                        width: 150
                    }}
                    onPress={() => {
                        if(nameMovie.length == 0 || releaseYear.length == 0){
                            alert("You must enter movie name and year")
                            return;
                        }
                        onUpdateItemAction({_id: _id, name: nameMovie, realeaseYear: releaseYear});
                        setIsModal(false);
                    }}
                    >
                        Save
                    </Button>
                 </View>
                </View>
                </View>
            </Modal>

        </View>
    )
}

export default MoviewComponent;