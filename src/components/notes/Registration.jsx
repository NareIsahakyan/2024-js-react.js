import RegistrationList from "./Registrationlist";
import registrations from "../../local/registration.json"
import { useState } from "react";

const Registration = () => {
  const now = new Date();
  console.log(now)
    const [registrationData, setRegistration] = useState(registrations);
   
    const registration = registrationData.map((registrData) => {
       const regtime = registrData.calendar + " " + registrData.clock;
       console.log(regtime)
       console.log(now.getHours < registrData.clock , now.getFullYear < registrData.calendar)
       if(now < regtime){}
        return <RegistrationList 
        clock={registrData.clock}
        doctorAvatar={registrData.doctorAvatar}
        calendar = {registrData.calendar}
        fulName= {registrData.fulName}
        specialization={registrData.specialization}
        experience = {registrData.experience}
        key = {registrData.registrId}/>
       })

    return (
        <>
        <div className="buttonslist">
                <button type="button" value="Предстоящие" id="myNotes1">Предстоящие</button>
                <button type="button" value="Прошедшие" id="myNotes2">Прошедшие</button>
                <button type="button" value="Отмененные" id="myNotes3">Отмененные</button>
            </div>
 <div className="nodesList">
    {registration}
 </div>
</>

    )
}
export default Registration;