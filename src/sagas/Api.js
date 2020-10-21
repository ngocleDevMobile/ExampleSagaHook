import axios from 'axios';
const urlGetMovies = 'http://192.168.1.17:5000/getMovies';
const urlPostMovives = 'http://192.168.1.17:5000/postMovies';
const urlUpdateMovives = 'http://192.168.1.17:5000/updateMovie';
const urlDeleteMovives = 'http://192.168.1.17:5000/deleteMovie';

//Get Movie
function* getMoviesFromApi(){
    let movies =[];
    yield axios.get(urlGetMovies)
    .then((response) => {
      console.log(response.data);
      console.log(response.status);
      if(response.status === 200){
          movies = response.data
      } else {
          movies = [];
      }
    });
     //console.log("Get data movie-------"+JSON.stringify(movies));
    return movies;
}

//Insert movie
function* insertNewMovieFromApi(newMovie){
    let param = {
        name: newMovie.name,
        realeaseYear: newMovie.realeaseYear
    };
    const responses = yield axios
    .post(urlPostMovives, param)
    .then((ress) => ress.data)
    .catch((error) => {
      console.log(error);
    });
     console.log("Send data movie-------"+JSON.stringify(responses));
     return yield (responses.result === 'ok');
}

//send Put request to update movie

function* updateMovieFromApi(updatedMovie){
    const urlLink = `${urlUpdateMovives}/${updatedMovie._id.toString()}`;
    let params = {
        name: updatedMovie.name,
        realeaseYear: updatedMovie.realeaseYear
    };
    const responses = yield axios
    .put(urlLink, params)
    .then((ress) => ress.data)
    .catch((error) => {
      console.log(error);
    });
     console.log("Send data movie-------"+JSON.stringify(responses));
     return yield (responses.result === 'ok');
}

//delete movie
function* deleteMovieFromApi(deleteMovieId){
    const urlLinkdelete = `${urlDeleteMovives}/${deleteMovieId.toString()}`;
    const responses = yield axios
    .delete(urlLinkdelete)
    .then((ress) => ress.data)
    .catch((error) => {
      console.log(error);
    });
     console.log("Delete data movie-------"+JSON.stringify(responses));
     return yield (responses.result === 'ok');
}

export const Api = {
    getMoviesFromApi,
    insertNewMovieFromApi,
    updateMovieFromApi,
    deleteMovieFromApi,
}