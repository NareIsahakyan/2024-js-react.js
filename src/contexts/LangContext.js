import { createContext, useState } from "react";

export const LangContext = createContext();

const langProvider = ({ children }) => {

    const [language, setLang] = useState("ru");

    return (
        <LangContext.Provider value={language}>
            {children}
        </LangContext.Provider>
    )

}
export default langProvider;