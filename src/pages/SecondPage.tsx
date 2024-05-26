import { FirstpageComp } from "../components/firstpageComp";
import { useNavigate } from "react-router-dom";
export const SecondPage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/thirdPage')
    }
    return (
            <FirstpageComp headerText='Теперь на русском я же русский, нажми на кнопку' buttonText='Чтобы продолжить' onchange={handleClick}/>
    );
};
