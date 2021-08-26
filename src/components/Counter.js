import React from 'react';

function Counter ({ number, diff, onIncrease, onDecrease, onSetDiff }){
    
    const onChange = e => {
        // e.target.value 는 문자열이기 때문에 숫자로 변환해줘야함
        onSetDiff(parseInt(e.target.value, 10));
    }

    return (
        <div>
            <h1>{number}</h1>
            <div>
                <input type = "number" value= {diff} min = "1" onChange = {onChange} />
                <button onClick = {onIncrease} > + </button>
                <button onClick = {onDecrease} > + </button>
            </div>
        </div>
    )
}

export default Counter;