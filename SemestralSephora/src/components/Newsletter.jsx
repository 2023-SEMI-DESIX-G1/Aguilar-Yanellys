import styled from "styled-components";
import { SendRounded } from "@material-ui/icons";
import React from "react";

const Container = styled.div`
  height: 30vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`;


const Title = styled.div`
  font-size: 40px;
  margin-bottom: 20px;
`;


const Desc = styled.div`
  font-size: 18px;
  font-weight: 300;
  margin-bottom: 20px;
`;


const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
`;


const Input = styled.input`
  flex: 8;
  border: none;
  padding-left: 20px;
`;


const Button = styled.button`
  width: 40px;
  border: none;
  background-color: black;
  color: white;
  cursor: pointer;
  
`;


const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Desc>Get the latest updates from your favorite products and brands.</Desc>
      <InputContainer>
        <Input placeholder="Your Email Here"/>
        <Button>
          <SendRounded/>
        </Button>
      </InputContainer>
    </Container>
  );
}

export default Newsletter