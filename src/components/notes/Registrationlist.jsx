import doctorAvatar from "../../images/doctor.png";
import calendars from "../../images/calendar.png";
import clocks from "../../images/clk.png";
import videCamera from "../../images/video-camera.png";
import { Link, useParams } from "react-router-dom";
import * as React from 'react';
import { tr } from "../../utils/translate";
import { LangContext } from "../../contexts/LangContext";
import { useContext } from "react";
import { useTranslation } from "react-i18next";


const RegistrationList =(registration)=>{
    // const { lang } = useContext(LangContext);
     const { t } = useTranslation();
    
    const  clockDate=registration.clock,
    doctorAvatarSrs=registration.doctorAvatar,
    calendarDate = registration.calendar,
    fulName= registration.fulName,
    specialization=registration.specialization,
    experience = registration.experience,
    id = registration.id;
   
    return(
        <Link to = {`/doctorPage?userId=${id}`}>
        
        <div className="inNodeList" >
                    <div className="notesDataToRezerv">
                        <div className="notesData" key={id}>
                            <div><img src={calendars} width="16px" height="16px" className="calendar" />{calendarDate}</div>
                            <div><img src={clocks} width="16px" height="16px" className="calendar" />{clockDate}</div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" />{t("videoCommunication")}</div>
                        </div>
                        <div><input type="button" value="Запланировано" id="myNotesrezerv"></input></div>
                    </div>

                    <div className="doctorlist">
                        <div className="aboutDoctor">
                            <div><img src={doctorAvatarSrs ?doctorAvatarSrs:doctorAvatar} width="144.71px" height="144.71px" className="doctorAvatar" alt= "doctorAvatar" /></div>
                            <div className="docabout">
                                <div><h1>{fulName}</h1></div>
                                <div><p>{specialization}</p></div>
                                <div><h3>{experience}</h3></div>
                            </div>
                        </div>


                        <div className="toSeeButtons">
                            <input type="button" value="Посмотреть запись" id="toSeeNotes"></input>
                            <input type="button" value="Посмотреть постановление" id="toSeeResolution"></input>
                        </div>
                    </div>
                </div>
                </Link>
    )
}

export default RegistrationList;