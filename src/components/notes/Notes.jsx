
import objectProfile from "../../images/OBJECTS.png";
import Registration from "./Registration";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";
import NotePagestart from "./NotePagestart";

const Notes = () => {
    // const { lang } = useContext(LangContext);
    const { t } = useTranslation();
    window.scrollTo(0, 0);
    return (
        <div className="notes">
            <NotePagestart />
            <div className="toNotes">
                <img src={objectProfile} width="185.12px" height="315.73px" className="profile5" />
                <div className="ToNotesText">
                    <div className="toNotesHeadStyle">
                        <div className="orangeStyle2"></div>
                        <h1 className="toNotesHead">{t("makeAnAppointmentWithADoctor")}</h1>
                    </div>
                    <div><span className="toNodestextPart">{t("moreDoctorsAndMoreDifferentSpecializations")}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{t("appointmentAtATime...")}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{t("doctorsWithExperience...")}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{t("weWillClearlyExplain...")}</span></div>
                    <div><input type="button" value={t("signUp")} id="tonoteButton"></input></div>
                </div>
            </div>
            <div><input type="button" value={t("myEntries")} id="myNotes"></input></div>
            <Registration />
        </div>
    )
}
export default Notes;