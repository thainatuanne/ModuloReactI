import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: relative;
    width: 100%; /* Garante que o header ocupe 100% da largura */
    height: 300px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%; /* A imagem ocupa 100% da largura do header */
        height: 100%; /* A imagem ocupa 100% da altura do header */
        object-fit: cover; /* Ajusta a imagem para cobrir o espaço */
        z-index: -1; 
        opacity: 0.5;
    }

    div {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        padding: ${(props) => props.theme.paddingDefault}px;
    }

    h1 {
        font-size: 2rem;
        margin: 0;
        color: ${(props) => props.theme.textColor};
    }
`;
