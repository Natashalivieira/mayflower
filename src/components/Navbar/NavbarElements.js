import styled from 'styled-components';
import {Link as LinkScroll} from 'react-scroll';

export const Nav = styled.div`
background: ${({scrollNav}) => (scrollNav ? 'rgba(55, 55, 55, 0.80)' : 'transparent')};
height: 60px;
/* margin-top: -60px; */
padding: 0 2em;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 1rem;
position: sticky;
top: 0;
z-index: 10;
transition: 0.8s all ease;

@media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavLogoContainer = styled.div``;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #e65408;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    margin-right: -22px;
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavItems = styled.ul`
    height: 60px;
`;

export const NavLinks = styled(LinkScroll)`
    color: #e65408;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    &.active {
        border-bottom: 2px solid #e65408;
    }
    &:hover {
        border-bottom: 2px solid #e65408;
    }
`;
