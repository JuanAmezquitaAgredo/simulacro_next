import ButtonComponent from "@/components/atoms/Button/Button";
import InputComponent from "@/components/atoms/Input/Input";

const FormLoginComponent = ({}) => {

    const handleClick = () => {
        // TODO: Enviar los datos al backend
        console.log("Enviando datos...");
    }

    const handleChange = () => {
        console.log("escuchado");
    }
    return(
        <form>
            <InputComponent id="form_input_login" type="email" value="" onChange={handleChange}/>
            <InputComponent id="form_input_password" type="password" value="" onChange={handleChange}/>
            <ButtonComponent onClick={handleClick} label="Enviar"></ButtonComponent>
        </form>
    )
};

export default FormLoginComponent;