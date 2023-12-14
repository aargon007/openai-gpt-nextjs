import dbConnect from '@/services/dbConnect'
import { NextResponse } from 'next/server';
import ChatModel from '@/model/Chat';
import { currentUser } from '@clerk/nextjs/server';

// get users all chat history
export async function GET(req: Request) {
    const user = await currentUser();
    await dbConnect()

    try {
        const userChats = await ChatModel.find({ userId: user?.id })
        // Return the saved document in the response
        return NextResponse.json(userChats);
    } catch (error) {
        return NextResponse.json({ success: false })
    }
}

export async function POST(req: Request) {
    const user = await currentUser()
    const body = await req.json();
    await dbConnect()
    // Create a new Chat document using the ChatModel
    const newChat = new ChatModel({
        userId: user?.id,
        messages: body.messages
    });

    // Save the new Chat document to the database
    const savedChat = await newChat.save();

    // Return the saved document in the response
    return NextResponse.json(savedChat);
}