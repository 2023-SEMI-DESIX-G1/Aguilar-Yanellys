import React from 'react'
import {categories} from "../data"
import CategoryItem from './CategoryItem';
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  const navigate = useNavigate();

  const goToCollection = () => {
    navigate('/collection');
  };

  const handleItemClick = (item) => {
    let categorie = item;
    categorie ? (goToCollection()) : console.log('NO TIENE DATA')
    console.log('Categorie info: ', categorie);
  }; 

  return (
    <Container>
      {categories.map(item=>(
        <CategoryItem item={item} key={item.id} onClick={handleItemClick} />
      ))}
    </Container>
  )
}

export default Categories