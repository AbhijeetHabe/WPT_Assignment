let valueTag = document.querySelector("#value")

function increment() {
    let num = valueTag.innerHTML
    let newNum = parseInt(num) +1
    valueTag.innerHTML = newNum
}

function decrement() {
    let num = valueTag.innerHTML
    let newNum = parseInt(num) -1
    valueTag.innerHTML = newNum
}

function reset() {
    let num = valueTag.innerHTML
    let newNum = 0
    valueTag.innerHTML = newNum
}