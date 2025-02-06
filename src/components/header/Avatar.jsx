import vector from "../../images/Vector.png";
import { useCallback, useState } from "react";
import HeaderSelect from "./HeaderSelect";

const Avatar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const accountName = "Артем Свиридов";
    const avatar = accountName[0];
  
    const clickHandler = useCallback(() => {
      setIsOpened((prev)=> !prev);

    },[]);
    
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName">{accountName}</div>
            <div className="vectorToUnder">
               <button value="conteiner" onClick={clickHandler}><img src={vector} width="11px" height="6px" /></button> 
               {isOpened && <HeaderSelect/>}
            </div>
        </>
    )
}
export default Avatar;