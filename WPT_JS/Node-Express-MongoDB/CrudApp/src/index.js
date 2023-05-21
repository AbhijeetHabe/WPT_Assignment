import express from "express";
import cors from "cors";
import { getData, insertData, editData, deleteData } from "./db_connect.js"

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.get("/",async (req,res) => {
    let data = await getData();
    res.json(data)
})

app.post("/adduser",async (req, res) => {
    let data = req.body
    await insertData(data)
    res.json({"messsage":"User Added!!"})
})

app.delete("/deleteuser/:id", async (req, res) => {
    try {
      let userId = req.params.id;
      await deleteData(userId);
      res.json({ message: "User Deleted!!" });
    } catch (error) {
      console.error("Error deleting user:", error);
      res.status(500).json({ message: "Error deleting user" });
    }
  })
  
  app.put("/edituser/:id", async (req, res) => {
    try {
      let userId = req.params.id;
      let newData = req.body;
      await editData(userId, newData);
      res.json({ message: "User Updated!!" });
    } catch (error) {
      console.error("Error updating user:", error);
      res.status(500).json({ message: "Error updating user" });
    }
  })
  
app.listen(4000, () => console.log("Server started"))