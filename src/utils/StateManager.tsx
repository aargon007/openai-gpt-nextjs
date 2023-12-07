'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define a type for your state data
type StateType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const initialContext: StateType = {
    openMenu: false,
    setOpenMenu: () => { }, // Placeholder function
};

export const StateContext = createContext<StateType>(initialContext);

type Props = {
    children: ReactNode;
};

export const StateManager = ({ children }: Props) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);


    const stateData: StateType = {
        openMenu,
        setOpenMenu,
    };
    console.log(openMenu);
    return (
        <StateContext.Provider value={stateData}>
            {children}
        </StateContext.Provider>
    );
};