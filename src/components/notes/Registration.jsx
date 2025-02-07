import RegistrationList from "./Registrationlist";
import { registrations } from "../../local/registration.json"
import { useState } from "react";




const Registration = () => {
    const [registration, setRegistration] = useState(registrations);
    return (
        <>
        <div className="buttonslist">
                <input type="button" value="Предстоящие" id="myNotes1"></input>
                <input type="button" value="Прошедшие" id="myNotes2"></input>
                <input type="button" value="Отмененные" id="myNotes3"></input>
            </div>
 <div className="nodesList">
    {
       registration = registration.map((registration) => {
        return <RegistrationList key={registration.registrId}/>
       })
       }
 </div>
</>
    )
}
export default Registration;