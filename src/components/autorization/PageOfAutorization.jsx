import { useActionState, useContext, useState } from "react";
import { login, verify } from "../../services/api/auth";
import AuthContext from "../../context/authContext";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NoteProfile from "../notes/NoteProfile";
import Ru_ro_vectors from "../header/ru-ro-vectors";
import aloDocLogo from "../../images/alo-doc.png";
import Navbar from "../header/Navbar";


const PageOfAutorization = () => {
    const { t } = useTranslation();
    const { login: contextLogin, isAutorization, logout } = useContext(AuthContext)
    const [isShow, setIsShow] = useState(false);
    const [isvalid, setIsValid] = useState(false);

    const [data, action, isProgress] = useActionState(async (data, state) => {
        const email = state.get('email');
        const otp = state.get('otp');

        if (otp) {
            if (!otp && !email) {
                setIsValid(false);
                return { data: {}, error: "Email and OTP are required" }
            } else {
                try {
                    const data = await verify(email, otp);
                    if (data.status === 200) {
                        contextLogin(data.result);
                        setIsValid(true);
                    }
                    console.log(data);
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Something went wrong" }
                }
            }
        } else {
            if (!email) {
                setIsValid(false);
                return { data: {}, error: "Email is required" }
            } else {
                try {
                    const data = await login(email);
                    console.log(data);
                    if (data.status === 200) {
                        setIsShow(true);
                    }
                    return { data, error: null }
                } catch (error) {
                    return { data: {}, error: "Something went wrong" }
                }

            }
        }

    }, { data: {}, error: null });
    window.scrollTo(0, 0);
    return (
        <>
            <Ru_ro_vectors />
            <div className="header1">
                <img src={aloDocLogo} className="aloDocimg" alt="aloDoc" />
                <Navbar />
            </div>
            <div className="pageOfAutorization">
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

                    <div className="autorization">
                        <h1 className="loginPage">Login</h1>
                        {isAutorization && !isvalid ? <button onClick={logout}>Logout</button> : <form action={action}>
                            <input type="email" name="email" placeholder="Email" /><br />
                            {isShow && <input type="text" name="otp" placeholder="OTP" />}
                            {data.error !== null && <p style={{ color: "red", textAlign: "center" }}>{data.error}</p>}
                            {isvalid ? <button type="submit"><Link to={`/GetMe`}>Next</Link></button> :  <button type="submit">Login</button>}
                        </form>}
                    </div>
                </div>
                <NoteProfile />
            </div>
        </>
    )
}
export default PageOfAutorization;