import React from 'react';
import './App.css';
import Header from './Header';
import Movies from './Movies';
import { Container, Row } from 'reactstrap';

function App() {

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
    },
  ];
  var moviesList = [];
  for(var i = 0; i < moviesData.length; i++){
    moviesList.push(<Movies movieImg={moviesData[i].img} movieTitle={moviesData[i].title} movieDescription={moviesData[i].description} />);
  }
  // var moviesList = moviesData.map(function(img, title, description) {
  //   return <Movies movieImg={img} movieTitle={title} movieDescription={description} />;
  // });

  return (
    <div className="App">
      <Container>
        <Header />
          <Row>
            { moviesList }
          </Row>
      </Container>
    </div>
  );
}

export default App;
