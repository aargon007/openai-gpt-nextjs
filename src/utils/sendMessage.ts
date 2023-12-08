// import { CreateChatCompletionRequestMessage } from "openai/resources/chat"
import { CreateChatCompletionRequestMessage } from "openai";

export const sendMessage = async (messages: CreateChatCompletionRequestMessage[]) => {
    try {
        const response = await fetch('/api/chats', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ messages }),
        })

        const res = await response.json();
        console.log(res);
        return res
        
    } catch (error) {
        console.log(error)
    }
}
