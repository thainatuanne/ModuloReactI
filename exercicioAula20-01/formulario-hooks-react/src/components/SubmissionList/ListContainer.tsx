import React from 'react'
import { StyledListContainer } from './ListContainer-Styles'

const ListContainer: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return <StyledListContainer>{children}</StyledListContainer>
}

export default ListContainer
