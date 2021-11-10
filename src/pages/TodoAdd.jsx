import React, { useState, useRef, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { addTodo } from "../stores/todoSlice";

function TodoForm(props) {
    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    });

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(
            addTodo({
                id: uuidv4(),
                title: input,
                completed: false,
            })
        );

        setInput("");
    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Add todo..."
                value={input}
                name="text"
                className="todo-input"
                onChange={handleChange}
                ref={inputRef}
                required
            />
            <button className="todo-button">Submit</button>
        </form>
    );
}

export default TodoForm;
