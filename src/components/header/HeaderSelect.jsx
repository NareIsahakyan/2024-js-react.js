import { useState } from "react";
import user from "../../images/user.png";
import creditCard from "../../images/credit-card.png";
import help from "../../images/help.png";
import logOut from "../../images/logout.png";
import { useContext } from "react";
import { LangContext } from "../../contexts/langContext";



const HeaderSelect =()=>{
        const [isButtonClicked, setMyChoise] = useState(false);
const lng = useContext(LangContext);
        const buttonClicked = () => {
            setMyChoise(true);
        };
       
        return (
            
          <div className="selectBar">
    
              <div value="User"   onClick={ buttonClicked}><img src={user} width="14px" height="14px" /><span>Мой профиль</span></div>
              <hr></hr>
              <div value="CreditCard"  onClick={ buttonClicked}><img src={creditCard} width="14px" height="14px" /><span>Пополнить баланс</span></div>
              <hr></hr>
              <div value="Help" onClick={ buttonClicked}><img src={help} width="14px" height="14px" /><span>FAQ</span></div>
              <hr></hr>
              <div value="LogOut"  onClick={ buttonClicked}><img src={logOut} width="14px" height="14px" /><span>Выйти</span></div>
          </div>
    )
}
export default HeaderSelect;