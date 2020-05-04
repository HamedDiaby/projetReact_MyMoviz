import React, { useState } from 'react';
import {
    Nav, NavItem, NavLink, Button, Popover, PopoverHeader, PopoverBody, ListGroup, ListGroupItem, Media
} from 'reactstrap';

function Header(){

    const [popoverOpen, setPopoverOpen] = useState(false);
    const toggle = () => setPopoverOpen(!popoverOpen);

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
                    2 films
                </Button>
                <Popover placement="bottom" isOpen={popoverOpen} target="Popover1" toggle={toggle}>
                    <PopoverHeader>Whishlist</PopoverHeader>
                    <PopoverBody>
                        <ListGroup>
                            <ListGroupItem>
                                <img width="30%" src="./img/maleficent.jpg"/>
                                Maléfique : Le pouvoir du mal
                            </ListGroupItem>
                            <ListGroupItem>
                                <img width="30%" src="./img/jumanji.jpg"/>
                                Jumanji : The Next Level
                            </ListGroupItem>
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