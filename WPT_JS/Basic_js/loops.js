let array = ["Mango","Apple","Banana","JackFruit","Melon"]

// Simple for loop
for (let i=0; i<array.length; i++) {
    console.log(array[i])
}

// 2nd type of for loop
for (let item of array) {
    console.log(item)
}

// lambda and stream loop
array.forEach(console.log)

// for each using arrow function
array.forEach((item) => console.log(item))