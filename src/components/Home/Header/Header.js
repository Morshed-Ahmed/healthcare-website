import React from 'react';
import { Container, Form, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import { HashLink } from 'react-router-hash-link';


const Header = () => {

    const { handleLogout, user } = useAuth();
    return (
        <div>
            <Navbar fixed="top" bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><img className="img-fluid w-75" src={'http://webstrot.com/html/deepmind/deepmind/images/index_2_logo.png'} alt="" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link as={HashLink} to="/home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/news">Update News</Nav.Link>
                            <Nav.Link as={HashLink} to="/blog">Blog</Nav.Link>


                        </Nav>
                        <Form className="d-flex">
                            <Nav.Link className="text-dark" as={HashLink} to="/register">Register</Nav.Link>

                            {user.email ? <Nav.Link className="text-dark" onClick={handleLogout} as={Link} to="/home">Logout</Nav.Link>
                                :
                                <Nav.Link className="text-dark" as={Link} to="/login">Login</Nav.Link>}
                            <Nav.Link className="me-5 text-dark" as={Link} to="/home">User: {user.email}</Nav.Link>
                        </Form>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;