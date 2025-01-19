import { HeaderContainer, StyledNavLink } from './HeaderStyled'

const Header: React.FC = () => {
    return (
        <HeaderContainer>
            <StyledNavLink to="/" end>
                Home
            </StyledNavLink>
            <StyledNavLink to="/about">Sobre</StyledNavLink>
            <StyledNavLink to="/contact">Contato</StyledNavLink>
        </HeaderContainer>
    )
}

export default Header
