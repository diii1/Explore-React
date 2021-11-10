import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFoundPage = () =>
{
    return (
        <div>
            <div className="container">
                <div className="row vh-100 justify-content-center align-content-center align-items-center">
                    <div className="col-4 center">
                        <h1 className="display-6">PAGE 404 NOT FOUND</h1>
                        <NavLink className='btn' style={ { margin: '0px 115px', border: '1px solid', padding: '12px 15px', borderRadius: '30px', textDecoration: 'none', color: 'white', backgroundColor: '#162F54' } } to='/'>GO BACK TO HOME</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NotFoundPage