import React from 'react';

export default function Test2(prop){
    console.log("prop2 ", prop);
    return(
        <div>
            <h1>Prop 2</h1>
            <h1>{prop.title}</h1>
        </div>
    );
}
