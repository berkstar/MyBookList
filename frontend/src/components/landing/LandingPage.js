import React from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap'
import Showcase from 'components/landing/Showcase';
import { Container } from '@material-ui/core';
import Footer from './Footer';
import About from './About';

function LandingPage() {

    return (
        <div>
            <Navbar className="container-fluid text-center" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home" className="col-sm-1" >BOOKLAB</Navbar.Brand>
                <Navbar.Collapse className="col-sm-11" id="responsive-navbar-nav">
                    <Nav className="col-sm-6" >
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#credits">Credits</Nav.Link>
                    </Nav>
                    <Nav className="col-sm-6 justify-content-end" >
                        <Button className="mx-2" variant="outline-info" href="/login">Login</Button>
                        <Button className="mx-2" variant="outline-info" href="/register">SignUp</Button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <Container>
                <Showcase />
            </Container>
            <About />
            <Footer />
        </div>

    );
}

export default LandingPage;