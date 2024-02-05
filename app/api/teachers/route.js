import { connect, close } from "../db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await connect();
    const teachers = await db.collection("teachers").find().toArray();
    console.log(teachers);
    await close();

    return NextResponse.json(teachers);
  } catch (error) {
    console.error("Error handling GET request:", error);
    return {
      body: { error: "Internal Server Error" },
      status: 500,
    };
  }
}
