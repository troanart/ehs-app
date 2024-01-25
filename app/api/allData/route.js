import { connect, close } from "../db";
import { NextResponse } from "next/server";

export async function GET(request) {
  try {
    const db = await connect(); 

    // Производим агрегацию для объединения данных из трех коллекций
    const result = await db.collection('students').aggregate([
      {
        $lookup: {
          from: 'groups',
          localField: 'groupId',
          foreignField: '_id',
          as: 'groupData'
        }
      },
      {
        $unwind: '$groupData' // Развернуть массив после $lookup
      },
      {
        $lookup: {
          from: 'teachers',
          localField: 'groupData.teacherId',
          foreignField: '_id',
          as: 'teacherData'
        }
      },
      {
        $unwind: '$teacherData' // Развернуть массив после $lookup
      },
    ]).toArray();

    // Не забывайте закрывать соединение после использования
    await close();

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error handling GET request:', error);
    return {
      body: { error: 'Internal Server Error' },
      status: 500,
    };
  } finally {
    await close(); // Убедитесь, что соединение закрывается даже в случае ошибки
  }
}