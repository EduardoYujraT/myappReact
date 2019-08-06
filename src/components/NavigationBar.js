import React from 'react';
import {Nav, Navbar, NavItem} from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .navbar {
        background-color: #222;
    }

    .navbar-brand, .navbar-nav .nav-link {
        color: #bbb;
    }

    &:hover {
        color:white;
    }
`;

export const NavigationBar = () => (
    <Styles>
        <Navbar expand="lg">
            <Navbar.Brand href="/">Code Life</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <NavItem><Nav.Link href="/">Home</Nav.Link></NavItem>
                    <NavItem><Nav.Link href="/about">About</Nav.Link></NavItem>
                    <NavItem><Nav.Link href="/contact">Contact</Nav.Link></NavItem>
                </Nav>
            </Navbar.Collapse>

        </Navbar>
    </Styles>
)