import styled from 'styled-components';

export const HeaderStyled = styled.header`
    position: relative;
    width: 100%;
    height: 500px;

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
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
        font-size: 2.5rem;
        color: ${(props) => props.theme.colorPrimary};
        -webkit-background-clip: text;
        background-clip: text;
    }
`;
