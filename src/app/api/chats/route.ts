import { NextResponse } from "next/server";
import dbConnect from '@/services/dbConnect'

export const GET = async () => {
    try {
      const db = await dbConnect();
      return NextResponse.json("success");
    } catch (error:any) {
      return NextResponse.json(
        { message: error.message },
        {
          status: 500,
        }
      );
    }
  };