import styled from 'styled-components'

export const FloatButtonStyled = styled.a`
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
    text-decoration: none;

    & > img {
        width: 60px;
        height: 60px;
    }
`
