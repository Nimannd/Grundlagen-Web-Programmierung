
import { useState, useEffect } from 'react';
import todoService from '../todo/TodoService';

import './TodoCard.css';

export default function TodoCard() {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({"description": "", "done": false});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function loadTodos() {
        setLoading(true);
        todoService.get()
        .then(data => {
            setTodos(data);
            setLoading(false);
        });
    }

    useEffect(() => {
        loadTodos();
    }, []);

    async function  handleCheckTodo(e, item) {
        e.preventDefault();
        item.done = !item.done;
        todoService.put(item)
            .then(() => setTodos([...todos]));
    }

    async function handleDeleteTodo(e, item) {
        e.preventDefault();
        setLoading(true);
        todoService.delete(item)
            .then(() => {  
                setTodos(todos.filter(i => i._id !== item._id));
            });
    }

    function handleChangeNewTodo(event){
        const name = event.target.name;
        const value = event.target.value;
        setNewTodo(values => ({...values, [name]: value}))
      }

    async function handleAddTodo(event) {
        event.preventDefault();
        setLoading(true);
        try {
            let createdTodo = await todoService.post(newTodo);
            todos.push(createdTodo);
            setTodos([...todos]);
            setNewTodo({"description": "", "done": false});
            setLoading(false);
        } catch (error) {
            setLoading(false);
            setError(error);
        }
    };

    return (
        <article className="card">
            <div className="card-header">
                To-Do Liste
            </div>
            <div className="card-body">
                <ul className="list-group list-group-flush mb-3">
                    {todos.map((item) => (
                        <li key={item._id} className={"list-group-item px-0 " + (item.done ? 'completed' : '')}>
                            <form className="d-flex justify-content-between">
                                <span>
                                    {item.description}
                                </span>
                                <div className="btn-group" role="group">
                                    <button className="btn btn-secondary" onClick={(e) => handleCheckTodo(e, item)}>
                                        <i className="material-icons">check</i>
                                    </button>
                                    <button className="btn btn-secondary" onClick={(e) => handleDeleteTodo(e, item)}>
                                        <i className="material-icons">delete</i>
                                    </button>
                                </div>
                            </form>
                        </li>
                    ))}
                </ul>

                <form onSubmit={handleAddTodo}>
                    <div className="input-group">
                        <input className="form-control"
                            type="text"
                            name="description"
                            value={newTodo.description}
                            onChange={handleChangeNewTodo}
                            placeholder="Neue Aufgabe..." />
                        <div className="input-group-append">
                            <button type="submit" className="btn btn-primary">
                                <i className="material-icons">add</i>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </article>
    );
}