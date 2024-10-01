export interface InputProps {
    id: string;
    type: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    disabled?: boolean;
    required?: boolean;
    placeholder?: string;  // Agregar el placeholder opcional
    background?: string;   // Color de fondo opcional
    border?: string;       // Color del borde opcional
    color?: string;        // Color del texto opcional
  }
  