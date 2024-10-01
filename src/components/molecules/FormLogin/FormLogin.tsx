import { useState } from "react";
import ButtonComponent from "@/components/atoms/Button/Button";
import InputComponent from "@/components/atoms/Input/Input";

interface FormLoginComponentProps {
    onSignIn: (email: string, password: string) => void;
}

const FormLoginComponent = ({ onSignIn }: FormLoginComponentProps) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleClick = (e: React.FormEvent) => {
        e.preventDefault();
        onSignIn(email, password); // Llama a la función de inicio de sesión
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value);
    };

    return (
        <form onSubmit={handleClick}>
            <InputComponent
                id="form_input_login"
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Correo electrónico"
                required
            />
            <InputComponent
                id="form_input_password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                placeholder="Contraseña"
                required
            />
            <ButtonComponent onClick={handleClick} label="Enviar" />
        </form>
    );
};

export default FormLoginComponent;
