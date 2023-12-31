import mongoose, { Schema } from 'mongoose';

export interface Chat extends mongoose.Document {
    userId: string;
    createdAt: Date;
    messages: Array<{
        content: string;
        role: 'user' | 'assistant';
        createdAt?: Date;
        id: string;
    }>;
}

const ChatsSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        // default: Date.now, // Default value for createdAt field
    },
    messages: [
        {
            content: {
                type: String,
                required: true,
            },
            role: {
                type: String,
                required: true,
                enum: ['user', 'assistant'], // Ensure only 'user' or 'assistant' are allowed
            },
            createdAt: {
                type: Date,
            },
            id: {
                type: String,
                required: true,
                // unique: true,
            },
        },
    ],
});

const ChatModel = mongoose.models.Chat || mongoose.model<Chat>('Chat', ChatsSchema);

export default ChatModel;
