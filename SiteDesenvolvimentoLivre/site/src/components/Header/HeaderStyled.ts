import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
    background-color: ${(props) => props.theme.primary};
    padding: ${(props) => props.theme.padding}px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: ${(props) => props.theme.fontSizes.medium};
    border-radius: 20px;
`

export const StyledNavLink = styled(NavLink)`
    color: white;
    text-decoration: none;
    font-size: ${(props) => props.theme.fontSizes.medium};
    font-family: 'Playwrite VN', sans-serif;

    &.active {
        font-weight: bold;
        border-bottom: 2px solid ${(props) => props.theme.accent};
    }

    &:hover {
        color: ${(props) => props.theme.accent};
    }
`
