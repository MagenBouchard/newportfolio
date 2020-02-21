import React from 'react';
import './body.css'

function Body(props){
    return (
        <div className="container">
            <div className="wrapper">{props.children}
       
            </div>

        </div>
    )
}

export default Body;