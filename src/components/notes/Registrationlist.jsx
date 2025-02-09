import doctorAvatar from "../../images/doctor.png";
import calendars from "../../images/calendar.png";
import clocks from "../../images/clk.png";
import videCamera from "../../images/video-camera.png";
import { Link } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const RegistrationList =(registration,key)=>{
    
    const  clockDate=registration.clock,
    doctorAvatarSrs=registration.doctorAvatar,
    calendarDate = registration.calendar,
    fulName= registration.fulName,
    specialization=registration.specialization,
    experience = registration.experience;

    return(
        <Link to ='/doctorPage/:userId'>
        <div className="inNodeList" >
                    <div className="notesDataToRezerv">
                        <div className="notesData" key={key}>
                            <div><img src={calendars} width="16px" height="16px" className="calendar" />{calendarDate}</div>
                            <div><img src={clocks} width="16px" height="16px" className="calendar" />{clockDate}</div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" /> Видео связь </div>
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