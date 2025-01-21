import React from 'react'
import ListContainer from './ListContainer'
import ListItem from './ListItem'

interface SubmissionListProps {
    submissions: { firstName: string; lastName: string; email: string }[]
}

const SubmissionList: React.FC<SubmissionListProps> = ({ submissions }) => {
    return (
        <ListContainer>
            <h2>Lista de Envios</h2>
            {submissions.map((submission, index) => (
                <ListItem
                    key={index}
                    content={`${submission.firstName} ${submission.lastName} (${submission.email})`}
                />
            ))}
        </ListContainer>
    )
}

export default SubmissionList
