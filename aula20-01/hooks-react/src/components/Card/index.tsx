import { CardContainer, CardDescription, CardTitle } from '../Card/styles'

interface CardProps {
    title: string
    description: string
}

export function Card({ title, description }: CardProps) {
    return (
        <CardContainer>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
        </CardContainer>
    )
}
