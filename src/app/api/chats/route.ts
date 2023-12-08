import { NextResponse } from "next/server";
import dbConnect from '@/services/dbConnect'

import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

async function main() {
    const stream = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [{ role: "user", content: "continue" }],
        stream: true,
    });
    for await (const chunk of stream) {
        process.stdout.write(chunk.choices[0]?.delta?.content || "");
    }
}

export const GET = async () => {
    try {
        const db = await dbConnect();
        const res = main();
        return NextResponse.json(res);
    } catch (error: any) {
        return NextResponse.json(
            { message: error.message },
            {
                status: 500,
            }
        );
    }
};