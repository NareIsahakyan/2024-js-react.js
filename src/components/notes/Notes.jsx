import profole1 from "../../images/depositphotos_428807632 2.png";
import profole2 from "../../images/Mask Group.png";
import profole3 from "../../images/Rectangle 142.png";
import profole4 from "../../images/Rectangle 143.png";
import objectProfile from "../../images/OBJECTS.png";
import underline1 from "../../images/Rectangle 23.png";
import underline2 from "../../images/Rectangle 24.png";
import underline3 from "../../images/Rectangle 25.png";
import Registration from "./Registration";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";

const Notes = () => {
    const { lang } = useContext(LangContext);
    return (
        <div className="notes">

            <div className="aboutConsultations">
                <div className="about">
                    <div className="aboutHeader">
                        <span><b>{tr("onlineConsultationsFrom", lang)}</b></span>
                        <span><b>{tr("SpecialistDoctors", lang)}</b></span>
                    </div>
                    {/* <div className="orangeStyle"><img src={underline1} width="224px" height="19px" /></div> */}
                    <div><span className="aboutText">{tr("consult", lang)} <span><b>{tr("Now", lang)}</b></span>{tr("OrBy", lang)}<b>{tr("Appointment", lang)}</b><br />
                        {tr("From...", lang)}<br />
                        {tr("availableIn", lang)}<span className="aquaStyle"><b>App Store </b></span>{tr("And..", lang)}<span className="aquaStyle"><b>Google Play </b></span></span></div>
                    {/* <div className="orangeStyle1"><img src={underline2} width="66px" height="9px" /></div>
                    <div className="orangeStyle2"><img src={underline3} width="243px" height="9px" /></div> */}
                    <div className="notesButtons">
                        <div><input type="button" value={tr("signUp", lang)} id="noteButton"></input></div>
                        <div><input type="button" value={tr("howDoesThisWork", lang)} id="howItWork"></input></div>
                    </div>
                </div>

                <div className="nodesProfile">
                    <img src={profole4} width="639.92px" height="378px" className="profile4" />
                    <img src={profole3} width="697.48px" height="378px" className="profile3" />
                    <img src={profole1} width="698px" height="506px" className="profile1" />
                    <img src={profole2} width="697.48px" height="521.78px" className="profile2" />
                </div>
            </div>

            <div className="toNotes">
                <img src={objectProfile} width="185.12px" height="315.73px" className="profile5" />
                <div className="ToNotesText">
                    <div><h1 className="toNotesHead">{tr("makeAnAppointmentWithADoctor", lang)}</h1></div>
                    <div><span className="toNodestextPart">{tr("moreDoctorsAndMoreDifferentSpecializations", lang)}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{tr("appointmentAtATime...", lang)}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{tr("doctorsWithExperience...", lang)}</span></div>
                    <div className="line"><div className="orangeBoll"></div><span className="toNodestextPart">{tr("weWillClearlyExplain...", lang)}</span></div>
                    <div><input type="button" value={tr("signUp", lang)} id="tonoteButton"></input></div>
                </div>
            </div>
            <div><input type="button" value={tr("myEntries", lang)} id="myNotes"></input></div>
            <Registration />
        </div>
    )
}
export default Notes;