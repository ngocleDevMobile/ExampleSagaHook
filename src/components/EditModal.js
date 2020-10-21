// import React, { Component, useRef, useState } from 'react'
// import { Text, View, Platform, TouchableHighlight, Dimensions, Alert, Image, TextInput } from 'react-native'
// import Modal from 'react-native-modalbox'
// import Button from 'react-native-button'
// import {useDispatch, useSelector} from 'react-redux'
// import {updateItemAction, updateItemSuccessAction} from '../actions'
// var screen = Dimensions.get('window');
// const EditModal = ({status, data}) => {
//     const dispatch = useDispatch();
//     let [nameMovie, setNameMovie] = useState(data.name);
//     let [releaseYear, setReleaseYear] = useState(data.realeaseYear+"");
//     let [isModal, setIsModal] = useState(status);
//     const [_id, setId] = useState(data._id);

//     const onUpdateItemAction = (updatedMovie) => {
//         dispatch(updateItemAction(updatedMovie));

//     }
//     console.log("Data in Modal-------"+JSON.stringify(status));

//     const onUpdateItemSuccessAction = (updatedMovie) => {
//         dispatch(updateItemSuccessAction(updatedMovie));
//     }

//         return (
//             <Modal
//             isOpen={isModal}
//             style={{
//                 justifyContent: 'center', borderRadius: Platform.OS === 'ios' ? 30 : 20, shadowRadius: 10,
//                 width: screen.width - 80, height: 280
//             }}
//             position="center"
//             backdrop={true}
//             >
//                 <Text style={{
//                     fontSize: 16,
//                     fontWeight:'bold',
//                     textAlign: 'center',
//                     marginTop: 40
//                 }}>
//                     Movie's information
//                 </Text>
//                 <TextInput
//                 style={{
//                     height: 40,
//                     borderBottomColor: 'gray',
//                     marginLeft: 30,
//                     marginRight: 30,
//                     marginTop: 20,
//                     marginBottom: 10,
//                     borderBottomWidth: 1
//                 }}
//                 onChangeText={(text) => setNameMovie(text)}
//                 placeholder={'Movie name'}
//                 value={nameMovie}
//                  />
//                  <TextInput
//                 style={{
//                     height: 40,
//                     borderBottomColor: 'gray',
//                     marginLeft: 30,
//                     marginRight: 30,
//                     marginTop: 10,
//                     marginBottom: 20,
//                     borderBottomWidth: 1
//                 }}
//                 onChangeText={(text) => setReleaseYear(text)}
//                 placeholder={'Year of release'}
//                 value={releaseYear}
//                 keyboardType={'numeric'}
//                  />
//                  <Button
//                  style={{fontSize: 18, color: 'white'}}
//                  containerStyle={{
//                      padding: 8,
//                      marginLeft: 70,
//                      marginRight: 70,
//                      height: 40,
//                      borderRadius: 6,
//                      backgroundColor: 'mediumseagreen'
//                  }}
//                  onPress={() => {
//                      if(nameMovie.length == 0 || releaseYear.length == 0){
//                          alert("You must enter movie name and year")
//                          return;
//                      }
//                      onUpdateItemAction({_id, nameMovie, releaseYear});
//                      setIsModal(false);
//                  }}
//                  >
//                      save
//                  </Button>
//             </Modal>
//         )
// }
// export default EditModal;
