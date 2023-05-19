import express from "express";
import cors from "cors";
import { insertTodo, readAllTodo } from "./db_todo.js";

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true}))
app.use(cors());

app.get("/", async (req, res) => {
    let list = await readAllTodo()
    res.json(list)
})

app.post("/addtodo", async (req,res) => {
    let data = req.body;
    await insertTodo(data);
    res.json({message: "true"})
})

app.listen(4000, () => console.log("Hello Server"))