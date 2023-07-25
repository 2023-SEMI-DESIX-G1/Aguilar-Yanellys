import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Newsletter from "../components/Newsletter";
import Navbar from "../components/Navbar";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
`;

const Brand = styled.h2`
  font-weight: 100;
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Desc = styled.p`
  margin: 20px 0px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
  justify-content: left;
  margin: 5px 0px;

`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
  margin-right: 20px;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  display: flex;
  cursor: pointer;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid black;
  background-color: white;
  cursor: pointer;
  font-weight: 500;

  &:hover{
      background-color: #f8f4f4;
  }
`;

const Product = () => {
  return (
    <Container>
      <Navbar />
      <Announcement />
      <Wrapper>
        <ImgContainer>
          <Image src="https://www.sephora.com/productimages/sku/s2518959-main-zoom.jpg?imwidth=612" />
        </ImgContainer>
        <InfoContainer>
          <Brand>Rare Beauty by Selena Gomez</Brand>
          <Title>Soft Pinch Liquid Blush</Title>
          <Desc>
            A weightless, long-lasting liquid blush that blends and builds
            beautifully for a soft, healthy flush. Available in matte and dewy
            finishes.
          </Desc>
          <Price>$23.00</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="#c3574e" />
              <FilterColor color="#de7971" />
              <FilterColor color="#e09d94" />
              <FilterColor color="#ca4e63" />
              <FilterColor color="#c5606e" />
              <FilterColor color="#bb001a" />
              <FilterColor color="#813644" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>Mini Size</FilterSizeOption>
                <FilterSizeOption>Full Size</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Footer />
      <Newsletter />
    </Container>
  );
};

export default Product;