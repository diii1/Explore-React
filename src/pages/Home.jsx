import React from "react";
import Todos from "../component/Todo/Todos";

const Home = () => {
    return (
        <div>
            <div className="container py-3">
                <div>
                    <div className='container' style={{marginTop: "200px"}}>
                        <div className='row d-flex justify-content-center align-items-center'>
                            <div className='col-7'>
                                <h1 className='text-center' style={{fontSize:"70px"}}>T o d o S</h1>
                                <Todos />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home