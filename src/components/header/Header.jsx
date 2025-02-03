import aloDocLogo from "../../images/alo-doc.png";
import Avatar from "./Avatar";
import Navbar from "./Navbar";
import Navigations from "./Navigations";
import Ru_ro_vectors from "./ru-ro-vectors";


const Header = () => {
const count = 3;
    return (
        <div className="header">
            <Ru_ro_vectors />
            <div className="header1">
                <img src={aloDocLogo} className="aloDocimg" alt="aloDoc" />

                <Navbar />
                <Navigations count={count}/>
                <Avatar />
            </div>
        </div>

    )
}

export default Header;