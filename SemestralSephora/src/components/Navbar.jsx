import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, PersonOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';


//Styles for Navbar
const Container = styled.div`
  height: 60px;
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
//Left Elements of Navbar
const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 25px;
  background-color: #dbdbdb;
`;

const Input = styled.input`
  border: none;
  background-color: transparent;
  padding: 5px;
`;

//Center Elements of Navbar
const Center = styled.div`
  flex: 1;
  text-align: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  letter-spacing: 3px;
  cursor: pointer;
`;

//Right Elements of Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: flex-end;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

function Navbar() {
  const navigate = useNavigate();

  const goToSignIn = () => {
    navigate('/sign-in');
  };

  const goToShoppingCart = () => {
    navigate('/shopping-cart');
  };

  const goToHome = () => {
    navigate('/');
  };

  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo onClick={goToHome}>SEPHORA</Logo>
        </Center>
        <Right>
        <MenuItem>
            <Badge onClick={goToSignIn}>
              <PersonOutlined />
            </Badge>
          </MenuItem>
          <MenuItem>
            <Badge badgeContent={4} onClick={goToShoppingCart} color="error">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
}

export default Navbar;
