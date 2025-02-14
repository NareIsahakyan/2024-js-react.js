import { useMemo } from "react";
import { useParams } from "react-router-dom";
import registrations from "../../local/registration.json";
import RegistrationList from "./Registrationlist";

const List=()=>{
    const params = useParams();
    const filtered = useMemo(()=>{
        return registrations.filter((registrData)=>{
        if(params.sortBy === "future") return registrData.clock > "14:20";
        if(params.sortBy === "last") return registrData.clock < "14:20";
       
});
},[params]);

return(
<div>
    {
        filtered.map((registrData) => {
            return <RegistrationList
              clock={registrData.clock}
              doctorAvatar={registrData.doctorAvatar}
              calendar={registrData.calendar}
              fulName={registrData.fulName}
              specialization={registrData.specialization}
              experience={registrData.experience}
              key={registrData.registrId} 
              id = {registrData.registrId}/>
          })
         
    } 
</div>
)
}
export default List;