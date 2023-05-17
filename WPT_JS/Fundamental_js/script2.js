async function fetchData() {
    let id = document.getElementById("id")
    let parentTag = document.getElementById("parent")
    let url = `https://jsonplaceholder.typicode.com/posts/${id.value}`
    let result = await fetch(url)
    let data = await result.json()
    newValue = `<div>
                <h1>${data.id}<h1>
                <h1>${data.title}</h1>
                <p>${data.body}</p>
                </div>`
    parentTag.innerHTML = newValue
    console.log(data)
}