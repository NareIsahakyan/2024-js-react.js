import { useMemo } from "react";
import { useSelector } from "react-redux";
import { getPatients } from "../../store/selectors/patientsSelector";

 function PatientsProfile() {
    const patients = useSelector(getPatients);

    const content = useMemo(() => {
        if (patients) {
            return (
                <div className="patientInfo" key={patients.id}>
                    <div>Name: {patients.first_name}</div>
                    <div>Surname: {patients.last_name}</div>
                    <div>Age: {patients.age}</div>
                </div>
            )
        } else {
            return "Patient not found";
        }
    })
    console.log(patients);

    return (<>
        <div className="patientProfile">
            <h1>Patients Profile</h1>
            {content}
        </div>
        </> )
};
export default PatientsProfile;