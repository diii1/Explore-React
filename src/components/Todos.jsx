import { useState } from 'react';
import AddTodo from './AddTodo';
import Todo from './Todo';

const Todos = () =>
{
    const [ todos, setTodos ] = useState( [
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
    ] )
    const [ addVal, setaddTodoValue ] = useState( '' )

    const handleDelete = ( todo ) =>
    {
        const todoo = todos.filter( t =>
        {
            return t.id !== todo
        } )
        setTodos( todoo )
    }
    const handleComplete = ( todo ) =>
    {
        const todooo = [ ...todos ]
        todooo.map( ( t ) =>
        {
            if ( t.id === todo.id )
            {
                t.completed = !t.completed
            }
            return t
        } )
        setTodos( [ ...todooo ] )
    }


    const addNewTodo = ( title ) =>
    {
        if ( title )
        {
            setTodos( [ ...todos, { id: Math.random(), title, completed: false } ] )
        } else
        {
            alert( 'Isi Inputan terlebih dahulu sebelum mensubmit!' )
        }
    }

    return (
        <div>
            <table className="table">
                <tbody>
                    <tr>
                        <td colSpan="4" className="text-center">
                            <AddTodo AddTodo={ addNewTodo } TodoValue={ addVal } />
                        </td>
                    </tr>
                    { console.log(todos)}
                    { todos.map( ( todo, index ) => (
                        <tr key={ todo.id }>
                            <Todo key={ todo.id } todo={ todo } todoDelete={ handleDelete } todoComplete={ handleComplete } />
                        </tr>
                    ) ) }

                </tbody>
            </table>
        </div>
    );
}

export default Todos;