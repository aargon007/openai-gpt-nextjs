'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';

// Define a type for your state data
type StateType = {
    openUserMenu: boolean;
    setOpenUserMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

// Create a context with the defined type
export const StateContext = createContext<StateType | null>(null);

type Props = {
    children: ReactNode;
};

export const StateManager = ({ children }: Props) => {
    const [openUserMenu, setOpenUserMenu] = useState<boolean>(false);

    const stateData: StateType = {
        openUserMenu,
        setOpenUserMenu,
    };

    return (
        <StateContext.Provider value={stateData}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateManager = () => {
    const context = useContext(StateContext);
    if (!context) {
        throw new Error('useStateManager must be used within a StateManagerProvider');
    }
    return context;
};

export default StateManager;