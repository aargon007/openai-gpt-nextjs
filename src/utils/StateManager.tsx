'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useChat,Message } from 'ai/react';

// Define a type for your state data
type StateType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    messages: Message[]; // Assuming Message is the type for messages
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

const initialContext: StateType = {
    openMenu: false,
    setOpenMenu: () => {},
    setInput:() => {},
    messages: [],
    input: '',
    handleInputChange: () => {},
    handleSubmit: () => {},
};

export const StateContext = createContext<StateType>(initialContext);

type Props = {
    children: ReactNode;
};

export const StateManager = ({ children }: Props) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { messages, input, handleInputChange, handleSubmit,setInput } = useChat();


    const stateData:StateType = {
        openMenu,
        setOpenMenu,
        setInput,
        messages,
        input,
        handleInputChange,
        handleSubmit,
    };

    return (
        <StateContext.Provider value={stateData}>
            {children}
        </StateContext.Provider>
    );
};