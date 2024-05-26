import { FirstpageComp } from "../components/firstpageComp";
import { useNavigate } from "react-router-dom";
 export const ThirdPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/forthPage')
    }
    return (
        <FirstpageComp headerText='Если вас зовут Юнус то нажмите кнопку' buttonText='Я Юнус' onchange={handleClick}/>
    );
};
