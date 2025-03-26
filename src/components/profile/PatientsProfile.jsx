import { useMemo } from "react";
import { useSelector } from "react-redux";
import { patientsSelector } from "../../store/selectors";
import PatientProfileTable from "./PatientProfileTable";
import { useTranslation } from "react-i18next";

function PatientsProfile() {
    const patients = useSelector(patientsSelector.getPatients);
    const { t } = useTranslation();
    const content = useMemo(() => {
        if (patients) {
            return (
                <div className="patientInfo" key={patients.id}>
                    <div>{t("Name")}: {patients.first_name}</div>
                    <div>{t("Surname")}: {patients.last_name}</div>
                    <div>{t("Age")}: {patients.age}</div>
                </div>
            )
        } else {
            return "Patient not found";
        }
    })

    return (
    <>
        <div className="patientProfile">
            <h1>{t("PatientsProfile")}</h1>
            <div className="profilehead">{content}</div>
            <PatientProfileTable />
        </div>
    </>
    );
};
export default PatientsProfile;