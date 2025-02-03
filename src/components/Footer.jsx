import aloDocLogo from "../images/alo-doc-f.png";
import fasebookLogo from "../images/facebook.png";
import instagramLogo from "../images/instagram.png";
import youtubeLogo from "../images/youtube.png";
import appStore from "../images/app-store- white.png";
import googlePlay from "../images/google-play- white.png";
import email from "../images/email.png";
import place from "../images/place.png";
import clock from "../images/clock.png";
import phone from "../images/phone-call.png";


const Footer = () => {

    return (
 <div className="footer">

<div className="footer1part">
<div className="logo"><img src={aloDocLogo}  alt="aloDoc" width="203px" height="53px"/> </div>
<div className="aboutSite"><span>Онлай- консульации специалистов врачей, то что <br/>
предлагает данный сервис.<br/><br/>
В нашем веб и мобильном приложении вы найдете <br/>
врачей экспертов, которые окажут вам <br/>
персонализированную помощь онлайн 24/7</span></div>

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
<div> <span  className="user">Как пользоваться</span><br/> </div>
<div><span  className="faq">FAQ (ответы на вопросы)</span></div>
<div><span  className="forDoc">Для врачей</span></div>
<div><span  className="forServise">О сервисе</span></div>
<div><span  className="contact">Контакты</span></div>
<div><span  className="usersOK">Пользовательское соглашение</span></div>
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