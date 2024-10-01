import { InputProps } from "@/types/components/Input.types";
import Input from "./style";

const InputComponent = ({ id, type, value, onChange, disabled, required, placeholder, background, border, color }: InputProps) => {
    return (
        <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            placeholder={placeholder}
            background={background} // Pasamos las nuevas props
            border={border}
            color={color}
            className="input"
        />
    );
};

export default InputComponent;
