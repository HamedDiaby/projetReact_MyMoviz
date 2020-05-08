import React, { useState } from 'react';
import {
    Nav, NavItem, NavLink, Button, Popover, PopoverHeader, PopoverBody, ListGroup, ListGroupItem, Media
} from 'reactstrap';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function Header(props){

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

    var deleteMovie = (pos)=>{
        for(var i = 0; i < props.movieWhishList.length; i++){
            if(i == pos){
                props.handlevClickDeleteMovieParent(props.movieWhishList[i]);
            }
        }
    }

    //console.log(props.movieWhishList);
    var movieWhishList = props.movieWhishList.map(function(movie, i) {
        return <ListGroupItem><img width="30%" src={movie.url}/>{movie.movie} <Icon onClick = { ()=>deleteMovie(i) } style={{color: 'red', cursor: 'pointer'}} icon={faTimes}></Icon></ListGroupItem>;
    });


  return (
    <div>
      <Nav>
        <NavItem>
            <NavLink href="#"> <img src="./img/logo.png" /> </NavLink>
        </NavItem>
        <NavItem>
            <NavLink className="text-white" href="#">Last Realeases</NavLink>
        </NavItem>
        <NavItem>
            <NavLink href="#">
                <Button id="Popover1" type="button">
                    {props.whishListMoviesCount} films
                </Button>
                <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                    <PopoverHeader>Whishlist</PopoverHeader>
                    <PopoverBody>
                        <ListGroup>
                            { movieWhishList }
                            {/* <ListGroupItem>
                                <img width="30%" src="./img/maleficent.jpg"/>
                                Maléfique : Le pouvoir du mal
                            </ListGroupItem> */}
                        </ListGroup>
                    </PopoverBody>
                </Popover>
            </NavLink>
        </NavItem>
      </Nav>
    </div>
  );
}

export default Header;