import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
    width: 100vw;
    height: 100Vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://cdn.wallpapersafari.com/29/69/NcUxoY.jpg")
        center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

const Wrapper = styled.div`
    width: 25%;
    padding: 30px 20px;
    background: #ffff;
    border-radius: 5px
    ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    margin: 10px 0;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0; 
    padding: 10px; 
`;

const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    cursor: pointer;
`;

const Nolink = styled.a`
    margin: 5px 0;
    font-size: 12px;
    cursor: pointer;
`;

const NolinkBtn = styled.a`
    color: #bda6a6;
`;

const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background: #d6bcbc;
    color: white;
    cursor: pointer;
    margin: 10px 0;
`;

const useForm = (initialState) => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(initialState);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      navigate('/');
    };

    const goToSignUp = () => {
        navigate('/sign-up');
    };
  
    return {
      formData,
      handleChange,
      handleSubmit,
      goToSignUp
    };
};


const SignIn = () => {
    const { formData, handleChange, handleSubmit, goToSignUp} = useForm({
        email: '',
        password: '',
    });

    return (
        <Container>
            <Wrapper>
                <Title>Log in to your Account</Title>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Email"></Input>
                    <Input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Password"></Input>
                    <Link>¿Forgot your Password?</Link>
                    <Nolink onClick={goToSignUp}>Don't have an Account? <NolinkBtn>Sign In</NolinkBtn></Nolink>
                    <Button type="submit">Log In</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default SignIn