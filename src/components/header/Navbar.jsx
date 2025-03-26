import {tr} from "../../utils/translate";
import {LangContext} from "../../contexts/LangContext";
import { useContext} from "react";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    // const {lang} = useContext(LangContext);
    const {t} = useTranslation();
    return (

        <div className="navbar">
            <div className="navigation1">{t("howToUse")}</div>
            <div className="navigation1">{t("myEntries")}</div>
            <div className="navigation1">{t("makeAnAppointmentWithADoctor")}</div>
        </div>

    )
}
export default Navbar;