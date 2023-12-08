import mongoose, { Schema } from 'mongoose';

export interface Chats extends mongoose.Document {
    userID: string;
    chats: [
        {
            userMessage: string;
            answers: any;
        }
    ]
}

const ChatsSchema = new mongoose.Schema({
    userID: {
        type: String,
        required: true,
    },
    chats: [
        {
            userMessage: {
                type: String,
                required: true,
            },
            answers: {
                type: Schema.Types.Mixed, // Use appropriate type for 'answers'
                required: true,
            },
        },
    ],
});

const ChatModel = mongoose.model<Chats>('Chat', ChatsSchema);

export default ChatModel;