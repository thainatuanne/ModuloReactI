import styled from "styled-components";

export const TableStyled = styled.table`
  width: 100%;
  min-width: 1000px;
  margin: 20px auto;
  border-collapse: collapse;
  text-align: center;

  th,
  td {
    padding: 15px;
    border: 1px solid #cccccc;
    font-family: "Roboto", sans-serif;
  }

  th {
    color: ${(props) => props.theme.textColor};
    font-weight: bold;
    font-size: 1rem;
  }

  td:first-child,
  th:first-child {
    text-align: left;
    font-weight: bold;
  }

  .success {
    font-size: 0.8rem;
  }

  .error {
    font-size: 0.8rem;
  }
`;
