// Object literal with zero parameters
let obj = {}

// Object literal with one parameters
let obj1 = {name: "john"}

// Object literal with two parameters
let obj2 = {name: "Siarra",
            sirname: "willington"}

// Object literal with three parameters
let obj3 = {name: "david",
            sirname: "johnathan",
            job: "manager"}

// Access the members of the object by using .(dot operator)
console.log(obj3.name) 
// a)	Access the members of the object by using [] operator
console.log(obj3["job"])

// Modify the member of the object
obj3.name = "Abhi"
obj3.sirname = "Habe"
obj3["job"] = "Software Engineer"
console.log(obj3)

// add a new object member
obj2.job = "Assistant Manager"
console.log(obj2)

// delete a new object member
delete obj1.name
console.log(obj1)
