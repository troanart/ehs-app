import { connect, close } from "../db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await connect();
    const groupsCursor = await db.collection("groups").find();
    const groups = await groupsCursor.toArray();
    console.log(groups);
    // Не забывайте закрывать соединение после использования
    await close();

    return NextResponse.json(groups);
  } catch (error) {
    console.error("Error handling GET request:", error);
    return {
      body: { error: "Internal Server Error" },
      status: 500,
    };
  } finally {
    await close(); // Убедитесь, что соединение закрывается даже в случае ошибки
  }
}
