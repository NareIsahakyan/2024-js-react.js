import vector from "../../images/Vector.png";
import { useCallback, useMemo, useState } from "react";
import HeaderSelect from "./HeaderSelect";
import { useSelector } from "react-redux";
import { patientsSelector } from "../../store/selectors"

const Avatar = () => {
    const [isOpened, setIsOpened] = useState(false);
    let patients = useSelector(patientsSelector.getPatients);
    console.log(patients)
    let firstName = patients.first_name;
    let lastName = patients.last_name;
    let age = patients.age;
    let accountName = firstName;
    console.log(firstName, lastName)
    const avatar = accountName[0];
    const content = useMemo(() => {
        if (firstName && lastName && age) {
            console.log(firstName, lastName)
            return firstName + " " + lastName + ''
        } else {
            return "Patient not found";
        }
    })
    const clickHandler = useCallback(() => {
        setIsOpened((prev) => !prev);
    }, []);
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName" >{content}
                <div className="vectorToUnder">
                    <button value="conteiner" onClick={clickHandler}><img src={vector} width="11px" height="6px" /></button>
                    {isOpened && <HeaderSelect />}
                </div></div>
        </>
    )
}
export default Avatar;