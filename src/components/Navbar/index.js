import React from 'react';
import {Nav, NavLogoContainer} from './NavbarElements';
import Logo from '../Logo';

const Navbar = ({}) => {
    
    return (
        <>
             <Nav >
                    <NavLogoContainer to="/">
                        <Logo inline alt="" />
                    </NavLogoContainer>                
            </Nav>
        </>
    );
}

export default Navbar;