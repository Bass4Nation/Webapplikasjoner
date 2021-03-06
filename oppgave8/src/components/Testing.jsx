import { useCallback, useState } from "react"

export const Testing = () => {

    var trueOrFalse = 'false';
    
    const [number, setNumber ] = useState(0);
    const [testState, setTestState] = useState(false);

    const increment = useCallback(() => setNumber(number => number +1), [setNumber]);
    const decrement = useCallback(() => setNumber(number => number -1), [setNumber]);

    const changeTestState = useCallback(() => setTestState(testState => true), [setTestState]);

// For å sjekke om boolean virker
    if(testState == true){
        trueOrFalse = 'true';
    }


    return(
        <div>
        <p>Number is: {number}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
        <button onClick={changeTestState}>*</button>
        <p>Boolean is {trueOrFalse}</p>
        </div>
    )
}