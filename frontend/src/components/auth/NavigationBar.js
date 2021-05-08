import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'

export default function NavigationBar() {

    return (
        <Navbar className="container-fluid text-center" collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Navbar.Brand href="/" className="col-sm-1" >BOOKLAB</Navbar.Brand>
            <Navbar.Collapse className="col-sm-11" id="responsive-navbar-nav">
                <Nav className="col-sm-6" >
                    <Nav.Link href="#features">Features</Nav.Link>
                    <Nav.Link href="#credits">Credits</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}