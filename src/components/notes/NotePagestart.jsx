
import { useTranslation } from "react-i18next";
import NoteProfile from "./NoteProfile";
const NotePagestart =()=>{
    const { t } = useTranslation();
    return(
    <div className="aboutConsultations">
                <div className="about">
                    <div className="aboutHeader">
                        <div className="orangeStyle"></div>
                        <span className="aboutHeader_"><b>{t("onlineConsultationsFrom")}</b></span>
                        <span className="aboutHeader_1"><b>{t("SpecialistDoctors")}</b></span>
                    </div>
                    <div>

                        <span className="texts">{t("consult")}<b>{t("Now")}</b>{t("OrBy")}<b>{t("Appointment")}</b><br />
                            {t("From...")}<br />{t("availableIn")}<span className="aquaStyle"><b>App Store </b></span>{t("And..")}
                            <span className="aquaStyle"><b>Google Play. </b></span></span></div>

                    <div className="notesButtons">
                        <div><input type="button" value={t("signUp")} id="noteButton"></input></div>
                        <div><input type="button" value={t("howDoesThisWork")} id="howItWork"></input></div>
                    </div>
                </div>
                <NoteProfile/>
            </div>
    )
}
export default NotePagestart;