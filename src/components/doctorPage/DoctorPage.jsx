import vector from "../../images/Vector1.png";
import doctorAvatar from "../../images/doctor.png";
import dram from "../../images/dram.png";
import calendar from "../../images/Group.png";
import hat from "../../images/hat.png";
import plus from "../../images/plus.png";
import znak from "../../images/znak.png";
import registrations from "../../local/registration.json"
import { useParams, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";

const DoctorPage = () => {
  let {userId} = useSearchParams();
  const { lang } = useContext(LangContext);
  
  const [doctor, setDoctor]= useState({}) 
  useEffect(()=>{
    const doc = registrations.find((doctr)=> doctr.registrId === userId);
    setDoctor(doc)
  },[userId]);
  if(doctor === undefined){return <h1>Doctor is not found</h1>}
   const   doctorAvatarSrs=doctor.doctorAvatar,
      fulName= doctor.fulName,
      specialization=doctor.specialization,
      experience = doctor.experience,
      data=doctor.calendar,
      id = doctor.id;
      console.log(fulName,specialization,experience,id)
  return (
    <div className="doctorPage">
    
      <div className="doctorPageNavbar">
        <div><span className="navbartext">Врачи</span></div>
        <div><img src={vector} width="6px" height="10px" className="docVector" /> </div>
        <div><span className="navbartext">Педиатр</span></div>
        <div><img src={vector} width="6px" height="10px" className="docVector" /> </div>
        <div><span className="navbartext">Профиль врача</span></div>
      </div>

      <div className="doctorPagelist">
        <div className="aboutDoctorPage">
          <div><img src={doctorAvatarSrs ?doctorAvatarSrs : doctorAvatar} width="100px" height="100px" className="doctorAvatar"/></div>
          <div className="abouts">
            <div><h1>{fulName}</h1></div>
            <div><p>{specialization}</p></div>
            <div><h3>{experience}</h3></div>
          </div>

        </div>

        <div className="docPageService">
          <div className="docPagevalue"><p>900</p><span style={{marginTop:'12px'}}><img src={dram} width="11.82px" height="8px" className="dram" /></span><p>{tr("consultation", lang)}</p></div>
          <div><p>30 {tr("minutes", lang)}</p></div>
        </div>
      </div>

      <div className="main">
        <div>
          <div className="iconslist"><img src={calendar} width="28px" height="28px" className="calendar" />
          <h1 className="auasyle">{tr("nearestEntry", lang)}</h1></div>
          <div><p>{data}</p></div>
        </div>
        <div>
        <div className="iconslist"><img src={hat} width="33px" height="33px" className="hat" />
          <h1 className="auasyle">{tr("education", lang)}</h1></div>
          <div><p>1992 - Российский Государственный Университет</p>
          <p>1994 - Ординатура по специальности «Педиатрия»</p></div>
        </div>
        <div>
        <div className="iconslist"><img src={plus} width="34px" height="34px" className="plus" />
          <h1 className="auasyle">{tr("specializesInTreatment", lang)}</h1></div>
          <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ,<br/>
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim<br/> 
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea<br/> 
          commodo consequat. </p>
         </div>
        </div>
        <div>
        <div className="iconslist"><img src={znak} width="34px" height="34px" className="znak" />
          <h1 className="auasyle">{tr("additionally", lang)}</h1></div>
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