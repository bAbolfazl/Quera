import React from 'react';
import {useCounter, useStack} from './hooks'

export function Demo() {
    return <div className="demo">
        <CounterDemo/>
        <hr/>
        <StackDemo/>
    </div>;
}

const words = ['Apple', 'Banana', 'Cherry', 'Grape'];
export function StackDemo() {
    const {stack, push, pop} = useStack();

    return <div>
        {words.map((word, index) => <button key={index} onClick={() => push(word)}>{word}</button>)}
        <button onClick={pop}>» Pop</button>
        <ul>
            {stack.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
    </div>;
}

export function CounterDemo() {
    const [c, count] = useCounter(100, 105);

    return <div>
        <p>{c}</p>
        <button onClick={count}>Count</button>
    </div>;
}
