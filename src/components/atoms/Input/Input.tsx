import { InputProps } from "@/types/components/Input.types"
import Input from "./style";

const InputComponent = ({id, type, value, onChange, disabled, required }: InputProps) => {
    return (
        <Input
            id={id}
            type={type}
            value={value}
            onChange={onChange}
            disabled={disabled}
            required={required}
            className="input"
        />
    );
};