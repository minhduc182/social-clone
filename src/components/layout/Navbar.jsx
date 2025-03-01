import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FaFacebook, FaSearch, FaHome, FaUserFriends, FaVideo, FaStore, FaGamepad, FaBell, FaCaretDown, FaUserCircle } from 'react-icons/fa';

const NavbarContainer = styled.nav`
  background-color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavbarLeft = styled.div`
  display: flex;
  align-items: center;
`;

const FacebookLogo = styled(Link)`
  color: #1877f2;
  font-size: 40px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;

const SearchContainer = styled.div`
  background-color: #f0f2f5;
  border-radius: 50px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  height: 40px;
  margin-left: 8px;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const SearchIcon = styled.div`
  color: #65676b;
  margin-right: 8px;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transparent;
  font-size: 15px;
  outline: none;
  width: 240px;
`;

const NavbarCenter = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const TabButton = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  min-width: 110px;
  border-radius: 8px;
  color: ${props => props.active ? '#1877f2' : '#65676b'};
  border-bottom: ${props => props.active ? '3px solid #1877f2' : 'none'};
  text-decoration: none;
  
  &:hover {
    background-color: #f0f2f5;
  }
  
  svg {
    font-size: 24px;
  }
  
  @media (max-width: 1100px) {
    min-width: 70px;
  }
`;

const NavbarRight = styled.div`
  display: flex;
  align-items: center;
`;

const IconButton = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #e4e6eb;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #d8dadf;
  }
  
  svg {
    font-size: 20px;
    color: black;
  }
`;

const ProfileButton = styled.div`
  display: flex;
  align-items: center;
  padding: 4px 8px;
  border-radius: 18px;
  margin-left: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #f0f2f5;
  }
  
  svg {
    font-size: 28px;
    color: #65676b;
  }
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeft>
        <FacebookLogo to="/">
          <FaFacebook />
        </FacebookLogo>
        <SearchContainer>
          <SearchIcon>
            <FaSearch />
          </SearchIcon>
          <SearchInput placeholder="Tìm kiếm trên Facebook" />
        </SearchContainer>
      </NavbarLeft>
      
      <NavbarCenter>
        <TabButton to="/" active={true}>
          <FaHome />
        </TabButton>
        <TabButton to="/friends">
          <FaUserFriends />
        </TabButton>
        <TabButton to="/watch">
          <FaVideo />
        </TabButton>
        <TabButton to="/marketplace">
          <FaStore />
        </TabButton>
        <TabButton to="/gaming">
          <FaGamepad />
        </TabButton>
      </NavbarCenter>
      
      <NavbarRight>
        <ProfileButton>
          <FaUserCircle />
        </ProfileButton>
        <IconButton>
          <FaBell />
        </IconButton>
        <IconButton>
          <FaCaretDown />
        </IconButton>
      </NavbarRight>
    </NavbarContainer>
  );
};

export default Navbar;
