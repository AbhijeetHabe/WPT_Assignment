const colors = ["red","blue","green","lightgreen","yellow"]

function changeColor() {
    const randomNumber = getRandomNumber();
    console.log(randomNumber)
    document.querySelector("p").style.color = colors[randomNumber]
}

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length)
}

function applyFont(p1) {
    let ptag = document.querySelector("p");
    ptag.style.fontSize = p1;
  }

  function applyAvailability(p1) {
    let inputAddToCartTag = document.querySelector("#add-to-cart");
  
    if (p1) {
      inputAddToCartTag.removeAttribute("disabled");
    } else {
      inputAddToCartTag.setAttribute("disabled", "true");
    }
  }
  
  function showAndHide(p1) {
    let inputAddToCartTag = document.querySelector("#add-to-cart");
  
    if (p1) {
      inputAddToCartTag.style.display = "inline";
    } else {
      inputAddToCartTag.style.display = "none";
    }
  }