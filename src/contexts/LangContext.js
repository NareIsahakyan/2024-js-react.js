import { Children, createContext } from "react";

export const LangContext = createContext(0);

const langProvider = ({children , value}) => {

    return(
        <LangContext.Provider value = {value}>
            {children}
            </LangContext.Provider>
    )

}
export default langProvider;