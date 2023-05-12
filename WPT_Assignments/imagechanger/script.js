const images = ["mane.jpeg","messi.jpeg","ronaldo.jpeg","neymar.jpeg","son.jpeg"]
const n = images.length

let num = 0
let imgTag = document.getElementById("imgid");
function nextImage() {
    num = (num+1)%n
    imgTag.setAttribute("src", images[num])
}

function previousImage() {
    num = num-1
    if (num<0) {
        num = n-1
    }
    imgTag.setAttribute("src", images[num])
}