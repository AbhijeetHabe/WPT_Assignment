import { MongoClient, ObjectId } from "mongodb";

const url = "mongodb://127.0.0.1:27017/"

const dbName = "CrudApp";

async function insertData(data) {
    const client = new MongoClient(url);
    const db = client.db(dbName)
    await db.collection("UserInfo").insertOne(data)
    client.close()
}

async function getData() {
    const client = new MongoClient(url);
    const db = client.db(dbName)
    let list = await db.collection("UserInfo").find().toArray()

    client.close()
    return list
}

async function deleteData(userId) {
    const client = new MongoClient(url);
  
    try {
      await client.connect(); // Connect to MongoDB server
      const db = client.db(dbName);
      let id = new ObjectId(userId)
      await db.collection("UserInfo").deleteOne({ _id: id });
      console.log("User data deleted successfully!");
    } catch (error) {
      console.error("Error deleting user data:", error);
    } finally {
      client.close(); // Close the MongoDB client connection
    }
  }
  
  async function editData(userId, newData) {
    const client = new MongoClient(url);
  
    try {
      await client.connect(); // Connect to MongoDB server
      const db = client.db(dbName);
  
      await db.collection("UserInfo").updateOne(
        { _id: ObjectId(userId) },
        { $set: newData }
      );
      console.log("User data updated successfully!");
    } catch (error) {
      console.error("Error updating user data:", error);
    } finally {
      client.close(); // Close the MongoDB client connection
    }
  }

export { getData, insertData, editData, deleteData }