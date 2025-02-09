import { children, createContext } from "react";

export const LangContext = createContext();

const LangProvider = ({children , value}) => {

    return(
        <LangContext.Provider value = {value}>
            {children}
            </LangContext.Provider>
    )

}
export default LangProvider;