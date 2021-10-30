import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../../globalStyles';

export const NavbarContainer = styled(Container)`
  justify-content: space-between;
  background: #fff;
  max-width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
  border-bottom: 1px solid #ff0000;

  ${Container}
`;

export const NavLogo = styled(Link)`
  color: #ff0000;
  justify-content: space-between;
  cursor: pointer;
  text-decoration: none;
  font-size: 2rem;
  display: flex;
  align-items: center;
`;

export const MobileIcon = styled(FaBars)`
  display: none;
  color: #000;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    color: #000;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #000 !important;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  justify-content: space-space-evenly;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({ click }) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  border-bottom: 2px solid transparent;

  &:hover {
    border-bottom: 2px solid #4b59f7;
  }

  @media screen and (max-width: 60px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;

export const NavLinks = styled(Link)`
  color: #ff0000;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: #4b59f7;
      transition: all 0.5s ease;
    }
  }
`;

export const Button = styled.div`
  display: flex;
  border-radius: 2px solid palevioletred;
`;
export const NavBtnLink = styled.div`
  display: flex;
  background-color: white;
  font-weight: bolder;
  border-radius: 15px;
  border: solid red;
  align-items: center;
  justify-content: space-around;
  color: red;
  padding: 4px;

  &:hover {
    color: white;
    background-color: red;
    transition: all 0.5s ease;
  }
`;

export const NavItemBtn = styled.li`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  height: 100px;
`;

// export const NavBtnLink = styled(Link)`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     text-decoration: none;
//     padding: 0px 16px;
//     height: 100%;
//     width: 100%;
//     border: 2px solid ;
//     outline: none;
//     color: red;
// `;

export const ImgWrapper = styled.div`
  display: flex;
  max-width: 555px;
  justify-content: ${({ start }) => (start ? 'flex-start' : 'flex-end')};
`;
