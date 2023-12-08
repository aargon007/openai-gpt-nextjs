import { createContext, ReactNode, useContext, useEffect, useState } from 'react';
import { useToast } from '@apideck/components';
import { sendMessage } from './sendMessage'; // Assuming this function sends messages
import { CreateChatCompletionRequestMessage } from 'openai/resources/chat/index.mjs';

interface ChatCompletionRequestMessage {
    role: 'user' | 'assistant' | 'system';
    content: string;
    // Other properties if needed...
}

interface ContextProps {
    messages: CreateChatCompletionRequestMessage[];
    addMessage: (content: string) => Promise<void>;
    isLoadingAnswer: boolean;
}

export const ChatsContext = createContext<Partial<ContextProps>>({});

export function MessagesProvider({ children }: { children: ReactNode }) {
    const { addToast } = useToast();
    const [messages, setMessages] = useState<ChatCompletionRequestMessage[]>([]);
    const [isLoadingAnswer, setIsLoadingAnswer] = useState(false);

    useEffect(() => {
        const initializeChat = () => {
            const systemMessage: ChatCompletionRequestMessage = {
                role: 'system',
                content: 'You are ChatGPT, a large language model trained by OpenAI.',
            };
            const welcomeMessage: ChatCompletionRequestMessage = {
                role: 'assistant',
                content: 'Hi, How can I help you today?',
            };
            setMessages([systemMessage, welcomeMessage]);
        };

        if (!messages?.length) {
            initializeChat();
        }
    }, [messages?.length]);

    const addMessage = async (content: string) => {
        setIsLoadingAnswer(true);
        try {
            const newMessage: ChatCompletionRequestMessage = {
                role: 'user',
                content,
            };
            const newMessages = [...messages, newMessage];
            setMessages(newMessages);

            const { data } = await sendMessage(newMessages);
            const reply = data.choices[0].message;
            setMessages([...newMessages, reply]);
        } catch (error) {
            addToast({ title: 'An error occurred', type: 'error' });
        } finally {
            setIsLoadingAnswer(false);
        }
    };

    const contextValue: ContextProps = {
        messages,
        addMessage,
        isLoadingAnswer,
    };

    return (
        <ChatsContext.Provider value={contextValue} >
            {children}
        </ChatsContext.Provider>
    )
}

// export const useMessages = () => {
//     return useContext(ChatsContext) as ContextProps;
// };
