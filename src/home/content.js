import React from 'react';
import img1 from '../assets/img/matthew-hamilton-tNCH0sKSZbA-unsplash.jpg';

const Content = () => {
    return (
        <div className="content">
            <div className="row">
                <div className="col-md-5">
                    <img src={img1} className="gambar-left" alt="gambar-left" />
                </div>
                <div className="col-md-7 text">
                    <h4 className="text-1">Hi, my name is</h4>
                    <h1 className="text-2">Anne Sullivan</h1>
                    <h3 className="text-3">I build things for the web</h3>
                    <a href="#" className="btn getTouch" role="button">Get in Touch</a>
                </div>
            </div>
        </div>
    );
}

export default Content;
