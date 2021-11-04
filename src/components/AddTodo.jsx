import React, { Component } from 'react';
import './todos.css'
class AddTodo extends Component
{
    state = {
        defaultValue: "",
        value: this.props.TodoValue
    }

    handleChange = ( e ) =>
    {
        this.setState( {
            value: e.target.value
        } );
    }

    clearInput = () =>
    {
        document.getElementById( "title" ).value = "";
        this.setState( { value: "" } );
    }

    addTodo = () =>
    {
        this.props.AddTodo( this.state.value );
        this.clearInput();
    }

    render ()
    {
        return (
            <div className="input-group mb-3 border-full">
                <input type="text" className="form-control" id="title" placeholder="Add todo..." onChange={ this.handleChange } />
                <div className="input-group-append">
                    <button onClick={ this.addTodo } className="btn btn-outline text-black btn-submit" type="button" id="button-addon2">Submit</button>
                </div>
            </div>
        );
    }
}

export default AddTodo;