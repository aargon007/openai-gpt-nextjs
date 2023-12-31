import dbConnect from '@/services/dbConnect'
import { NextResponse } from 'next/server';
import ChatModel from '@/model/Chat';
import { currentUser } from '@clerk/nextjs/server';
import { isValidObjectId } from 'mongoose';

export async function GET(request: Request, { params }: { params: { id: string } }) {
    const user = await currentUser();
    await dbConnect();
    const id = params.id

    if (!id) {
        return NextResponse.json({ success: false, error: "Missing 'id' parameter" }, { status: 400 });
    }
    // validate MongoDB ObjectId format
    if (!isValidObjectId(id)) {
        return NextResponse.json({ success: false, error: "Invalid 'id' parameter" }, { status: 400 });
    }

    try {
        const userChats = await ChatModel.findById(id);
        if (!userChats) {
            return NextResponse.json({ success: false, error: "Chat not found" }, { status: 404 });
        }
        return NextResponse.json(userChats);
    } catch (error) {
        // Log the error
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: "Internal server error" }, { status: 500 });
    }
}


export async function PUT(request: Request, { params }: { params: { id: string } }) {
    try {
        const user = await currentUser();
        await dbConnect();
        const id = params.id
        // Parse the request body
        const body = await request.json();
        // Find the chat document by ID
        const chat = await ChatModel.findById(id);
        
        if (!chat) {
            return NextResponse.json({ success: false, error: "Chat not found" }, { status: 404 });
        }

        // Update chat messages
        chat.messages = body.messages;

        // Save the updated Chat document to the database
        const savedChat = await chat.save();

        // Return the saved document in the response
        return NextResponse.json(savedChat);
    } catch (error) {
        // Handle any errors that occurred during execution
        console.error("Error:", error);
        return NextResponse.json({ success: false, error: "An error occurred" }, { status: 500 });
    }
}