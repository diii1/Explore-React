import { useState } from 'react';
import './todos.css'

const AddTodo = (props) =>
{
    const [ val, setVal ] = useState(props.TodoValue)

    const handleChange = ( e ) =>
    {
        setVal(
            e.target.value
        )
    }

    const clearInput = () =>
    {
        document.getElementById( "title" ).value = "";
        setVal( { value: "" } );
    }

    const addTodo = () =>
    {
        props.AddTodo( val );
        clearInput();
    }

    return (
        <div className="input-group mb-3 border-full">
            <input type="text" className="form-control" id="title" placeholder="Add todo..." onChange={ handleChange } />
            <div className="input-group-append">
                <button onClick={ addTodo } className="btn btn-outline text-black btn-submit" type="button" id="button-addon2">Submit</button>
            </div>
        </div>
    );
}

export default AddTodo;