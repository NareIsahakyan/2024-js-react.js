import aloDocLogo from "../../images/alo-doc-f.png";
import fasebookLogo from "../../images/facebook.png";
import instagramLogo from "../../images/instagram.png";
import youtubeLogo from "../../images/youtube.png";
import appStore from "../../images/app-store- white.png";
import googlePlay from "../../images/google-play- white.png";
import email from "../../images/email.png";
import place from "../../images/place.png";
import clock from "../../images/clock.png";
import phone from "../../images/phone-call.png";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";


const Footer = () => {
    // const { lang } = useContext(LangContext);
     const { t } = useTranslation();
    return (
 <div className="footer">

<div className="footer1part">
<div className="logo"><img src={aloDocLogo}  alt="aloDoc" width="203px" height="53px"/> </div>
<div className="aboutSite"><span>{t("onlineConsultationsOf..")}<br/>
{t("onlineConsultationsOf/1..")}<br/><br/>
{t("onlineConsultationsOf/2..")} <br/>
{t("onlineConsultationsOf/3..")}<br/>
{t("onlineConsultationsOf/4..")}</span></div>

<div className="sites">
<div className="instagram"><img src={instagramLogo} width="24px" height="24px"/></div>
<div className="fasebook"><img src={fasebookLogo}  width="24px" height="24px"/></div>
<div className="youtube"><img src={youtubeLogo} width="24px" height="24px"/></div>
</div>

<div className="appBadge">
<div className="appStore"><img src={appStore} width="132.68px" height="39.08px"/></div>
<div className="googlePlay"><img src={googlePlay}  width="132px" height="38px"/></div>
</div>
</div>

<div className= "footer2part">
<div> <span  className="user">{t("howToUse")}</span><br/> </div>
<div><span  className="faq">{t("FAQ(..)")}</span></div>
<div><span  className="forDoc">{t("forDoctors")}</span></div>
<div><span  className="forServise">{t("aboutTheService")}</span></div>
<div><span  className="contact">{t("contacts")}</span></div>
<div><span  className="usersOK">{t("UserAgreement")}</span></div>
</div>

<div className="footer3part">
<div className="email">
<div><img src={email} width="24px" height="24px"/></div>
<div><span className="contactText">allodoc@mail.com</span></div> 
</div>

<div className="plase">
<div><img src={place} width="24px" height="24px"/></div>
<div><span className="contactText">г. Москва. ул, Ленина 54, офис 51</span></div> 
</div>

<div className="clock">
<div><img src={clock} width="24px" height="24px"/></div>
<div><span className="contactText">Пн-Вс с 09:00 до 18:00</span></div> 
</div>

<div className="phone">
<div><img src={phone} width="24px" height="24px"/></div>
<div><span className="contactText">8 800 555 35 35</span></div> 
</div>
</div>

 </div>
    )
}
export default Footer;