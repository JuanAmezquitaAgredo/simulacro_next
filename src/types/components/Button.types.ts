// types/components/Button.types.ts

export interface ButtonProps {
    label: string;
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void; // Cambia aquí
    disabled?: boolean;
    background?: string;
}
