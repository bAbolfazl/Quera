import { useState } from 'react';

export function useStack() {
    // ...
    const [arrState, setArrState] = useState([])

    const stack = arrState

    const push = (item) => {
        console.log([...arrState, item])
        setArrState([...arrState, item])
    }

    const pop = () => {
        const newArr = new Array(...arrState)
        const poped = newArr.pop()

        setArrState(newArr)

        return poped
    }

    return { stack, push, pop }
}

export function useCounter(start, finish) {
    // ...
    const [countState, setCountState] = useState(start)

    if (countState - 1 === finish) setCountState(start)

    const count = () => setCountState(countState + 1)

    return [countState, count]
}

