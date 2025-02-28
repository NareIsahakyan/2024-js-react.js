import vector from "../../images/Vector.png";
import { useCallback, useMemo, useState } from "react";
import HeaderSelect from "./HeaderSelect";
import { useDispatch, useSelector } from "react-redux";
import { getPatients } from "../../store/selectors/patientsSelector"

const Avatar = () => {
    const [isOpened, setIsOpened] = useState(false);
    const patients = useSelector(getPatients);
    let firstName = patients.first_name;
    let lastName = patients.last_name;
    let age = patients.age;
    let accountName = firstName;
    console.log(firstName, lastName)
    const dispatch = useDispatch();
    const content = useMemo(() => {
           if (patients) {
               return firstName + lastName + ''
           } else {
               return "Patient not found";
           }
       })
    const clickHandler = useCallback(() => {
        setIsOpened((prev) => !prev);
    }, []);
const avatar = accountName[0];
    return (
        <>
            <div className="avatar">{avatar}</div>
            <div className="acountName" key={patients.id}>{content}</div>
            <div className="vectorToUnder">
                <button value="conteiner" onClick={clickHandler}><img src={vector} width="11px" height="6px" /></button>
                {isOpened && <HeaderSelect />}
            </div>
        </>
    )
}
export default Avatar;