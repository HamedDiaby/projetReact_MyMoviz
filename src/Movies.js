import React from 'react';
import {
    Card, CardImg, CardText, CardBody, Badge, ButtonGroup, Button, Col
  } from 'reactstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faHeart, faVideo, faStar } from '@fortawesome/free-solid-svg-icons';

  
  function Movies(props){

    var stars = [];
    for(var i = 0; i < 8; i++){
        stars.push(<Icon icon={faStar}/>);
    }

    return (
        <Col lg="4" md="6" sm="12">
            <Card>
                <CardImg top width="100%" src={props.movieImg} alt="Card image cap" />
                <CardBody>
                    <CardText>
                        Like
                        <Icon icon={faHeart}/>
                    </CardText>
                    <CardText>
                        Nombre de vues 
                        <Icon icon={faVideo} /> 
                        <Badge color="secondary">2</Badge>
                    </CardText>
                    <CardText> Mon avis { stars }
                        <ButtonGroup>
                            <Button>-1</Button>
                            <Button>+1</Button>
                        </ButtonGroup>
                    </CardText>
                    <CardText>Moyennes { stars } (8)</CardText>
                    <CardText>{props.movieTitle}</CardText>
                    <CardText>{props.movieDescription}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
  };
  
  export default Movies;