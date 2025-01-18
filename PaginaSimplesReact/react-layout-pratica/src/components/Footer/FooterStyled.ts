import styled from 'styled-components'

export const FooterStyled = styled.footer`
    background-color: ${(props) => props.theme.backgroundColor};
    color: ${(props) => props.theme.textColor};
    position: relative;
    width: 100%;
    min-width: 1000px;

    .container {
        position: relative;
        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
        height: 400px;

        h3 {
            position: absolute;
            font-size: 2rem;
            color: ${(props) => props.theme.colorPrimary};
            z-index: 2;
            text-align: center;
        }
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 400px;
        object-fit: cover;
        z-index: 1;
        opacity: 0.5;
    }

    .navbar {
        margin-top: ${(props) => props.theme.paddingDefault}px;
        display: flex;
        justify-content: flex-start;
        padding-left: ${(props) => props.theme.paddingDefault * 2}px;

        nav ul {
            display: flex;
            gap: 15px;
            list-style: none;
            padding: 0;
            margin: 0;

            li a {
                color: ${(props) => props.theme.colorPrimary};
                text-decoration: none;
                font-size: 1rem;
            }

            li a:hover {
                color: ${(props) => props.theme.highlightColor};
            }
        }
    }

    .copyright {
        margin-top: ${(props) => props.theme.paddingDefault}px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 ${(props) => props.theme.paddingDefault * 2}px;

        p {
            font-size: 0.9rem;
            color: ${(props) => props.theme.textColor};
        }

        .icons {
            display: flex;
            gap: 15px;

            span {
                font-size: 1.5rem;
                color: ${(props) => props.theme.colorPrimary};
                cursor: pointer;
            }

            span:hover {
                color: ${(props) => props.theme.highlightColor};
            }
        }
    }
`
