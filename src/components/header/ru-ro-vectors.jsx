import { useState,useContext } from "react";
//import { translate } from "../../utils/translate";

const Ru_ro_vectors = () => {
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const {language,setLanguage} = useContext(language);

    const disableButton = () => {
        setButtonDisabled(true);
      
    };

    const enableButton = () => {
        setButtonDisabled(false);
      
    };


    return (
        <div className="vector">
            <button
                onClick={enableButton}
                style={!isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton}
                disabled={!isButtonDisabled}
            >
                RU
            </button>
            <button
                onClick={disableButton}
                style={isButtonDisabled ?
                    styles.disabledButton : styles.enabledButton}
                disabled={isButtonDisabled}
            >
                RO
            </button>
        </div>
    )
}
export default Ru_ro_vectors;

const styles = {
    disabledButton: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        width: "28px",
        height: "17px",
        borderBottomLeftRadius: "40%",
        borderBottomRightRadius: "40%",
        color: "#FFFFFF",
        backgroundColor: "rgb(86, 204, 242)",
        paddingBottom:"2%",
        border: "none",
    },
    enabledButton: {
        fontFamily: "Montserrat",
        fontSize: "14px",
        width: "28px",
        height: "17px",
        borderBottomLeftRadius: "40%",
        borderBottomRightRadius: "40%",
        border: "none",
        color: "#4F4F4F",
        backgroundColor: "#FFFFFF",
        paddingBottom:"2%",
    },
};