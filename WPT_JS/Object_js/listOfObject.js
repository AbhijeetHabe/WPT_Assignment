// Declaration of list of objects

let list = [{name: "Abhi",email: "abhi@gmail.com", contact: "000000"},
            {name: "Akash", email: "akash@gmail.com", contact: 111111},
            {name: "Aniket", email: "aniket@gmail.com", contact: 222222}]

// Accessing one member from the list of objects
member1 = list[0]

// Modify existing object in the list
let newObj = {name:"Aafreen", email:"aafreen@gmail.com", contact: 333333}
list[1] = newObj

// Adding new object to the list of object
let newObj1 = {name:"Anand", email:"anand@gmail.com", contact: 444444}
list.push(newObj1)

// Remove object from the list of object
list.pop()

// Iterate and print all the objects in the list of objects
for (let item of list) {
    console.log(item)
}
