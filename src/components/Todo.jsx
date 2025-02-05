import { useState } from 'react';
import './todo.css';

function Todo() {
    const [input, setInput] = useState("");
    const [todos, setTodo] = useState([])
    const [Editing, setEditing] = useState(false);
    const [currentTodo, setCurrentTodo] = useState({});
    const handle = (e) => {
        setInput(e.target.value);
    }
    function add() {
        if (Editing) {
            const updatedTodos = todos.filter((_, index) => index !== currentTodo.index);
            updatedTodos.splice(currentTodo.index, 0, input);
            setTodo(updatedTodos);
            setEditing(false);
            setCurrentTodo({});
        } else {
            setTodo([...todos, input]);
        }
        setInput("");
    }
    function remove(index) {
        todos.splice(index, 1);
        setTodo([...todos]);
    }
    const edit = (index) => {
        setInput(todos[index]);
        setEditing(true);
        setCurrentTodo({ index, text: todos[index] });
    }

    return (
        <>
            <div id="myDIV" className="header">
                <h2 style={{ margin: 5 }}>My To Do List</h2>
                <input value={input} type="text" id="myInput" onChange={handle} placeholder="Title..." />
                <span onClick={add} className="addBtn">Add</span>
            </div>
            <ul>
                {
                    todos.map((item, index) => {
                        return <li key={index}>{item} <button type="submit" onClick={() => edit(index)} className="btn bg-danger mt-2 w-25">
                        Edit
                    </button> <span onClick={() => remove(index)} className='close'>X</span></li>
                    })
                }
            </ul>

        </>
    )
}

export default Todo