import React, { Component } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

class Todos extends Component
{
    state = {
        addTodoValue: "",
        todos: [
            {
                id: 1,
                title: "Mengerjakan Exercise",
                completed: true
            },
            {
                id: 2,
                title: "Mengerjakan Assignment",
                completed: false
            },
        ]
    }

    getId ()
    {
        let date = new Date();
        var id = date.getTime();
        return id;
    }

    handleDelete = todo =>
    {
        const todos = this.state.todos.filter( ( t ) =>
        {
            return t.id !== todo
        } );
        this.setState( { todos } );
    }

    handleComplete = todo =>
    {
        const todos = [ ...this.state.todos ];
        todos.map( ( t ) =>
        {
            if ( t.id === todo.id )
            {
                t.completed = !t.completed;
            }
            return t;
        } );
        this.setState( { todos } );
    }

    addNewTodo = title =>
    {
        if ( title )
        {
            const todos = [ ...this.state.todos ];
            todos.push(
                {
                    id: this.getId(),
                    title: title,
                    completed: false
                }
            );
            this.setState( { addTodoValue: "", todos } )
        } else
        {
            alert( 'Isi Inputan terlebih dahulu sebelum mensubmit!' )
        }
    }
    render ()
    {
        return (
            <div>
                <table className="table">
                    <tbody>
                        <tr>
                            <td colSpan="4" className="text-center">
                                <AddTodo AddTodo={ this.addNewTodo } TodoValue={ this.state.addTodoValue } />
                            </td>
                        </tr>
                        { this.state.todos.map( ( todo, index ) => (
                            <tr key={ todo.id }>
                                <Todo todo={ todo } todoDelete={ this.handleDelete } todoComplete={ this.handleComplete } />
                            </tr>
                        ) ) }

                    </tbody>
                </table>
            </div>
        );
    }
}

export default Todos;