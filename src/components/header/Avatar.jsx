import vector from "../../images/Vector.png";
import { useCallback, useState } from "react";
import HeaderSelect from "./HeaderSelect";

const Avatar = () => {
    const accountName = "Артем Свиридов";
    const avatar = accountName[0];
   const [isOpened, setIsOpened] = useState(false)

    const clickhandler= useCallback(() => {
        setIsOpened((prev)=> !prev);
    },[]);

    // const menu = useMemo(()=>{
    //     if(isOpened){
    //         return <HeaderSelect />;
    //     }
    // })
    
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName">{accountName}</div>
            <div className="vectorToUnder">
               <button value="conteiner" onClick={clickhandler}><img src={vector} width="11px" height="6px" alt ="V"/></button> 
               {isOpened && HeaderSelect}
               {/* {isOpened ? <HeaderSelect/> : null} */}
               {/* {menu} */}
            </div>
        </>
    )
}
export default Avatar;