import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #fff4e9;
    color: black;
    display: flex;
    justify-content: center;
    font-size: 14px;
    font-weight: 500;
    align-items: center;
`;

const Announcement = () => {
    return (
        <Container>
            Opening Day Promo: ¡¡Free Shipping on all orders!! Use code FREESHIP
        </Container>
    )
}

export default Announcement