import styled from 'styled-components'

const Container = styled.div`
    height: 30px;
    background-color: #f5d5b8;
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
            ¡¡Envio gratis en todas las ordenes!! Usa el código FREESHIP
        </Container>
    )
}

export default Announcement