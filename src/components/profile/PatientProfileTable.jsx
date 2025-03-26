import { useTranslation } from "react-i18next";
import patients from "../../local/patient.json";
import { useEffect, useState, memo } from "react";

const PatientProfileTable = () => {
    const [data, setData] = useState(patients);
    useEffect(() => {
        setData(patients)
    }, []);
    let [doctor, setDoctor] = useState("Doctor")
    let [complaints, setComplaints] = useState("");
    let [time, setTime] = useState("");
    let [date, setDate] = useState("");
    let [treatment, setTreatment] = useState("");
    let [research, setResearch] = useState("");
    let [rezults, setRezults] = useState("");
    let [editId, setEditId] = useState(false);
    let [add, setAdd] = useState(false);
    let [upcomplaints, setUpcomplaints] = useState("");
    let [uptime, setUptime] = useState("");
    let [update, setUpdate] = useState("");
    let [uptreatment, setUptreatment] = useState("");
    let [upresearch, setUpresearch] = useState("");
    let [uprezults, setUprezults] = useState("");

    const handelSubmit = (e) => {
        e.preventDefault();
        const id = data[data.length - 1].id + 1;
        data.push({ id: id, doctor: "Doctor", date: date, time: time, complaints: complaints, treatment: treatment, research: research, rezults: rezults });
        setData(data);
        console.log(add);
        setAdd(false);
        console.log(add);
    };

    console.log(patients);
    console.log(data);

    const handleUpdate = () => {
        setEditId(true);
    };

    const handleEdit = (id) => {
        data[id] = { id: id, doctor: "Doctor", date: update, time: uptime, complaints: upcomplaints, treatment: uptreatment, research: upresearch, rezults: uprezults };
        setEditId(false);
        setUpdate("");
        setUptime("");
        setUpcomplaints("");
        setUpresearch("");
        setUprezults("");
        setUptreatment("");
    };

    const handleDelete = (id) => {
        delete data[id];
        setData(data);
    }
    const { t } = useTranslation();

    return (<>
        <div>
            <table className="patienttable">
                <thead>
                    <tr className="tableHeader">
                        <th>{t("Doctor")}</th>
                        <th>{t("Visitingtime")}</th>
                        <th>{t("Patientcomplaints")}</th>
                        <th>{t("Research")}</th>
                        <th>{t("Prescribedtreatment")}</th>
                        <th>{t("Treatmentresult")}</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((patient, index) => (
                            editId ?
                                <tr className="tableLine" key={patient.id}>
                                    <td ><p>{patient.doctor}</p></td>
                                    <td ><input type="date" name="data" value={patient.update} onChange={(e) => setUpdate(e.target.value)} placeholder={patient.date} />
                                        <input type="time" name="time" value={patient.uptime} onChange={(e) => setUptime(e.target.value)} placeholder={patient.time} /></td>
                                    <td><textarea value={patient.upcomplaints} onChange={(e) => {setUpcomplaints(e.target.value); if(!editId){}}} placeholder={patient.complaints} /></td>
                                    <td ><textarea value={patient.upresearch} onChange={(e) => setUpresearch(e.target.value)} placeholder={patient.research} /></td>
                                    <td><textarea value={patient.uptreatment} onChange={(e) => setUptreatment(e.target.value)} placeholder={patient.treatment} /></td>
                                    <td ><textarea value={patient.uprezults} onChange={(e) => setUprezults(e.target.value)} placeholder={patient.rezults} /></td>
                                    <td><button onClick={() => handleEdit(patient.id, update, uptime, upcomplaints, upresearch, uptreatment, uprezults)}>Edit</button>
                                        <button onClick={() => handleDelete(patient.id)}>Delate</button></td>
                                </tr> :

                                <tr className="tableLine" key={patient.id}>
                                    <td><p>{patient.doctor}</p></td>
                                    <td> {patient.date}   {patient.time}</td>
                                    <td>{patient.complaints}</td>
                                    <td >{patient.research}</td>
                                    <td > {patient.treatment}</td>
                                    <td>{patient.rezults}</td>
                                    <td ><button onClick={() => handleUpdate(patient.id)}>Update</button>
                                        <button onClick={() => handleDelete(patient.id)}>Delate</button></td>
                                </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
        <div className="form-div">
            <div className="doc">{doctor}</div>
            <div><input type="date" name="data"  onChange={(e) =>  setDate(e.target.value)} /></div>
            <div><input type="time" name="time" onChange={(e) => setTime(e.target.value)} /></div>
            <div><textarea placeholder="complaints"  onChange={(e) => setComplaints(e.target.value)} /></div>
            <div><textarea placeholder="research" onChange={(e) =>  setResearch(e.target.value)} /></div>
            <div><textarea placeholder="treatment" onChange={(e) =>{ if(add){e.target.value=""}else{setTreatment(e.target.value)} }}/></div>
            <div><textarea placeholder="rezults" onChange={(e) =>  setRezults(e.target.value)} /></div>
            <div><button className="addLine" onClick={(e) => { handelSubmit(e); setAdd(true) }}>{t("Addnewline")}</button></div>
        </div>
    </>)
}
export default memo(PatientProfileTable);

