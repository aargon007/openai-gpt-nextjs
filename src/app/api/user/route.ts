import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/services/dbConnect'
import { NextResponse } from 'next/server';
import ChatModel from '@/model/Chat';
import { currentUser } from '@clerk/nextjs/server';


export async function POST(req: Request) {
    const user = await currentUser()
    const body = await req.json();
    await dbConnect()
    // Create a new Chat document using the ChatModel
    const newChat = new ChatModel({
        userId: body.userId,
        messages: body.messages
    });

    // Save the new Chat document to the database
    const savedChat = await newChat.save();

    // Return the saved document in the response
    return NextResponse.json(savedChat);
}