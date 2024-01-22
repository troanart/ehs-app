import { connect, close } from "../db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await connect(); 
    const students = await db.collection('students').find().toArray(); 
    console.log(students)
    // Не забывайте закрывать соединение после использования
    await close();

    return NextResponse.json(
      students)
  } catch (error) {
    console.error('Error handling GET request:', error);
    return {
      body: { error: 'Internal Server Error' },
      status: 500,
    };
  }

  
}