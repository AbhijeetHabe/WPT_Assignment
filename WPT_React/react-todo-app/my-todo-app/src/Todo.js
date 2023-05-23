import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'

let Todo = () => {
    let [todo, setTodo] = useState("")
    let [list, setList] = useState([])

    let inputHandler = (e) => {
        e.preventDefault()
        let newValue = e.target.value;
        setTodo(newValue)
    }

    let addTodo = () => {
        let newTodo = [todo, ...list]
        setList(newTodo)
        setTodo("")
    }

    let deleteTodo = (index) => {
        list.splice(index, 1)
        setList([...list])
    }

    return (
        <div className='container text-center bg-secondary'>
            <h1 className='bg bg-primary text-light'>To Do App</h1>
            <div className='row'>
                <div className='col-sm-9 mt-1'>
                    <input className='form-control form-control-lg' type="text" value={todo} onChange={inputHandler} />
                </div>
                <div className='col-sm-3'>
                    <input className='btn btn-info m-2' type="button" value="Add To Do" onClick={addTodo} />
                </div>
            </div>
            <hr />
            <div>
                {list.map((item, index) => (
                    <div className='d-flex justify-content-between mt-2' key={index}>
                        <h3 className='text-light'>{item}</h3>
                        <input className='btn btn-danger' type="button" value="DEL" onClick={() => deleteTodo(index)} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export { Todo }