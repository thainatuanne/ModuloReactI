/* 

Componentes de estilos é diferente !== de componentes funcionais

smart Component = contém regra de negócio
dump Component = não contém refra de negócio, apenas HTML e CSS

 */

import styled from 'styled-components';



export const ButtonStyled = styled.div`
    margin: 24px;
    
    button {
    padding: 12px 24px;
    background-color: green;
    border: none;
    border-radius: 12px;
    }

    span {
        font-size: 20px;
    }
`;
