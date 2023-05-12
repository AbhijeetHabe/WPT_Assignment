const colors = ["red","blue","green","lightgreen","yellow"]

function changeColor() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.querySelector("p").style.color = colors[randomNumber]
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}