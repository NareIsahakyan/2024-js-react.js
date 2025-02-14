import { useContext, useState } from "react";
import user from "../../images/user.png";
import creditCard from "../../images/credit-card.png";
import help from "../../images/help.png";
import logOut from "../../images/logout.png";
import {tr} from "../../utils/translate";
import {LangContext} from "../../contexts/LangContext";


const HeaderSelect =()=>{
    const {lang} = useContext(LangContext);
        const [isButtonClicked, setMyChoise] = useState(false);

        const buttonClicked = () => {
            setMyChoise(true);
        };
       
        return (
            
          <div className="selectBar">
    
              <div value="User"   onClick={ buttonClicked}><img src={user} width="14px" height="14px" /><span>{tr("myProfile",lang)}</span></div>
              <hr></hr>
              <div value="CreditCard"  onClick={ buttonClicked}><img src={creditCard} width="14px" height="14px" /><span>{tr("topUpBalance",lang)}</span></div>
              <hr></hr>
              <div value="Help" onClick={ buttonClicked}><img src={help} width="14px" height="14px" /><span>FAQ</span></div>
              <hr></hr>
              <div value="LogOut"  onClick={ buttonClicked}><img src={logOut} width="14px" height="14px" /><span>{tr("logOut",lang)}</span></div>
          </div>
    )
}
export default HeaderSelect;