import styled from "styled-components";

export const HeaderStyled = styled.header`
    background-color: ${(props) => props.theme.colorPrimary};
    padding: 24px;

    & > nav {
        ul {
            li {
                list-style-type: none;
                margin: 12px 0;

                a {
                    color: #cccc;
                    text-transform: uppercase;
                    font-weight: bold;
                }

                a:hover {
                    color: #ffffff;
                }
            }
        }
    }
`;