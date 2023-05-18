// Creating a JSON string
let obj = {
    fname: "John",
    lname: "Cena",
    profession: "Wrestler",
    nationality: "American"
}

// Convert Object to JSON string
let string = JSON.stringify(obj)
console.log(string)
// Convert JSON string to object
let convetToObj = JSON.parse(string)
console.log(convetToObj)
