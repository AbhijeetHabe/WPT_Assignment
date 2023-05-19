import { MongoClient } from "mongodb";

const url = "mongodb://127.0.0.1:27017"
const dbName = "TodoApp"

async function insertTodo(data) {
    const client = new MongoClient(url);

    const db = client.db(dbName);
    await db.collection("list").insertOne(data);

    console.log("Successful call")
    await client.close()
}

async function readAllTodo() {
    const client = new MongoClient(url);

    const db = client.db(dbName)
    const todo_collection = db.collection("list")

    let list = await todo_collection.find().toArray();
    await client.close()

    return list
}

export { insertTodo, readAllTodo }