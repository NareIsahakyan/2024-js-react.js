import vector from "../../images/Vector1.png";
import doctorAvatar from "../../images/doctor.png";
import dram from "../../images/dram.png";
import calendar from "../../images/Group.png";
import hat from "../../images/hat.png";
import plus from "../../images/plus.png";
import znak from "../../images/znak.png";

const DoctorPage = () => {

  return (
    <div className="doctorPage">

      <div className="navbar">
        <div><span className="navbartext">Врачи</span></div>
        <div><img src={vector} width="6px" height="10px" className="vector" /> </div>
        <div><span className="navbartext">Педиатр</span></div>
        <div><img src={vector} width="6px" height="10px" className="vector" /> </div>
        <div><span className="navbartext">Профиль врача</span></div>
      </div>

      <div className="doctorlist">
        <div className="aboutDoctor">
          <div><img src={doctorAvatar} width="100px" height="100px" className="doctorAvatar"/></div>
          <div className="about">
            <div><h1>Ольга Никитина</h1></div>
            <div><p>Оториноларинголог (ЛОР), Терапевт</p></div>
            <div><h3>Стаж 15 лет</h3></div>
          </div>

        </div>

        <div className="service">
          <div className="value"><p>900</p><img src={dram} width="11.82px" height="13px" className="dram" /><p>/ консультация</p></div>
          <div><p>30 минут</p></div>
        </div>
      </div>

      <div className="main">
        <div>
          <div className="iconslist"><img src={calendar} width="28px" height="28px" className="calendar" />
          <h1 className="auasyle">Ближайшая запись</h1></div>
          <div><p>Вторник 03 Марта</p></div>
        </div>
        <div>
        <div className="iconslist"><img src={hat} width="33px" height="33px" className="hat" />
          <h1 className="auasyle">Образование</h1></div>
          <div><p>1992 - Российский Государственный Университет</p>
          <p>1994 - Ординатура по специальности «Педиатрия»</p></div>
        </div>
        <div>
        <div className="iconslist"><img src={plus} width="34px" height="34px" className="plus" />
          <h1 className="auasyle">Специализируется на лечении</h1></div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ,<br/>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/> 
          commodo consequat. </p>
         </div>
        </div>
        <div>
        <div className="iconslist"><img src={znak} width="34px" height="34px" className="znak" />
          <h1 className="auasyle">Дополнительно</h1></div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ,<br/>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/> 
          commodo consequat. </p>
        </div>
      </div>
    </div>
</div>
  )
}
export default DoctorPage;