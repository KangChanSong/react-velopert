import React from 'react';

function Hello({name ,color}){
    
    return <h2 style = {{color}}>
        안녕, {name}
    </h2>
} 

Hello.defaultProps = {
    name : "언노운",
    color : "green"
}

export default Hello;