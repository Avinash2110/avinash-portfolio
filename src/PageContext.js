import React, {createContext, useState} from "react";

export const PageContext = createContext();

export const PageProvider = (props) =>{
    const [pages, setPages] = useState({
        about: true,
        skills: false,
        projects: false,
        contact: false
    })

    return(
        <PageContext.Provider value={[pages, setPages]}>
            {props.children}
        </PageContext.Provider>
    )
}