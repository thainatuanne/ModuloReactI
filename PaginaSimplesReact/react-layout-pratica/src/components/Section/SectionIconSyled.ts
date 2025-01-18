import styled from 'styled-components'

export const SectionIconStyled = styled.div`
    background: ${(props) => props.theme.secondaryBackgroundColor};
    display: flex;
    width: 100%;
    min-height: 300px;

    .icons-container {
        display: flex;
        justify-content: space-around;
        align-items: center;
        padding: ${(props) => props.theme.paddingDefault}px;
        gap: ${(props) => props.theme.paddingDefault}px;
    }

    div {
        text-align: center;
        flex: 1;
    }

    h3 {
        font-size: 1.2rem;
        margin-top: 0.5rem;
        color: ${(props) => props.theme.textColor};
    }

    p {
        margin-top: 0.5rem;
        font-size: 0.9rem;
        color: ${(props) => props.theme.textColor};
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 3rem;
        color: ${(props) => props.theme.colorPrimary};
    }
`
