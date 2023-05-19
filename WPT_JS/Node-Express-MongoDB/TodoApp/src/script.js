let form = document.getElementById("form")
let textInput = document.getElementById("textInput")
let dateInput = document.getElementById("dateInput")
let textarea = document.getElementById("textarea")
let msg = document.getElementById("msg")
let tasks = document.getElementById("tasks")
let add = document.getElementById("add")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    formValidation()
})

function formValidation() {
    if (textInput.value === "") {
        msg.innerHTML = "Task cannot be blank"
    } else {
        msg.innerHTML = ""
        acceptData()
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
    }
}

async function acceptData() {
    let taskTitle = textInput.value
    let taskDate = dateInput.value
    let taskDescription = textarea.value

    let url = `http://127.0.0.1:4000/addtodo`
    let data = { title: taskTitle, date: taskDate, description: taskDescription}

    await fetch(url, {
      method:"POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      }
    })
    createTasks()
}

function resetForm() {
    textInput.value = ""
    dateInput.value = ""
    textarea.value = ""
}

async function createTasks() {
  let url = `http://127.0.0.1:4000/`;
  let res = await fetch(url);
  let data = await res.json();
    tasks.innerHTML = "";
    for (let item of data) {
      tasks.innerHTML += `
      <div id=${item.title}>
            <span class="fw-bold">${item.title}</span>
            <span class="small text-secondary">${item.date}</span>
            <p>${item.description}</p>
    
            <span class="options">
              <i onClick= "editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fas fa-edit"></i>
              <i onClick ="deleteTask(this);createTasks()" class="fas fa-trash-alt"></i>
            </span>
          </div>
      `
    };
  
    resetForm();
  };

let deleteTask = (e) => {
e.parentElement.parentElement.remove();

data.splice(e.parentElement.parentElement.id, 1);
};
