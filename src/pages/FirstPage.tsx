import { useNavigate } from "react-router-dom";
import { FirstpageComp } from "../components/firstpageComp";
export const Firstpage = () => {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate('/secondPage')
    }
    return (
        <div>
            <FirstpageComp headerText='Hi press the button to switch to the next page!' buttonText='SWITCH' onchange={handleClick}/>
        </div>
    );
};
