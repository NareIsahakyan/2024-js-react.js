import {tr} from "../../utils/translate";
import {LangContext} from "../../contexts/LangContext";
import { useContext} from "react";
const Navbar = () => {
    const {lang} = useContext(LangContext);
    return (

        <div className="navbar">
            <div className="navigation1"><span />{tr("howToUse",lang)}</div>
            <div className="navigation1">{tr("myEntries",lang)}</div>
            <div className="navigation1">{tr("makeAnAppointmentWithADoctor",lang)}</div>
        </div>

    )
}
export default Navbar;