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
        enableButton;
       return myElement;
    };
    
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName">{accountName}</div>
            <div className="vectorToUnder">
               <button value="conteiner" onClick={handleClick}><img src={vector} width="11px" height="6px" alt ="V"/></button> 
            </div>
        </>
    )
}
export default Avatar;