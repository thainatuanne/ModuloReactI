import styled from 'styled-components'

interface SectionStyledProps {
    $reverse?: boolean
    $gap: number
    $textAlign: 'left' | 'center' | 'right'
    $maxContainerWidth?: number
}

export const SectionStyled = styled.section<SectionStyledProps>`
    display: flex;
    width: 100%;
    flex-direction: ${(props) => (props.$reverse ? 'row-reverse' : 'row')};
    align-items: center;
    justify-content: space-between;
    gap: ${(props) => props.$gap}px;
    background-color: ${(props) => props.theme.backgroundColor};

    img {
        flex: 1;
        max-width: 800px;
        height: 500px;
        object-fit: cover;
    }

    .container-card,
    .container-card2,
    .container-card3 {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        max-width: ${(props) => props.$maxContainerWidth && 500}px;
        height: 100%;
        padding: ${(props) => props.theme.paddingDefault * 3}px;
        box-sizing: border-box;
    }

    h3 {
        font-size: 1.8rem;
        color: ${(props) => props.theme.textColor};
        margin-bottom: ${(props) => props.theme.paddingDefault / 2}px;
        text-align: ${(props) => props.$textAlign};
    }

    p {
        font-size: 1rem;
        color: ${(props) => props.theme.textColor};
        line-height: 1.8;
        text-align: justify;
        margin: 0;
    }
`