import React, { useState } from 'react';
import {
    Card, CardImg, CardText, CardBody, Badge, ButtonGroup, Button, Col
  } from 'reactstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons';

  
  function Movies(props){

    const [likeColor, setLikeColor] = useState('#212529');
    const [likeStatus, setLikeStatus] = useState(false);

    const [pictoMovieColor, setPictoMovieColor] = useState('#212529');
    const [vewsMovieCount, setVewsMovieCount] = useState(0);
    const [showMoviStatus, setShowMoviStatus] = useState(false);

    const [starsCount, setStarsCount] = useState(0);

    const [starsCountMoy, setStarsCountMoy] = useState(6);

    var stars = [];
    var starsMoy = [];
    for(let i = 0; i < 10; i++){
        var starsColor = '#212529';
        if(starsCount > i){
            starsColor = '#f1c40f';
        }
        stars.push(<Icon icon={faStar} style = { {color: starsColor} } onClick={ ()=> updateStarsColor(i) }/>);
        
        var starsColorMoy = '#212529';
        if(starsCountMoy > i){
            starsColorMoy = '#f1c40f';
        }
        starsMoy.push(<Icon icon={faStar} style = { {color: starsColorMoy} }/>);
    }

    var addLike = ()=> {
        if(likeStatus == false){
            setLikeColor('#e74c3c');
            setLikeStatus(true);
            
            props.handleClickAddMovieParent(props.movieTitle, 1, props.movieImg);

        } else {
            setLikeColor('#212529');
            setLikeStatus(false);

            props.handleClickAddMovieParent(props.movieTitle, -1, props.movieImg);
        }
    }

    var showMovie = ()=> {
        if(showMoviStatus == false){
            setPictoMovieColor('#e74c3c');
            setShowMoviStatus(true);
            setVewsMovieCount(1);
        }
        if(showMoviStatus == true){
            setVewsMovieCount(vewsMovieCount + 1);
        }
    }

    var addStarColor = ()=> {
        if(starsCount <= 10 && starsCount >= 0){
            setStarsCount(starsCount + 1);
            setStarsCountMoy(Math.round((starsCountMoy + starsCount)/2));
        }
    }
    var removeStarColor = ()=> {
        if(starsCount <= 10 && starsCount >= 1){
            setStarsCount(starsCount - 1);
            setStarsCountMoy(Math.round((starsCountMoy + starsCount)/2));
        }
    }
    var updateStarsColor = (pos)=> {
        setStarsCount(pos + 1);
    }

    props.whishList

    return (
        <Col lg="4" md="6" sm="12">
            <Card style ={ {marginBottom: 70} }>
                <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
                <CardBody>
                    <CardText>
                        Like
                        <Icon className="like" icon={faHeart} onClick= { ()=>addLike() } style = { {color: likeColor} }/>
                    </CardText>
                    <CardText>
                        Nombre de vues 
                        <Icon className="showMovie" icon={faVideo} onClick= { ()=>showMovie() } style = { {color: pictoMovieColor} }/> 
                        <Badge color="secondary">{ vewsMovieCount }</Badge>
                    </CardText>
                    <CardText> Mon avis { stars }
                        <ButtonGroup>
                            <Button onClick= { ()=>removeStarColor() }>-1</Button>
                            <Button onClick= { ()=>addStarColor() }>+1</Button>
                        </ButtonGroup>
                    </CardText>
                    <CardText>Moyennes { starsMoy } ({starsCountMoy})</CardText>
                    <CardText>{props.movieTitle}</CardText>
                    <CardText>{props.movieDescription}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
  };
  
  export default Movies;