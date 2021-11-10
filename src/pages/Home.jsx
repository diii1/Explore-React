
import React from 'react'
import Todo from './Todo'
import TodoList from './TodoList'

const Home = () =>
{
    return (
        <div className="todo-app">
            <div className="row vh-100 justify-content-center align-content-center align-items-center">
                <div className="col-7">
                    <h1 className="text-title text-center mb-5" style={{fontSize:"75px"}}>T o d o S</h1>
                    <TodoList />
                    <Todo />
                </div>
            </div>
        </div>
    )
}

export default Home