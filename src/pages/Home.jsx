import React from "react";
import Todo from "./Todo";
import TodoAdd from "./TodoAdd";

const Home = () => {
    return (
        // <div>
        //     <div className="container py-3">
        //         <div>
        //             <div className='container' style={{marginTop: "200px"}}>
        //                 <div className='row d-flex justify-content-center align-items-center'>
        //                     <div className='col-7'>
        //                         <h1 className='text-center' style={{fontSize:"70px"}}>T o d o S</h1>
        //                         <Todos />
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        <div className="todo-app">
            <h1 className="text-title">todos</h1>
            <TodoAdd />
            <Todo />
            {/* <TodoForm onSubmit={addTodo}/>
            <Todo todos={todos} completeTodo={completeTodo} removeTodo={removeTodo}/> */}
        </div>
    )
}

export default Home