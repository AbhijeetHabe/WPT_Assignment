async function fetchAllData() {
    let url = "https://jsonplaceholder.typicode.com/posts"
    let result = await fetch(url)
    let data = await result.json()

    for (let item of data) {
        let parentTag = document.getElementById("parent")
        let existingValue = parentTag.innerHTML
        let newValue = `<div>
                        <h1>${item.id}<h1>
                        <h1>${item.title}</h1>
                        <p>${item.body}</p>
                        </div>`
        parentTag.innerHTML = existingValue + newValue
    }
}