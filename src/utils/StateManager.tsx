'use client'
import React, { createContext, useState, ReactNode, useContext } from 'react';
import { useChat, Message } from 'ai/react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// Define a type for your state data
type StateType = {
    openMenu: boolean;
    setOpenMenu: React.Dispatch<React.SetStateAction<boolean>>;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    messages: Message[]; // Assuming Message is the type for messages
    input: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
    reload: () => Promise<string | null | undefined>;
    stop: () => void;
    isLoading: boolean;
    setMessages:(messages: Message[]) => void,
    isloadingChats: boolean,
    chatHistory: {
        _id: string;
        userId: string;
        messages: Array<{
            content: string;
            role: 'user' | 'assistant';
            createdAt?: Date;
            id: string;
        }>;
    }[],
    refetch: () => void
};

const initialContext: StateType = {
    openMenu: false,
    setOpenMenu: () => { },
    setInput: () => { },
    messages: [],
    input: '',
    handleInputChange: () => { },
    handleSubmit: () => { },
    reload: async () => { return 'Reloaded' },
    stop: () => { },
    isLoading: false,
    setMessages: ()=> {},
    isloadingChats: false,
    chatHistory : [],
    refetch: async () => { return }
};

export const StateContext = createContext<StateType>(initialContext);

type Props = {
    children: ReactNode;
};

export const StateManager = ({ children }: Props) => {
    const [openMenu, setOpenMenu] = useState<boolean>(false);
    const { messages, input, handleInputChange, handleSubmit, setInput, stop, reload, isLoading, setMessages } = useChat();
    const {
		refetch,
		data: chatHistory = [],
		isLoading: isloadingChats,
	} = useQuery({
		queryKey: ["chatHistory", ],
		queryFn: async () => {
			const res = await axios(
				`/api/user`
			);
			return res.data;
		},
	});

    const stateData: StateType = {
        openMenu,
        setOpenMenu,
        setInput,
        messages,
        input,
        handleInputChange,
        handleSubmit,
        stop,
        reload,
        isLoading,
        setMessages,
        chatHistory,
        isloadingChats,
        refetch,
    };

    return (
        <StateContext.Provider value={stateData}>
            {children}
        </StateContext.Provider>
    );
};