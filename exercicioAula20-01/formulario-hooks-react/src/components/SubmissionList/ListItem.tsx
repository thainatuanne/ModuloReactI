import React from 'react'
import { StyledListItem } from './ListItem-Styles'

interface ListItemProps {
    content: string
}

const ListItem: React.FC<ListItemProps> = ({ content }) => {
    return <StyledListItem>{content}</StyledListItem>
}

export default ListItem
