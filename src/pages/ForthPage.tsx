import { FirstpageComp } from "../components/firstpageComp";
import { useNavigate } from "react-router-dom";
 export const ForthPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/lastPage')
    }
    return (
        <FirstpageComp headerText='Вы большой молодец и по коню скачете очень классно если хотите услышать еще один комплимент нажмите на кнопку)' buttonText='Хочу комплимент' onchange={handleClick}/>
    );
};
