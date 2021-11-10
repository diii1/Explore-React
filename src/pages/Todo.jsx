import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, completeTodo } from "../stores/todoSlice";

const Todo = () =>
{
    const dispatch = useDispatch();
    const todos = useSelector( ( state ) => state.todo.todos );
    return todos.map( ( todo, index ) => (
        <div
            className={ todo.isComplete ? "todo-row complete" : "todo-row" }
            key={ index }
        >
            <div key={ todo.id } onClick={ () => dispatch( completeTodo( todo.id ) ) }>
                { todo.title }
            </div>
            <div className="card-delete">
                <button
                    onClick={ () => dispatch( removeTodo( todo.id ) ) }
                    className="btn btn-danger delete"
                >
                    Delete
                </button>
            </div>
        </div>
    ) );
}

export default Todo