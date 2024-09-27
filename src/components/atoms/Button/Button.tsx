import { ButtonProps } from "@/types/components/Button.types";
import Button from "./style";

const ButtonComponent = ({ label, onClick, disabled, background }: ButtonProps) => {
    return (
        <Button disabled={disabled} onClick={onClick} background={background}>
            {label}
        </Button>
    );
};

export default ButtonComponent;
