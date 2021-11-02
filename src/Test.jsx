import React from 'react';

export default function Test(prop){
    console.log("prop ", prop);
    return(
        <div>
            <h1 className="text-red">Prop</h1>
            <h1>{prop.title}</h1>
        </div>
    );
}
