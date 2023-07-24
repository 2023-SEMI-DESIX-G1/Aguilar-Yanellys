import styled from "styled-components"
import React from 'react'
import { popularProducts } from "../data";
import Product from "./Product";
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

`;

const Products = () => {
  console.log('PRODUCT LIST: ', popularProducts);

  const navigate = useNavigate();

  const goToShoppingCart = () => {
    navigate('/shopping-cart');
  };

  const handleClick = (item) => {
    let product = item;
    product ? goToShoppingCart() : console.log('PRODUCT UNDEFINED');
    console.log('Product info: ', product);
  };

  return (
    <Container>
      {popularProducts.map((item)=> (
        <Product item={item} key={item.id} onClick={handleClick}/>
      ))}
    </Container>
  )
}

export default Products