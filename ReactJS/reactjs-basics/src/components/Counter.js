import React,{useState} from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () =>{
        setCount(count+1);
    };

    const decrement = ()=>{
        setCount(count-1);
    }

    return(
        <div className='counter'>
            <h2>Counter</h2>
            <p>Count: {count}</p>
            <button onClick={increment} className= 'counter-button'>Increment++</button> 
            <button onClick={decrement} className= 'counter-button'>Decrement--</button> <br/><br/><br/>
        </div>
    );
}

export default Counter;