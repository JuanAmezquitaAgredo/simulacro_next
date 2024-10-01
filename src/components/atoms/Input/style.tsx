import styled from "styled-components";

// Añadimos las props para fondo, borde y color
const Input = styled.input<{ background?: string; border?: string; color?: string }>`
  width: 100%;
  padding: 10px;
  border: ${({ border }) => border || "1px solid #ccc"};  // Border con un valor por defecto
  border-radius: 4px;
  outline: none;
  background-color: ${({ background }) => background || "white"}; // Fondo con valor por defecto
  color: ${({ color }) => color || "black"};  // Color del texto con valor por defecto

  &:focus {
    border-color: #0070f3; // Cambia el borde cuando está enfocado
    box-shadow: 0 0 5px rgba(0, 112, 243, 0.5);
  }

  &:disabled {
    background-color: #f0f0f0;
    cursor: not-allowed;
  }
`;

export default Input;
