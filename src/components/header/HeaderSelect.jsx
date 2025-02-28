import {  useState } from "react";
import user from "../../images/user.png";
import creditCard from "../../images/credit-card.png";
import help from "../../images/help.png";
import logOut from "../../images/logout.png";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const HeaderSelect = () => {
    // const {lang} = useContext(LangContext);{tr("logOut", lang)}
    const [isButtonClicked, setMyChoise] = useState(false);
    const { t } = useTranslation();
    const buttonClicked = () => {
        setMyChoise(true);
    };

    return (

        <div className="selectBar">

            <div value="User" onClick={buttonClicked}><img src={user} width="14px" height="14px" /><span><Link to={`/patientsProfile`}>{t("myProfile")}</Link></span></div>
            <hr></hr>
            <div value="CreditCard" onClick={buttonClicked}><img src={creditCard} width="14px" height="14px" /><span>{t("topUpBalance")}</span></div>
            <hr></hr>
            <div value="Help" onClick={buttonClicked}><img src={help} width="14px" height="14px" /><span>FAQ</span></div>
            <hr></hr>
            <div value="LogOut" onClick={buttonClicked}><img src={logOut} width="14px" height="14px" /><span><Link to={`/`}>{t("logOut")}</Link></span></div>
        </div>
    )
}
export default HeaderSelect;