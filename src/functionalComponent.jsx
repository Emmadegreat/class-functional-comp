import { useState } from 'react';

function Count() {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    const decrementCount = () => {
        setCount(count - 1);
    };

    const resetCount = () => {
        setCount(0);
    };

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
            <button style={{margin:"0rem 0.4rem"}} onClick={decrementCount}>Decrement</button>
            <button onClick={resetCount}>Reset</button>
        </div>
    );
}

export default Count;
