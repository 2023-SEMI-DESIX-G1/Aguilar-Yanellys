import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined, PersonOutlined } from '@material-ui/icons';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';


//Styles for Navbar
const Container = styled.div`
  height: 60px;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({ padding: "10px 0px" })}
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
  ${mobile({ display: "none" })}
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
  ${mobile({ width: "50px" })}
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
  ${mobile({ fontSize: "24px" })}
`;

//Right Elements of Navbar
const Right = styled.div`
  flex: 1;
  display: flex;
  align-content: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}
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
          {/* <Language>EN</Language> */}
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
