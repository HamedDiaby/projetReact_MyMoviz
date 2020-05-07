import React, { useState } from 'react';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import { Container, Row } from 'reactstrap';

function App(props) {

  const [moviesCount, setMoviesCount] = useState(0);
  const [whishListMoviesData, setWhishListMoviesData] = useState([]);

  var handleClickAddMovie = (movie, like, url)=> {
    if(like == -1){
      setWhishListMoviesData( whishListMoviesData.filter( (e)=>(e.movie !== movie) ) );
    }else {
      setWhishListMoviesData( [...whishListMoviesData, {movie:movie, url:url}] );
    }
    setMoviesCount(moviesCount + like);
  }

  var handleClickDeleteMovie = (monObjet)=> {
    setWhishListMoviesData( whishListMoviesData.filter( (e)=>(e.movie !== monObjet.movie) ) );
    setMoviesCount(moviesCount - 1);
    // console.log(props);
    // console.log("++++++", monObjet);
  }

  var moviesData = [
    {
      img : './img/starwars.jpg',
      title : 'Star Wars : L\'Ascension de Skywalker',
      description : 'La conclusion de la saga Skywalker. De nouvelles légendes vont naitre dans cette ...'
    },
    {
      img : './img/maleficent.jpg',
      title : 'Maléfique : Le pouvoir du mal',
      description : 'Plusieurs années après avoir découvert pourquoi la plus célèbre méchante disney avait un coeur ...'
    },
    {
      img : './img/jumanji.jpg',
      title : 'Jumanji : The Next Level',
      description : 'L\'equipe est de retour, mais le jeu à changé. Alors qu\'ils retournent dans Jumanji pour secourir ...'
    }
  ];
  // var moviesList = [];
  // for(var i = 0; i < moviesData.length; i++){
  //   moviesList.push(<Movies movieImg={moviesData[i].img} movieTitle={moviesData[i].title} movieDescription={moviesData[i].description} />);
  // }
  var moviesList = moviesData.map(function(movie, i) {
    return <Movies whishList={whishListMoviesData} handleClickAddMovieParent={handleClickAddMovie} movieImg={movie.img} movieTitle={movie.title} movieDescription={movie.description} />;
  });
  
  return (
    <div style={ {backgroundColor: '#2c3336'} } className="App">
      <Container>
        <Header whishListMoviesCount={moviesCount} movieWhishList={whishListMoviesData} handlevClickDeleteMovieParent={handleClickDeleteMovie}/>
          <Row>
            { moviesList }
          </Row>
      </Container>
    </div>
  );
}

export default App;
