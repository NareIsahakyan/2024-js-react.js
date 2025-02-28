import { useActionState, useContext } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NoteProfile from "../notes/NoteProfile";
import Ru_ro_vectors from "../header/ru-ro-vectors";
import aloDocLogo from "../../images/alo-doc.png";
import Navbar from "../header/Navbar";
import {patientsAction} from "../../store/actions";


const GetMe = () => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const [data, action, isProgress] = useActionState(async (data, state) => {
        let firstName = state.get("firstName");
        let lastName = state.get("lastName");
        let age = state.get("age");
        if (firstName && lastName && age) {
            if (!firstName && !lastName && !age) {
                return { data: {}, error: "Information about yourself not found" }
            } else {
                dispatch(patientsAction.gettingMe(firstName,lastName,age))
                console.log( firstName,lastName,age)
            }
        }
    }, { data: {}, error: null });
   
    window.scrollTo(0, 0);
    return (
        <>
        <Ru_ro_vectors/>
        <div className="header1">
        <img src={aloDocLogo} className="aloDocimg" alt="aloDoc" /> 
        <Navbar/>        
        </div>
            <div className="pageGetMe">
                <div className="about">
                    <div className="aboutHeader">
                        <div className="orangeStyle"></div>
                        <span className="aboutHeader_"><b>{t("onlineConsultationsFrom")}</b></span>
                        <span className="aboutHeader_1"><b>{t("SpecialistDoctors")}</b></span>
                    </div>
                    <div>
                        <span className="texts">{t("consult")}<b>{t("Now")}</b>{t("OrBy")}<b>{t("Appointment")}</b><br />
                            {t("From...")}<br />{t("availableIn")}<span className="aquaStyle"><b>App Store </b></span>{t("And..")}
                            <span className="aquaStyle"><b>Google Play. </b></span></span>
                    </div>
                    <div className="getMe">
                        <h1 className="h1getme">Please submit information about yourself?</h1>
                        { <form action={action}>
                            <input type="text" name="firstName" placeholder="Name"   /><br />
                            <input type="text" name="LastName" placeholder="Surname"  /><br />
                            <input type="text" name="age" placeholder="Age"/><br />
                            <Link to={`/notes`}><button type="submit" >Next</button></Link>
                        </form>}
                    </div>
                </div>
                <NoteProfile />
            </div>

        </>
    )
}
export default GetMe;