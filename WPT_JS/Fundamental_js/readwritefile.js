import { readFileSync, writeFileSync } from "node:fs"

function readFile() {
    let filepath = "*\\demo.txt"
    let fileData = readFileSync(filepath, { encoding: "utf-8" })
    console.log(fileData)
}

function writeFile() {
    let data = "Hi my name is Node"
    let filepath = "*\\demo.txt"
    writeFileSync(filepath, data)
}

// readFile()
writeFile()