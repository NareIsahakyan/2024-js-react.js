import vector from "../../images/Vector.png";
import { useState } from "react";
import HeaderSelect from "./HeaderSelect";

const Avatar = () => {
    const myElement =<HeaderSelect />;
    const [conteiner, setButtonDisabled] = useState(myElement);
    const accountName = "Артем Свиридов";
    const avatar = accountName[0];
  
    const enableButton = () => {
        setButtonDisabled(true);
       
    };

    const handleClick = () => {
       return myElement;
    };
    
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName">{accountName}</div>
            <div className="vectorToUnder">
               <button value="conteiner" onClick={enableButton }><img src={vector} width="11px" height="6px" /></button> 
            </div>
        </>
    )
}
export default Avatar;