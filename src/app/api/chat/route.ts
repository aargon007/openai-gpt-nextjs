import { NextResponse } from "next/server";
import { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/services/dbConnect'
import { OpenAIStream, StreamingTextResponse } from 'ai'
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export const runtime = 'edge'

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
 
export async function POST(req: Request) {
  const { messages } = await req.json()
  const response = await openai.chat.completions.create({
    model: 'gpt-4',
    stream: true,
    messages,
  })
 
  const stream = OpenAIStream(response)
 
  return new StreamingTextResponse(stream)
}