
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = "mongodb+srv://troanart:EMMJkph19@cluster0.nuv6ab8.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Функция для установки соединения с базой данных
async function connect() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
    return client.db("EHS"); // Возвращаем экземпляр базы данных для дальнейшего использования
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

// Функция для закрытия соединения с базой данных
async function close() {
  try {
    await client.close();
    console.log("Closed MongoDB connection!");
  } catch (error) {
    console.error('Error closing MongoDB connection:', error);
    throw error;
  }
}

export { connect, close };