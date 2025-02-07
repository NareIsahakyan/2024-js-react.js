import doctorAvatar from "../../images/doctor.png";
import calendar from "../../images/calendar.png";
import clocks from "../../images/clock-1.png";
import videCamera from "../../images/video-camera.png";

const RegistrationList =(registration)=>{
    const registrId = registration.registrId,
    calendar = registration.calendar,
    clock=registration.clock,
    doctorAvatar=registration.doctorAvatar,
    fulName= registration.fulName,
    specialization=registration.specialization,
    experience = registration.experience;

    return(
        <div className="nodeList2" key = {registrId}>
                    <div className="notesDataToRezerv">
                        <div className="notesData">
                            <div><img src={calendar} width="16px" height="16px" className="calendar" />{calendar}</div>
                            <div><img src={clocks} width="16px" height="16px" className="clock" />{clock} </div>
                            <div><img src={videCamera} width="16px" height="16px" className="videCamera" /> Видео связь </div>
                        </div>
                        <div><input type="button" value="Запланировано" id="myNotesrezerv"></input></div>
                    </div>

                    <div className="doctorlist">
                        <div className="aboutDoctor">
                            <div><img src={doctorAvatar} width="144.71px" height="144.71px" className="doctorAvatar" alt= {doctorAvatar} /></div>
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
    )
}
export default RegistrationList;