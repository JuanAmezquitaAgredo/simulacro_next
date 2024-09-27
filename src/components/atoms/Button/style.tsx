import styled from "styled-components";

// Añade `background` como prop
const Button = styled.button<{ background?: string }>`
    background-color: ${({ background }) => background || "blue"};  // Valor por defecto si no se pasa la prop
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    
    &:disabled {
        background-color: gray;
        cursor: not-allowed;
    }
`;

export default Button;
