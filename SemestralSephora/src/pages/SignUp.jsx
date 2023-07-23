import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100Vh;
    background: linear-gradient(
        rgba(255, 255, 255, 0.5),
        rgba(255, 255, 255, 0.5)
      ),
      url("https://wallpaperset.com/w/full/c/9/c/156441.jpg")
        center;
    background-size: cover;

    display: flex;
    align-items: center;
    justify-content: center;
`;


const Wrapper = styled.div`
    width: 25%;
    padding: 20px;
    background: #ffff;
`;

const Title = styled.h1`
    font-size: 24px;
    font-weigth: 300;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0 0; 
    padding: 10px; 
`;

const Nolink = styled.a`
    margin: 10px 0;
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

    const goToSignIn = () => {
        navigate('/sign-in');
    };
  
    return {
      formData,
      handleChange,
      handleSubmit,
      goToSignIn
    };
};

const SignUp = () => {
    const { formData, handleChange, handleSubmit, goToSignIn} = useForm({
        name: '',
        lastName: '',
        email: '',
        password: '',
    });

    return (
        <Container>
            <Wrapper>
                <Title>Crear cuenta</Title>
                <Form onSubmit={handleSubmit}>
                    <Input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Nombre"></Input>
                    <Input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Apellido"></Input>
                    <Input type="text" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electrónico"></Input>
                    <Input type="text" name="password" value={formData.password} onChange={handleChange} placeholder="Contraseña"></Input>
                    <Nolink onClick={goToSignIn}>¿Cliente existente? <NolinkBtn>Inicia sesión</NolinkBtn></Nolink>
                    <Button>Registrarse</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default SignUp