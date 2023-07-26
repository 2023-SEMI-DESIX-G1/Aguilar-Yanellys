import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div`
    margin: 3px;
    flex: 1;
    position: relative;
    height: 70vh;
    cursor: pointer;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    ${mobile({ height: "20vh" })}
`;

const Info = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const Title = styled.h1`
    color: black;
    margin-bottom: 10px;
    background-color: white;
    letter-spacing: 1px;
`;

const CategoryItem = ({item, onClick}) => {
  const handleClick = () => {
    onClick(item);
  };

  return (
    <Container onClick={handleClick}>
      <Image src={item.img}/>
      <Info>
        <Title>{item.title}</Title>
      </Info>
    </Container>
  )
}

export default CategoryItem