import { children, createContext, useState } from "react";
import { useContext } from "react";

export const LangContext = createContext();

const LangProvider = ({children}) => {
const [lang, setLang] = useState("ru");
function newLng(lng){
    setLang(lng)
}
    return(
        <LangContext.Provider value = {{lang,newLng}}>
            {children}
            </LangContext.Provider>
    )

}
export default LangProvider;