import RegistrationList from "./Registrationlist";
import registrations from "../../local/registration.json"
import { useCallback, useMemo, useState } from "react";
import { BrowserRouter, Outlet, Route, Routes, useParams } from "react-router-dom";
import { useSearchParams } from 'react-router-dom';

const Registration = () => {
  const now = new Date();
  const [registrationData, setRegistration] = useState(registrations);
  const [lastIsClicked, setLastIsClicked] = useState(false);
  const [futureIsClicked, setfutureIsClicked] = useState(true);
  let {userId} =useParams();

  const registrationFuture = registrationData.filter((registrsData) => {
    return registrsData.clock > now;
  }).map((registrData) => {
    return <RegistrationList
      clock={registrData.clock}
      doctorAvatar={registrData.doctorAvatar}
      calendar={registrData.calendar}
      fulName={registrData.fulName}
      specialization={registrData.specialization}
      experience={registrData.experience}
      key={registrData.registrId} />
  });

  const registrationLast = registrationData.filter((registrsData) => {
    return registrsData.clock < now;
  }).map((registrData) => {
    return <RegistrationList
      clock={registrData.clock}
      doctorAvatar={registrData.doctorAvatar}
      calendar={registrData.calendar}
      fulName={registrData.fulName}
      specialization={registrData.specialization}
      experience={registrData.experience}
      key={registrData.registrId} />
  });

  const registration = registrationData.map((registrData) => {
    return <RegistrationList
      clock={registrData.clock}
      doctorAvatar={registrData.doctorAvatar}
      calendar={registrData.calendar}
      fulName={registrData.fulName}
      specialization={registrData.specialization}
      experience={registrData.experience}
      key={registrData.registrId} />
  })


  const futurHandel = useCallback(() => {
    setfutureIsClicked(true);
    setLastIsClicked(false);
    setRegistration(registrationFuture);
   
  });


  const lastHandel = useCallback(() => {
    setfutureIsClicked(false);
    setLastIsClicked(true);
    setRegistration(registrationLast);
    
  });
  const offHandel = useCallback(() => {
    setRegistration(registration)
  });

  return (
    <>
   
      <div className="buttonslist">
        <button type="button" value="Предстоящие" id="myNotes1" onClick={futurHandel}>Предстоящие</button>
        <button type="button" value="Прошедшие" id="myNotes2" onClick={lastHandel}>Прошедшие</button>
        <button type="button" value="Отмененные" id="myNotes3" onClick={offHandel}>Отмененные</button>
      </div>
      <div className="nodesList">
        
          <Routes>
          <Route path='/future' element={registrationFuture} />
          <Route path='/last' element={registrationLast} />
          </Routes>
        <Outlet/>
      </div>
      
    </>

  )
}
export default Registration;